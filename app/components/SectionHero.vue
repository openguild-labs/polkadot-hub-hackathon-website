<template>
  <section id="home" class="relative px-5 md:px-10 lg:px-18 lg:pl-0!">
    <!-- Background Image -->
    <div
      class="max-lg:hidden absolute max-w-3xl bottom-3/5 right-0 w-4/7 translate-y-1/2"
    >
      <NuxtImg
        src="/images/Dotted Background.png"
        alt="Background hero"
        class="w-full max-w-3xl max-h-3xl h-full object-cover opacity-50"
        loading="eager"
      />
    </div>

    <!-- Logo Header -->
    <div class="mb-4 lg:mb-6">
      <div class="inline-flex bg-black p-2">
        <span
          class="font-minecraftia text-white text-xl lg:text-2xl leading-none"
          >POLKADOT SOLIDITY</span
        >
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative space-y-8 lg:space-y-10">
      <!-- Title -->
      <div ref="titleContainer" class="space-y-4">
        <h1
          ref="titleElement"
          class="relative inline-block text-black leading-tight sm:leading-[0.85] tracking-tight sm:whitespace-nowrap sm:w-full w-fit"
        >
          <span ref="hackathonText">#########</span
          ><span class="max-sm:hidden">&nbsp;</span>
          <br class="sm:hidden" />
          <div class="relative inline">
            <span ref="yearText">####</span>
            <div
              class="yearBar max-sm:hidden absolute bottom-0 left-0 h-7 bg-gray-300"
              style="width: 0"
            />
          </div>

          <div
            class="yearBar sm:hidden absolute bottom-7 right-0 w-[170px] h-4 bg-gray-300 max-w-1/2"
            style="width: 0"
          />
        </h1>

        <!-- Subtitle-->
        <div ref="subtitleContainer" class="flex items-center gap-4 lg:gap-6">
          <h2
            ref="subtitle"
            class="font-vcr-osd-mono text-black uppercase max-sm:text-base relative inline-block leading-[1.1]"
          >
            <span
              v-for="(char, index) in subtitleChars"
              :key="index"
              :ref="(el) => setCharRef(el, index)"
              :class="char === ' ' ? 'w-[0.3em]' : ''"
              class="inline-block invisible"
            >
              {{ char === " " ? "\u00A0" : char }}
            </span>
            <span
              ref="typingCursor"
              class="absolute top-0 left-0 w-3 h-full lg:w-5 bg-primary opacity-0"
            ></span>
          </h2>
        </div>
      </div>

      <!-- Date -->
      <p class="text-black text-lg lg:text-2xl font-normal">
        Feb 15, 2026 - Mar 24, 2026
      </p>

      <!-- Description -->
      <p class="lg:text-lg max-w-[400px]">
        A 4-week online hackathon designed to discover and accelerate the most
        promising Web3 builders on Polkadot Hub
      </p>

      <!-- Action Buttons -->
      <div class="flex items-stretch gap-4 mb-4!">
        <div class="flex flex-col sm:flex-row gap-4 max-sm:flex-3">
          <UButton
            to="#explore"
            color="neutral"
            variant="solid"
            class="grow w-full bg-black! text-white! hover:bg-gray-800!"
          >
            Register as Hacker
          </UButton>
          <UButton
            to="#winners"
            color="primary"
            variant="outline"
            class="grow w-full bg-primary! text-white!"
          >
            Workshops Calendar
          </UButton>
        </div>
        <div class="sm:hidden flex-1 flex bg-tertiary opacity-75" />
      </div>

      <!-- Footer Credits with Organizer Logos -->
      <div class="flex flex-wrap items-center gap-4 lg:gap-6">
        <span class="text-sm lg:text-base font-medium">Made possible by</span>
        <NuxtImg
          src="/images/organizer-openguild.png"
          alt="OpenGuild"
          class="h-4 lg:h-8 w-auto object-contain"
        />
        <span class="text-sm lg:text-base">x</span>
        <NuxtImg
          src="/images/organizer-web3foundation.png"
          alt="Web3 Foundation"
          class="h-4 lg:h-6 w-auto object-contain"
        />
        <span class="text-sm lg:text-base">x</span>
        <NuxtImg
          src="/images/organizer-polkadot.png"
          alt="Polkadot"
          class="h-4 lg:h-6 w-auto object-contain"
        />
      </div>
    </div>

    <!-- Decorative Polkadot Logos Pattern at Bottom -->
    <div class="lg:pt-20 pt-6 grid grid-cols-5 lg:grid-cols-9 gap-12">
      <NuxtImg
        v-for="i in 9"
        :key="i"
        src="/images/logo.png"
        alt=""
        loading="lazy"
        :class="{ 'hidden lg:block': i > 5 }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const subtitleText = "BUILD ONCE. SCALE EVERYWHERE";
const subtitleChars = subtitleText.split("");

const titleContainer = useTemplateRef<HTMLElement>("titleContainer");
const titleElement = useTemplateRef<HTMLElement>("titleElement");
const hackathonText = useTemplateRef<HTMLElement>("hackathonText");
const yearText = useTemplateRef<HTMLElement>("yearText");
// const yearBar = useTemplateRef<HTMLElement>("yearBar")
const subtitleContainer = useTemplateRef<HTMLElement>("subtitleContainer");
const typingCursor = useTemplateRef<HTMLElement>("typingCursor");
const charRefs = ref<(HTMLElement | null)[]>([]);

// Get app load animation time from parent
const appLoadAnimationTime = inject<number>("appLoadAnimationTime", 0);

// Use composables
// useFitText(titleContainer, titleElement)
const { animateText } = useTextScramble();
const { animateTyping } = useTypingAnimation();

const setCharRef = (
  el: Element | ComponentPublicInstance | null,
  index: number
) => {
  if (el) {
    charRefs.value[index] = el as HTMLElement;
  }
};

onMounted(() => {
  // Animate "HACKATHON" text
  if (hackathonText.value) {
    animateText(hackathonText.value!, "HACKATHON", {
      delay: appLoadAnimationTime,
      trigger: hackathonText.value,
    });
  }

  // Animate "2026" text with slight delay
  if (yearText.value) {
    const yearTextTimeline = animateText(yearText.value!, "2026", {
      delay: appLoadAnimationTime,
      trigger: yearText.value!,
    });

    // Animate bar expansion after year text scramble finishes
    if (yearTextTimeline) {
      yearTextTimeline.to(
        ".yearBar",
        {
          width: "100%",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.3"
      );
    }
  }

  // Setup typing animation
  if (
    !subtitleContainer.value ||
    charRefs.value.length === 0 ||
    !typingCursor.value
  )
    return;

  animateTyping(charRefs, typingCursor, {
    charDuration: 0.05,
    cursorBlinkDuration: 0.5,
    cursorOffset: 4,
    delay: appLoadAnimationTime + 0.5,
    trigger: subtitleContainer.value,
    start: "top 80%",
    once: true,
  });
});
</script>

<style scoped>
h1 > span:last-child {
  position: relative;
}

h1 > span:last-child::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.25rem; /* h-5 */
  background-color: #d1d5db; /* gray-300 */
  opacity: 1;
}
</style>
