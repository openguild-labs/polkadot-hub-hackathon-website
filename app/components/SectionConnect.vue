<template>
  <section class="relative lg:min-h-[70vh] md:min-h-[50vh] min-h-[30vh] flex items-center justify-center overflow-hidden">
    <!-- Canvas with colored map image and red comet trails -->
    <!-- <canvas ref="revealCanvas" class="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-auto"></canvas> -->

    <!-- Content on top of canvas -->
    <div class="relative z-10">
      <UButton color="primary" variant="solid">CONNECT WITH OTHER BUILDERS</UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealCanvas = useTemplateRef<HTMLCanvasElement>("revealCanvas")
// const { setupCanvas, start, destroy } = useColorRevealEffect()

onMounted(() => {
  if (!revealCanvas.value) return

  // Setup canvas with colored map image
  // const cleanup = setupCanvas(revealCanvas.value, {
  //   trailSize: 0.08,
  //   maxAge: 400,
  //   interpolate: 1,
  // })

  // // Start the effect immediately when component mounts
  // start()

  // // Cleanup on unmount
  // onBeforeUnmount(() => {
  //   if (cleanup) cleanup()
  //   destroy()
  // })
})
</script>
