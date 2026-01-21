<template>
  <section class="relative pt-16 lg:pt-24 px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        MOMENTS THAT MATTER
      </p>
      <h2 ref="titleText" class="text-black">TIMELINE</h2>
    </div>

    <div ref="timelineContainer" class="flex gap-3 max-lg:flex-col">
      <div
        v-for="item in timelineItems"
        :key="item.date"
        class="timeline-item group flex-1 flex lg:flex-col lg:gap-3 gap-4 items-center justify-between lg:text-center"
      >
        <div
          :class="[
            'lg:bg-black lg:group-hover:bg-primary transition-all duration-300',
            'bg-black py-5 px-4 w-full h-full flex-1 flex items-center justify-center rounded-tr-3xl text-center',
            'font-space-mono text-sm text-white lg:group-hover:text-black',
          ]"
        >
          <p class="">{{ item.date }}</p>
        </div>
        <p class="text-sm lg:flex-1 flex-2">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const timelineContainer = useTemplateRef<HTMLElement>("timelineContainer");

const timelineItems = [
  {
    date: "January 5",
    description: "Official Promotion Launch",
  },
  {
    date: "January 5 until February 15",
    description: "Host Meetups & Workshops Across APAC",
  },
  {
    date: "February 16",
    description: "Open Registration",
  },
  {
    date: "March 1",
    description: "Hacking Period Begins",
  },
  {
    date: "March 20",
    description: "Close Project Submissions",
  },
  {
    date: "March 24-25",
    description: "Demo Day",
  },
];

onMounted(() => {
  if (!timelineContainer.value) return;

  const timelineItems =
    timelineContainer.value.querySelectorAll(".timeline-item");

  // Set initial state
  gsap.set(timelineItems, {
    opacity: 0,
    y: 30,
  });

  // Animate with stagger
  gsap.to(timelineItems, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: timelineContainer.value,
      start: "top 80%",
      once: true,
    },
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
