<template>
  <section id="prize" class="py-8 lg:py-13 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        PRIZE
      </p>
      <h2 ref="titleText" class="text-black">PRIZE POOL AND AWARDS</h2>
    </div>

    <div
      ref="prizeContainer"
      class="prize-card grid grid-cols-1 lg:grid-cols-3 lg:max-w-[90%] mx-auto lg:rounded-tr-[60px] overflow-hidden"
    >
      <!-- Left side - Image -->
      <div class="col-span-2 relative flex items-center justify-center">
        <NuxtImg
          src="/images/Prize BG.webp"
          alt="Prize"
          class="w-full h-full object-cover"
        />
        <NuxtImg
          ref="prizeImage"
          src="/images/Prize level up.webp"
          alt="Prize"
          class="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>

      <!-- Right side - Prize Info -->
      <div class="bg-black p-5 text-white">
        <p class="text-xl font-vcr-osd-mono uppercase mb-4">TOTAL PRIZEPOOL</p>
        <div class="mb-6 max-lg:hidden">
          <NuxtImg
            src="/images/logo.png"
            alt="Logo"
            class="w-[140px] animate-pulse"
          />
        </div>
        <div class="flex flex-row lg:gap-6 gap-4 lg:flex-col max-lg:items-end">
          <h3 class="text-7xl font-vcr-osd-mono">$30K</h3>
          <p class="lg:text-sm sm:text-xs text-[10px]">
            And other special packages to maximum award the most talented
            projects, including Ecosystem Grant Subsidies.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const titleText = useTemplateRef<HTMLElement>("titleText");
const prizeContainer = useTemplateRef<HTMLElement>("prizeContainer");
const prizeImage = useTemplateRef<ComponentPublicInstance>("prizeImage");

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

  // Animate prize card and image
  if (!prizeContainer.value) return;

  // Set initial state for card
  gsap.set(prizeContainer.value, {
    opacity: 0,
    y: 50,
  });

  const cardTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: prizeContainer.value,
      start: "top 80%",
      once: true,
    },
  });

  // Animate card fade in up
  cardTimeline.to(prizeContainer.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  // Continuous up and down animation for prize image (8-bit game style)
  if (prizeImage.value?.$el) {
    gsap.to(prizeImage.value.$el, {
      y: -8,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
