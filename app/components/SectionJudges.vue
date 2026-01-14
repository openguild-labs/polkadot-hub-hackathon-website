<template>
  <!-- SVG Filter Definition -->
  <svg width="0" height="0" class="absolute">
    <filter id="rgb-split">
      <feOffset in="SourceGraphic" dx="2" dy="2" result="layer-one" />
      <feComponentTransfer in="layer-one" result="red">
        <feFuncR type="identity" />
        <feFuncG type="discrete" tableValues="0" />
        <feFuncB type="discrete" tableValues="0" />
      </feComponentTransfer>

      <feOffset in="SourceGraphic" dx="-2" dy="-2" result="layer-two" />
      <feComponentTransfer in="layer-two" result="cyan">
        <feFuncR type="discrete" tableValues="0" />
        <feFuncG type="identity" />
        <feFuncB type="identity" />
      </feComponentTransfer>

      <feBlend in="red" in2="cyan" mode="screen" result="color-split" />
    </filter>
  </svg>

  <section id="judges" class="py-8 lg:py-13 px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        Judges and Speakers
      </p>
      <h2 ref="titleText" class="text-black">
        JUDGED BY ECOSYSTEM EXPERTS & LEADERS
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <a
        v-for="(judge, index) in judges"
        :key="index"
        :href="judge.link || '#'"
        target="_blank"
        class="text-center group"
      >
        <div
          class="aspect-3/4 rounded mb-4 bg-black overflow-hidden relative judge-image-wrapper"
        >
          <NuxtImg
            v-if="judge.image"
            :src="judge.image"
            :alt="judge.name"
            class="judge-image-base w-full h-full object-cover"
          />
          <NuxtImg
            v-if="judge.image"
            :src="judge.image"
            alt=""
            class="judge-image-filtered w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <p class="text-black text-xl font-medium">{{ judge.name }}</p>
        <p class="text-sm">{{ judge.title }}</p>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";

const titleText = useTemplateRef<HTMLElement>("titleText");
const { animateText } = useTextScramble();

const judges = [
  {
    name: "Victor",
    title: "Bifrost",
    image: "/images/victor.png",
    link: "https://x.com/zxstim",
  },
  {
    name: "Tien",
    title: "Reactive DOT",
    image: "/images/tien.png",
    link: "https://x.com/TienNguyenK",
  },
  {
    name: "Alberto",
    title: "Papermoon",
    image: "/images/alberto.png",
    link: "https://x.com/theAlbertoV19",
  },
  {
    name: "Rightside",
    title: "Pendle Finance",
    image: "/images/rightside.png",
    link: "https://x.com/Rightsideonly",
  },
  {
    name: "Thang X Vu",
    title: "Dedot",
    image: "/images/thang-x-vu.png",
    link: "https://x.com/realsinzii",
  },
  {
    name: "Nico",
    title: "Velocity Labs",
    image: "/images/nico.png",
    link: "https://x.com/nicolares28",
  },
  {
    name: "Marco",
    title: "Magenta Labs",
    image: "/images/marco.png",
    link: "https://x.com/grendelmarco",
  },
  {
    name: "Radha",
    title: "W3F",
    image: "/images/radha.png",
    link: "https://x.com/DrW3RK",
  },
  {
    name: "Daniel",
    title: "OpenGuild",
    image: "/images/daniel.png",
    link: "https://x.com/DanTheOGDevRel",
  },
  {
    name: "Cris Nguyen",
    title: "OpenGuild",
    image: "/images/cris-nguyen.png",
    link: "https://x.com/crisnguyen99",
  },
  {
    name: "Valery",
    title: "Polkadot Assurance Legion",
    image: "/images/valery.jpg",
    link: "https://x.com/cl0w5",
  },
  {
    name: "Tin Chung",
    title: "OpenGuild",
    image: "/images/tin-chung.png",
    link: "https://x.com/chungquantin",
  },
  {
    name: "Gasless Team",
    title: "0xGasless",
    image: "/images/leander.png",
    link: "https://x.com/0xGasless",
  },
  {
    name: "Husni",
    title: "Polkadot Bali Developers",
    image: "/images/husni.png",
    link: "https://x.com/0x_pastaMan",
  },
  { name: "Kenny", title: "KernelDAO", image: "/images/Kenny.png", link: "" },
  { name: "Mideg", title: "W3F", image: "/images/Mideg.jpg", link: "" },
];

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
});
</script>

<style scoped>
.judge-image-wrapper {
  position: relative;
}

.judge-image-base,
.judge-image-filtered {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.judge-image-base {
  z-index: 2;
  opacity: 1;
  transition: opacity 0.6s ease;
}

.judge-image-filtered {
  z-index: 1;
  opacity: 0;
  filter: url(#rgb-split);
  transition: opacity 0.6s ease;
}

.group:hover .judge-image-base {
  opacity: 0;
}

.group:hover .judge-image-filtered {
  opacity: 1;
}
</style>
