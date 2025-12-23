<template>
  <section id="tracks" class="py-8 lg:py-13 sm:px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p class="text-secondary font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase">TRACKS</p>
      <h2 ref="titleText" class="text-primary">COMPETE ACROSS DIVERSE TRACKS</h2>
    </div>

    <!-- Track Tabs -->
    <UTabs :items="tabItems" color="secondary" size="xl" class="mb-15">
      <template #content="{ item }">
        <!-- Track Content - Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] md:gap-8 gap-4 mt-8 px-6">
          <!-- Left Column - Track Info -->
          <div>
            <h4 class="text-2xl text-primary font-space-grotesk font-medium sm:mb-4 mb-2">{{ item.title }}</h4>
            <ul v-if="Array.isArray(item.description)" class="list-disc pl-4">
              <li v-for="(desc, index) in item.description" :key="index">{{ desc }}</li>
            </ul>
            <p v-else>{{ item.description }}</p>
          </div>

          <!-- Right Column - Prize List -->
          <div class="space-y-4">
            <div v-for="(prize, index) in prizes" :key="index" class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div
                  class="py-1 sm:px-4 px-2 flex items-center justify-center bg-secondary text-white font-vcr-osd-mono font-bold sm:text-2xl text-xl"
                >
                  {{ prize.place }}
                </div>
                <span class="text-lg">{{ prize.label }}</span>
              </div>
              <div class="w-[50px] h-px bg-black"></div>
              <span class="font-medium text-xl">{{ prize.amount }}</span>
            </div>
          </div>
        </div>
      </template>
    </UTabs>

    <div class="grid grid-cols-5 lg:grid-cols-9 gap-12 max-sm:px-5">
      <NuxtImg v-for="i in 9" :key="i" src="/images/logo.png" alt="" loading="lazy" :class="{ 'hidden lg:block': i > 5 }" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText"

const titleText = useTemplateRef<HTMLElement>("titleText")
const { animateText } = useTextScramble()

const tabItems = [
  {
    label: "TRACK 1",
    title: "Stablecoin / Payment Consumer",
    description: "Applications - Consumer applications that utilize the stablecoins or offering payment use cases.",
  },
  {
    label: "TRACK 2",
    title: "AI-powered Onchain Applications ",
    description: "Applying the power of AI into the onchain solutions on Polkadot.",
  },
  {
    label: "TRACK 3",
    title: "Cross-chain applications",
    description: "Build the solution on top of XCM or Hyperbridge to enable cross-chain features.",
  },
  {
    label: "TRACK 4",
    title: "Added consolidation prize",
    description: ["Most Loved Project Winner: 500$ (3 winners).", "Best UI/UX Project Winner: 500$ (3 winners)"],
  },
]

const prizes = [
  { place: "1", label: "1st Prize Winner", amount: "$5000" },
  { place: "2", label: "2nd Prize Winner", amount: "$2,500" },
  { place: "3", label: "3rd Prize Winner", amount: "$1,500" },
]

onMounted(() => {
  if (!titleText.value) return

  // Animate title text
  SplitText.create(titleText.value!, {
    type: "words",
    onSplit: (self) => {
      self.words.forEach((word) => {
        animateText(word as HTMLElement, word.textContent, {
          trigger: titleText.value!,
        })
      })
    },
  })
})
</script>
