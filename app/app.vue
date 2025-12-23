<template>
  <UApp class="min-h-screen bg-white antialiased">
    <NuxtRouteAnnouncer />
    <div ref="appContent" class="relative" style="opacity: 0">
      <!-- Fallback grayscale image for browsers without WebGL -->
      <NuxtImg
        ref="bgMapImage"
        src="/images/colored-map.png"
        alt="Colored Map"
        class="fixed top-1/2 right-0 w-[85vw] object-contain z-[-1] -translate-y-1/2"
        loading="eager"
      />

      <!-- <div class="absolute top-0 right-0 w-2/3 z-[-1] lg:hidden overflow-hidden">
        <NuxtImg src="/images/footer-mobile.png" alt="Colored Map" class="w-full h-full translate-x-20" loading="eager" />
      </div> -->

      <div class="grid grid-cols-24">
        <button
          @click="toggleMenu"
          class="fixed top-5 right-5 lg:hidden w-10 h-10 bg-tertiary flex flex-col items-center justify-center gap-1 transition-all duration-300 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <i class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-1.5' : ''" />
          <i class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''" />
          <i class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''" />
        </button>

        <!-- Sidebar - 3 columns -->
        <div class="col-span-24 lg:col-span-5">
          <SideNav />
        </div>

        <!-- Main Content - 9 columns -->
        <main class="relative col-span-24 lg:col-span-19">
          <UContainer class="lg:pt-14 pb-8 px-0!">
            <SectionHero />
            <SectionWhyJoin />
            <SectionTimeline />
            <SectionPrize />
            <SectionTracks />
            <SectionJudges />
            <SectionSupport />
            <SectionConnect id="connect" />
            <SectionFaq />
          </UContainer>

          <!-- Footer -->
          <footer class="pt-10 pb-6">
            <div class="flex flex-col items-center gap-4">
              <!-- Social Icons -->
              <div class="flex items-center gap-4">
                <UButton
                  to="https://github.com/openguild-labs"
                  target="_blank"
                  color="neutral"
                  icon="i-fa-github-square"
                  size="xl"
                  class="text-[#666]! hover:text-black! bg-[unset]!"
                />
                <UButton
                  to="https://discord.gg/kHDZtykSx2"
                  target="_blank"
                  color="neutral"
                  icon="i-bi-discord"
                  size="xl"
                  class="text-[#666]! hover:text-black! bg-[unset]!"
                />
                <UButton
                  to="https://x.com/openguildwtf"
                  target="_blank"
                  color="neutral"
                  icon="i-fa6-brands-square-x-twitter"
                  size="xl"
                  class="text-[#666]! hover:text-black! bg-[unset]!"
                />
              </div>

              <!-- Copyright -->
              <p>&copy; 2025 OpenGuild. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const appContent = useTemplateRef<HTMLElement>("appContent")
const bgMapImage = useTemplateRef<{ imgEl: HTMLImageElement }>("bgMapImage")

// App fade-in animation duration (in seconds)
const APP_FADE_IN_DURATION = 1
const APP_FADE_IN_DELAY = 0.2

// Provide the total animation time to child components
const appLoadAnimationTime = APP_FADE_IN_DURATION
provide("appLoadAnimationTime", appLoadAnimationTime)

// Title and favicons are configured in nuxt.config.ts

const isMenuOpen = ref(false)
provide("isMenuOpen", isMenuOpen)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  if (!appContent.value) return

  // Fade in the entire app content
  gsap.to(appContent.value, {
    opacity: 1,
    duration: APP_FADE_IN_DURATION,
    ease: "power2.out",
    delay: APP_FADE_IN_DELAY,
  })

  const connectSection = document.querySelector("#connect")
  if (!connectSection || !bgMapImage.value) return

  gsap.set(bgMapImage.value.imgEl, {
    opacity: 0.15,
    filter: "grayscale(100%)",
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#connect",
      start: "top 50%",
      end: "bottom 50%",
      toggleActions: "play reverse play reverse",
    },
  })

  tl.to(bgMapImage.value.imgEl, {
    opacity: 0.7,
    filter: "grayscale(0%)",
    duration: 0.5,
    ease: "power2.inOut",
  })
})
</script>
