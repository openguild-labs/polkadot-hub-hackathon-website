<template>
  <section id="video" class="py-8 lg:py-13 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        WATCH
      </p>
      <h2 ref="titleText" class="text-black">LEARN MORE ABOUT POLKADOT</h2>
    </div>

    <div
      ref="videoContainer"
      class="lg:max-w-[90%] mx-auto overflow-hidden relative"
    >
      <!-- Retro frame decoration -->
      <div class="absolute inset-0 pointer-events-none z-10">
        <div class="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-primary"></div>
        <div class="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-primary"></div>
        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-primary"></div>
        <div class="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-primary"></div>
      </div>

      <!-- Video embed -->
      <div class="aspect-video bg-black">
        <iframe
          src="https://www.youtube.com/embed/618A0jtAKog"
          title="Polkadot Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full h-full"
        ></iframe>
      </div>

      <!-- Scanlines effect overlay -->
      <div class="absolute inset-0 pointer-events-none z-20 scanlines opacity-10"></div>
    </div>

    <!-- Decorative pixels -->
    <div class="flex justify-center gap-2 mt-6">
      <span class="w-2 h-2 bg-primary"></span>
      <span class="w-2 h-2 bg-secondary"></span>
      <span class="w-2 h-2 bg-primary"></span>
      <span class="w-2 h-2 bg-secondary"></span>
      <span class="w-2 h-2 bg-primary"></span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const titleText = useTemplateRef<HTMLElement>("titleText");
const videoContainer = useTemplateRef<HTMLElement>("videoContainer");

const { animateText } = useTextScramble();

onMounted(() => {
  if (!titleText.value) return;

  SplitText.create(titleText.value!, {
    type: "words",
    onSplit: (self) => {
      self.words.forEach((word) => {
        animateText(word as HTMLElement, word.textContent, {
          trigger: titleText.value!,
        });
      });
    },
  });

  // Animate video container
  if (!videoContainer.value) return;

  gsap.set(videoContainer.value, {
    opacity: 0,
    y: 30,
  });

  gsap.to(videoContainer.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: videoContainer.value,
      start: "top 80%",
      once: true,
    },
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.scanlines {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.3) 4px
  );
}
</style>

