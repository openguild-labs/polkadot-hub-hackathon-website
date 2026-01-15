<template>
  <UApp class="min-h-screen bg-background antialiased overflow-x-hidden">
    <!-- Noise Background Overlay -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <NuxtImg
        src="/images/noise-background.png"
        alt=""
        class="w-full h-full object-cover"
        loading="eager"
        aria-hidden="true"
      />
    </div>
    <NuxtRouteAnnouncer />
    <div ref="appContent" class="relative z-10" style="opacity: 0">
      <div class="grid grid-cols-24">
        <button
          @click="toggleMenu"
          class="fixed top-5 right-5 lg:hidden w-10 h-10 bg-tertiary flex flex-col items-center justify-center gap-1 transition-all duration-300 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <i
            class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300"
            :class="isMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
          />
          <i
            class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          />
          <i
            class="w-4 h-0.5 bg-gray-400 rounded-full transition-all duration-300"
            :class="isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
          />
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
            <SectionVideo />
            <SectionBlogs />
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
                  class="text-[#666]! hover:text-primary! bg-[unset]!"
                />
                <UButton
                  to="https://discord.gg/kHDZtykSx2"
                  target="_blank"
                  color="neutral"
                  icon="i-bi-discord"
                  size="xl"
                  class="text-[#666]! hover:text-primary! bg-[unset]!"
                />
                <UButton
                  to="https://x.com/openguildwtf"
                  target="_blank"
                  color="neutral"
                  icon="i-fa6-brands-square-x-twitter"
                  size="xl"
                  class="text-[#666]! hover:text-primary! bg-[unset]!"
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
import { gsap } from "gsap";

const appContent = useTemplateRef<HTMLElement>("appContent");

// App fade-in animation duration (in seconds)
const APP_FADE_IN_DURATION = 1;
const APP_FADE_IN_DELAY = 0.2;

// Provide the total animation time to child components
const appLoadAnimationTime = APP_FADE_IN_DURATION;
provide("appLoadAnimationTime", appLoadAnimationTime);

// Title and favicons are configured in nuxt.config.ts

const isMenuOpen = ref(false);
provide("isMenuOpen", isMenuOpen);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  if (!appContent.value) return;

  // Fade in the entire app content
  gsap.to(appContent.value, {
    opacity: 1,
    duration: APP_FADE_IN_DURATION,
    ease: "power2.out",
    delay: APP_FADE_IN_DELAY,
  });
});
</script>
