<template>
  <section id="support" class="py-8 lg:py-13 px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p class="text-secondary font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase">WITH SUPPORT FROM</p>
      <h2 ref="titleText" class="text-primary">STRATEGIC PARTNERS</h2>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-6 gap-x-1 gap-y-4">
      <a
        v-for="item in strategicPartners"
        :key="item.label"
        :href="item.link"
        target="_blank"
        class="group cursor-pointer flex flex-col items-center text-center gap-3"
      >
        <div
          class="aspect-square md:p-8 p-6 w-full bg-linear-to-b group-hover:from-[#2D0B69] from-primary to-primary rounded-lg transition-all duration-300"
        >
          <NuxtImg :src="item.logo" :alt="item.label" class="w-full object-contain rounded-lg" />
        </div>

        <p class="text-secondary font-medium uppercase">{{ item.label }}</p>
      </a>
    </div>

    <div class="md:py-15 py-6" />

    <div class="text-center mb-6">
      <h2 ref="communityTitleText" class="text-primary">COMMUNITY PARTNERS</h2>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-6 gap-1">
      <a v-for="item in communityPartners" :key="item.logo" :href="item.link" target="_blank" class="group aspect-square cursor-pointer">
        <NuxtImg
          :src="item.logo"
          :alt="item.logo"
          class="w-full h-full bg-linear-to-b group-hover:from-[#2D0B69] from-primary to-primary object-contain p-4 rounded-lg transition-all duration-300"
        />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText"

const titleText = useTemplateRef<HTMLElement>("titleText")
const communityTitleText = useTemplateRef<HTMLElement>("communityTitleText")
const { animateText } = useTextScramble()

const strategicPartners = [
  {
    logo: "/images/boltdotnew.jpg",
    link: "https://x.com/boltdotnew",
    label: "Bolt",
  },
  {
    logo: "/images/PaperMoonIO.jpg",
    link: "https://x.com/PaperMoonIO",
    label: "PaperMoon",
  },
  {
    // velocity labs
    logo: "/images/v_labs.png",
    link: "https://x.com/v_labs",
    label: "Velocity Labs",
  },
  {
    // hyperbridge
    logo: "/images/hyperbridge.png",
    link: "https://x.com/hyperbridge",
    label: "Hyperbridge",
  },
  {
    // devfolio
    logo: "/images/devfolio.png",
    link: "https://x.com/devfolio",
    label: "Devfolio",
  },
  {
    // Bifrost
    logo: "/images/Bifrost.jpg",
    link: "https://x.com/Bifrost",
    label: "Bifrost",
  },
  {
    // PolkadotEB
    logo: "/images/PolkadotEB.jpg",
    link: "https://x.com/PolkadotEB",
    label: "Polkadot Event Bounty",
  },
  {
    // PolkadotUX
    logo: "/images/polkadot-ui.png",
    link: "https://x.com/PolkadotUX",
    label: "Polkadot UI",
  },
  {
    // Magentalabs_io
    logo: "/images/magenta-labs.png",
    link: "https://x.com/Magentalabs_io",
    label: "Magenta Labs",
  },
  {
    // ChaoticApp
    logo: "/images/ChaoticApp.jpg",
    link: "https://x.com/ChaoticApp",
    label: "ChaoticApp / DotMemo",
  },
  {
    logo: "/images/R3_2.png",
    link: "https://www.youtube.com/channel/UCWo2r3wA6brw3ztr-JmzyXA",
    label: "OneBlock+",
  },
  {
    logo: "/images/R5_6.png",
    link: "https://x.com/Edgetributors",
    label: "Edgetributors SubDAO",
  },
]

const communityPartners = [
  {
    logo: "/images/R1_1.png",
    link: "https://ccacc.io/",
  },
  {
    logo: "/images/R1_2.png",
    link: "https://www.accessblockchainmy.org/",
  },
  {
    logo: "/images/R1_3.png",
    link: "https://www.utm.my/",
  },
  {
    logo: "/images/R1_4.png",
    link: "https://www.ntu.edu.sg/cctf/cctf-community/blockchain-ntu",
  },
  {
    logo: "/images/R1_5.png",
    link: "https://www.smublockchainclub.com/",
  },
  {
    logo: "/images/R1_6.png",
    link: "https://neust.edu.ph/",
  },
  {
    logo: "/images/R2_1.png",
    link: "https://www.linkedin.com/company/jbecp-pupmnl",
  },
  {
    logo: "/images/R2_2.png",
    link: "https://devcon.ph/",
  },
  {
    logo: "/images/R2_3.png",
    link: "https://openverse.ph/",
  },
  {
    logo: "/images/R2_4.png",
    link: "https://fintech.hust.edu.vn/",
  },
  {
    logo: "/images/R2_5.png",
    link: "https://www.coins.ph/en-ph",
  },
  {
    logo: "/images/R2_6.png",
    link: "",
  },
  {
    logo: "/images/R3_1.png",
    link: "https://www.facebook.com/code.mely",
  },
  {
    logo: "/images/R3_3.png",
    link: "https://x.com/polkaworld_org",
  },
  {
    logo: "/images/R3_4.png",
    link: "#",
  },
  {
    logo: "/images/R3_5.png",
    link: "#",
  },
  {
    logo: "/images/R3_6.png",
    link: "#",
  },
  {
    logo: "/images/R4_1.png",
    link: "#",
  },
  {
    logo: "/images/R4_2.png",
    link: "#",
  },
  {
    logo: "/images/R4_3.png",
    link: "#",
  },
  {
    logo: "/images/R4_4.png",
    link: "#",
  },
  {
    logo: "/images/R4_5.png",
    link: "#",
  },
  {
    logo: "/images/R4_6.png",
    link: "#",
  },
  {
    logo: "/images/R5_1.png",
    link: "#",
  },
  {
    logo: "/images/R5_2.png",
    link: "#",
  },
  {
    logo: "/images/R5_3.png",
    link: "https://x.com/ch90_dao?lang=en",
  },
  {
    logo: "/images/R5_4.png",
    link: "https://x.com/0xGasless",
  },
  {
    logo: "/images/R6_1.png",
    link: "https://x.com/offchainglobal",
  },
  {
    logo: "/images/R6_2.png",
    link: "#",
  },
  {
    logo: "/images/R6_3.png",
    link: "https://x.com/thatMediaWag",
  },
  {
    logo: "/images/R6_4.png",
    link: "#",
  },
]

onMounted(() => {
  if (!titleText.value) return

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

  if (!communityTitleText.value) return

  SplitText.create(communityTitleText.value!, {
    type: "words",
    onSplit: (self) => {
      self.words.forEach((word) => {
        animateText(word as HTMLElement, word.textContent, {
          trigger: communityTitleText.value!,
        })
      })
    },
  })
})
</script>
