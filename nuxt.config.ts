// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxtjs/mdc"],

  app: {
    head: {
      title: "Polkadot Solidity Hackathon 2026",
      htmlAttrs: {
        style: "scroll-behavior: smooth;",
      },
      meta: [
        {
          name: "description",
          content:
            "A 6-week online hackathon designed to discover and accelerate the most promising Web3 builders on Polkadot Hub",
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Polkadot Solidity Hackathon 2026",
        },
        {
          property: "og:description",
          content:
            "A 6-week online hackathon designed to discover and accelerate the most promising Web3 builders on Polkadot Hub",
        },
        {
          property: "og:image",
          content: "/images/og-thumbnail.png",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:site_name",
          content: "Polkadot Solidity Hackathon 2026",
        },
        // Twitter Card
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Polkadot Solidity Hackathon 2026",
        },
        {
          name: "twitter:description",
          content:
            "A 6-week online hackathon designed to discover and accelerate the most promising Web3 builders on Polkadot Hub",
        },
        {
          name: "twitter:image",
          content: "/images/og-thumbnail.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/logo.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/logo.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/logo.png",
        },
      ],
    },
  },

  mdc: {
    components: {
      prose: true,
    },
  },

  css: ["~/assets/css/main.css"],

  fonts: {
    families: [
      {
        name: "Space Grotesk",
        weights: [400, 500],
        provider: "google",
      },
      {
        name: "Space Mono",
        provider: "google",
      },
      {
        name: "Minecraftia",
        provider: "local",
        src: "/fonts/minecraftia.woff2",
      },
      {
        name: "VCR OSD Mono",
        provider: "local",
        src: "/fonts/VCROSDMono.woff2",
      },
    ],
  },
});
