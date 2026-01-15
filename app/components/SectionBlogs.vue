<template>
  <section id="blogs" class="py-8 lg:py-13 sm:px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-8">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        RESOURCES
      </p>
      <h2 ref="titleText" class="text-black">HACKATHON RESOURCES</h2>
    </div>

    <div
      ref="blogsContainer"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[95%] mx-auto"
    >
      <a
        v-for="(blog, index) in blogs"
        :key="index"
        :href="blog.url"
        target="_blank"
        rel="noopener noreferrer"
        class="blog-card group block bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden"
      >
        <!-- Card header with date -->
        <div class="bg-black text-white px-4 py-2 font-vcr-osd-mono text-xs flex items-center justify-between">
          <span>{{ blog.date }}</span>
          <span class="text-primary">→</span>
        </div>

        <!-- Card content -->
        <div class="p-5">
          <h4 class="font-space-grotesk font-semibold text-black text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {{ blog.title }}
          </h4>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">
            {{ blog.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, tagIndex) in blog.tags.slice(0, 4)"
              :key="tagIndex"
              class="px-2 py-1 text-xs font-vcr-osd-mono uppercase"
              :class="getTagClass(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Pixel decoration at bottom -->
        <div class="h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </a>
    </div>

    <!-- View all link -->
    <div class="text-center mt-8">
      <a
        href="https://openguild.wtf/blog"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-vcr-osd-mono text-sm uppercase hover:bg-primary transition-colors"
      >
        <span>VIEW ALL POSTS</span>
        <span class="animate-pulse">→</span>
      </a>
    </div>

    <!-- Decorative pixels -->
    <div class="flex justify-center gap-2 mt-8">
      <span v-for="i in 7" :key="i" class="w-2 h-2" :class="i % 2 === 0 ? 'bg-primary' : 'bg-secondary'"></span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const titleText = useTemplateRef<HTMLElement>("titleText");
const blogsContainer = useTemplateRef<HTMLElement>("blogsContainer");

const { animateText } = useTextScramble();

const blogs = [
  {
    date: "January 14, 2026",
    title: "PolkaVM: Missing Opcodes and Workarounds",
    description: "A deep dive into EVM opcodes that are unsupported or altered in PolkaVM, and the architectural workarounds developers need to adopt when migrating Solidity contracts to Polkadot Hub.",
    tags: ["technical", "blockchain", "polkadot", "polkavm", "evm"],
    url: "https://openguild.wtf/blog/polkadot/polkavm-missing-opcodes-and-workarounds",
  },
  {
    date: "January 8, 2026",
    title: "How Polkadot enables multi chain applications",
    description: "Polkadot Hub brings native smart contract execution to Polkadot through PolkaVM, enabling developers to build multi-chain applications with seamless cross-chain messaging and shared security.",
    tags: ["technical", "blockchain", "polkadot", "solidity", "polkavm"],
    url: "https://openguild.wtf/blog/polkadot/how-polkadot-enable-multichain-apps",
  },
  {
    date: "January 6, 2026",
    title: "Is Polkadot Hub just another EVM compatible chain",
    description: "The Polkadot Hub is about to become EVM compatible. What makes it different from other EVM blockchains and why should you care?",
    tags: ["technical", "evm", "pallet-revive", "blockchain", "polkadot"],
    url: "https://openguild.wtf/blog/polkadot/polkadot-hub-is-another-evm-chain",
  },
  {
    date: "December 23, 2025",
    title: "Path of an ETH transaction on Polkadot Hub",
    description: "The EVM Transaction Lifecycle on Polkadot Asset Hub represents a paradigm shift in how Polkadot achieves Ethereum compatibility.",
    tags: ["technical", "blockchain", "polkadot", "solidity", "evm"],
    url: "https://openguild.wtf/blog/polkadot/polkadot-path-of-eth-transaction-on-polkadot-hub",
  },
  {
    date: "December 16, 2025",
    title: "Polkadot 2025: Second Age Has Officially Begun",
    description: "Polkadot 2025: Crossing the Threshold into the Second Age",
    tags: ["technical", "blockchain", "polkadot", "polkavm"],
    url: "https://openguild.wtf/blog/polkadot/polkadot-second-age",
  },
  {
    date: "December 12, 2025",
    title: "Introduction to Polkatool",
    description: "This guide walk through the open-source library polkatool for working with PolkaVM binary compilation and linking.",
    tags: ["technical", "blockchain", "polkadot", "polkatool", "polkavm"],
    url: "https://openguild.wtf/blog/polkadot/polkadot-introduction-to-polkatool",
  },
];

const getTagClass = (tag: string): string => {
  const tagColors: Record<string, string> = {
    technical: "bg-primary/20 text-secondary",
    blockchain: "bg-purple-100 text-purple-700",
    polkadot: "bg-pink-100 text-pink-700",
    polkavm: "bg-cyan-100 text-cyan-700",
    evm: "bg-orange-100 text-orange-700",
    solidity: "bg-yellow-100 text-yellow-700",
    "pallet-revive": "bg-green-100 text-green-700",
    polkatool: "bg-blue-100 text-blue-700",
  };
  return tagColors[tag.toLowerCase()] || "bg-gray-100 text-gray-600";
};

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

  // Animate blog cards with stagger
  if (!blogsContainer.value) return;

  const cards = blogsContainer.value.querySelectorAll(".blog-card");
  
  gsap.set(cards, {
    opacity: 0,
    y: 40,
  });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: blogsContainer.value,
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

