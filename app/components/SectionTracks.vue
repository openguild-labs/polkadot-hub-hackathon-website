<template>
  <section id="tracks" class="py-8 lg:py-13 sm:px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        TRACKS
      </p>
      <h2 ref="titleText" class="text-black">COMPETE ACROSS DIVERSE TRACKS</h2>
    </div>

    <!-- Track Tabs -->
    <UTabs :items="tabItems" color="neutral" size="xl" class="mb-15">
      <template #content="{ item }">
        <!-- Track Content - Two Column Layout -->
        <div
          class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] md:gap-8 gap-4 mt-8 px-6"
        >
          <!-- Left Column - Track Info -->
          <div>
            <h4
              class="text-2xl text-black font-space-grotesk font-medium sm:mb-4 mb-2"
            >
              {{ item.title }}
            </h4>
            <p class="mb-4 text-gray-600">{{ item.description }}</p>

            <!-- Categories -->
            <div class="space-y-2">
              <p class="font-medium text-black">Categories:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(category, index) in item.categories" :key="index">
                  {{ category }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column - Prize List -->
          <div class="space-y-3">
            <p class="font-vcr-osd-mono text-sm text-gray-500 uppercase">
              Prize Pool: $15,000
            </p>
            <div
              v-for="(prize, index) in prizes"
              :key="index"
              class="flex items-center justify-between gap-4"
            >
              <div class="flex items-center gap-4">
                <div
                  class="py-1 sm:px-4 px-2 flex items-center justify-center bg-black text-white font-vcr-osd-mono font-bold sm:text-xl text-lg"
                >
                  {{ prize.place }}
                </div>
                <span class="text-base">{{ prize.label }}</span>
              </div>
              <div class="flex-1 h-px bg-gray-300 mx-2"></div>
              <span class="font-medium text-lg">{{ prize.amount }}</span>
            </div>

            <!-- Honorary Mentions -->
            <div class="pt-2 border-t border-gray-200 mt-4">
              <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div
                    class="py-1 sm:px-4 px-2 flex items-center justify-center bg-gray-200 text-black font-vcr-osd-mono font-bold text-sm"
                  >
                    HM
                  </div>
                  <span class="text-base">Honorary Mentions (x6)</span>
                </div>
                <div class="flex-1 h-px bg-gray-300 mx-2"></div>
                <span class="font-medium text-lg">$500 each</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UTabs>

    <div class="grid grid-cols-5 lg:grid-cols-9 gap-12 max-sm:px-5">
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
import { SplitText } from "gsap/SplitText";

const titleText = useTemplateRef<HTMLElement>("titleText");
const { animateText } = useTextScramble();

const tabItems = [
  {
    label: "TRACK 1",
    title: "EVM Smart Contract",
    description:
      "Build decentralized applications using Solidity and EVM-compatible smart contracts on Polkadot Hub.",
    categories: ["DeFi / Stablecoin-enabled dapps", "AI-powered dapps"],
  },
  {
    label: "TRACK 2",
    title: "PVM Smart Contract",
    description:
      "Build decentralized applications using PolkaVM smart contracts on Polkadot Hub.",
    categories: ["DeFi / Stablecoin-enabled dapps", "AI-powered dapps"],
  },
];

const prizes = [
  { place: "1", label: "1st Prize (x2)", amount: "$3,000" },
  { place: "2", label: "2nd Prize (x2)", amount: "$2,000" },
  { place: "3", label: "3rd Prize (x2)", amount: "$1,000" },
];

onMounted(() => {
  if (!titleText.value) return;

  // Animate title text
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
});
</script>
