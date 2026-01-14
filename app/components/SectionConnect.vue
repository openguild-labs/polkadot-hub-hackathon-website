<template>
  <section class="relative lg:min-h-[70vh] md:min-h-[50vh] min-h-[30vh] flex items-center justify-center overflow-hidden">
    <!-- World Map Background -->
    <NuxtImg
      src="/images/colored-map.png"
      alt="World Map"
      class="absolute inset-0 w-full h-full object-contain opacity-70"
      loading="lazy"
    />

    <!-- Content on top of map -->
    <div class="relative z-10">
      <UButton color="primary" variant="solid">CONNECT WITH OTHER BUILDERS</UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
