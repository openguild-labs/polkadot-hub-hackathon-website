<template>
  <section id="why-join" class="py-8 lg:py-13 px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-10">
      <p class="text-secondary font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase">JOIN NOW</p>
      <h2 ref="titleText" class="text-primary">WHY JOINING HACKATHON 2026</h2>
      <p class="mt-2 sm:text-sm text-xs sm:max-w-lg max-w-xs mx-auto">
        An hackathon where skills prioritized assessment for Ecosystem Grants, including further acceleration program by OpenGuild.
      </p>
    </div>

    <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div v-for="card in cards" :key="card.title" class="card-item rounded-tr-[30px] overflow-hidden h-full flex flex-col">
        <div class="bg-secondary py-4 flex items-center justify-center">
          <NuxtImg :src="card.image" :alt="card.alt" class="w-full" />
        </div>
        <div class="bg-primary p-6 pt-3 text-left text-white flex-1 flex flex-col">
          <p class="sm:text-lg mb-2">{{ card.title }}</p>
          <p class="sm:text-sm text-xs">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

const cards = [
  {
    image: "/images/Computer.webp",
    alt: "First Hackathon",
    title: "The First Hackathon on Polkadot Hub",
    description: String.raw`\ Polkadot's Native Smart Contract Layer`,
  },
  {
    image: "/images/Online.webp",
    alt: "Completely Online",
    title: "Completely Online",
    description: String.raw`\ Build from Everywhere`,
  },
  {
    image: "/images/Laptop.webp",
    alt: "Mentorship",
    title: "Mentorship",
    description: String.raw`\ 24/7 Support to get your product shipped`,
  },
]

const titleText = useTemplateRef<HTMLElement>("titleText")
const cardsContainer = useTemplateRef<HTMLElement>("cardsContainer")

const { animateText } = useTextScramble()

onMounted(() => {
  if (!titleText.value) return

  SplitText.create(titleText.value, {
    type: "words",
    onSplit: (self) => {
      self.words.forEach((word) => {
        animateText(word as HTMLElement, word.textContent, {
          trigger: titleText.value!,
        })
      })
    },
  })

  // Animate cards
  if (!cardsContainer.value) return

  const cardItems = cardsContainer.value.querySelectorAll(".card-item")

  gsap.set(cardItems, {
    opacity: 0,
    y: 50,
  })

  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: cardsContainer.value,
      start: "top 80%",
      once: true,
    },
  })

  // Animate cards fade in
  masterTimeline.to(cardItems, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.2,
    ease: "power2.out",
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>
