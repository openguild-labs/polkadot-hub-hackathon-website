<template>
  <aside class="lg:sticky lg:h-screen top-0 flex lg:flex-col max-lg:justify-between max-lg:items-start">
    <!-- Logo Container -->
    <div class="relative shrink-0 p-5 lg:pt-14 lg:pl-8 xl:pl-13">
      <NuxtLink to="#home" class="block transition-opacity focus:outline-none rounded-lg">
        <NuxtImg src="/images/logo.png" alt="Polkadot Hub" class="w-full max-w-[160px] h-auto" loading="eager" />
      </NuxtLink>
    </div>

    <!-- Navigation Menu -->
    <nav
      :class="[
        'fixed flex-1 overflow-y-auto px-6 transition-transform duration-300 z-40',
        'lg:relative xl:pl-13 lg:pl-8 lg:pr-0 lg:translate-none lg:h-full lg:flex lg:flex-col lg:justify-end lg:pb-10',
        'max-lg:top-0 max-lg:right-0 max-lg:w-full max-lg:bg-background max-lg:pb-10',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <NuxtLink to="#home" class="lg:hidden inline-block py-5">
        <NuxtImg src="/images/logo.png" alt="Polkadot Hub" class="max-w-[175px] lg:max-w-[250px] h-auto" loading="eager" />
      </NuxtLink>
      <UNavigationMenu orientation="vertical" color="primary" variant="pill" :items="navigationItems" />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: "Find Your Ideas",
    to: "https://build.openguild.wtf/explore-ideas?category=all",
    target: "_blank",
  },
  {
    label: "Find Teammates",
    to: "https://build.openguild.wtf/signin",
    target: "_blank",
  },
  {
    label: "Builder Playbook",
    to: "https://github.com/polkadot-developers/hackathon-guide/blob/master/polkadot-hub-devs.md",
    target: "_blank",
  },
  {
    label: "Hackathon Resources",
    to: "https://build.openguild.wtf/hackathon-resources",
    target: "_blank",
  },
  {
    label: "Learn Codecamp",
    to: "https://codecamp.openguild.wtf/",
    target: "_blank",
  },
  {
    label: "About OpenGuild",
    to: "https://openguild.wtf/",
    target: "_blank",
  },
])

const isMenuOpen = inject<Ref<boolean>>("isMenuOpen")
</script>
