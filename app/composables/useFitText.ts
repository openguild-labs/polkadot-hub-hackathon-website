/**
 * Composable to dynamically adjust text font size to fit container width
 * @param containerRef - Reference to the container element
 * @param textRef - Reference to the text element
 * @param options - Configuration options
 * @returns Object with adjustFontSize method
 */
export const useFitText = (
  containerRef: Ref<HTMLElement | null>,
  textRef: Ref<HTMLElement | null>,
  options: {
    minFontSize?: number
    maxFontSize?: number
  } = {}
) => {
  const { minFontSize = 10, maxFontSize = 100 } = options

  const isMobileOrSmallScreen = () => {
    if (typeof globalThis === "undefined") return false

    // Check if mobile device
    const isMobileDevice = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(globalThis.navigator?.userAgent || "")

    // Check if screen width <= sm (640px)
    const isSmallScreen = globalThis.innerWidth <= 640

    return isMobileDevice || isSmallScreen
  }

  const adjustFontSize = () => {
    if (!containerRef.value || !textRef.value) return

    // Skip on mobile or small screens
    if (isMobileOrSmallScreen()) return

    const containerWidth = containerRef.value.offsetWidth
    let fontSize = maxFontSize

    // Set initial font size
    textRef.value.style.fontSize = `${fontSize}px`

    // Reduce font size until text fits in container
    while (textRef.value.scrollWidth > containerWidth && fontSize > minFontSize) {
      fontSize -= 1
      textRef.value.style.fontSize = `${fontSize}px`
    }
  }

  onMounted(() => {
    adjustFontSize()
    globalThis.addEventListener("resize", adjustFontSize)
  })

  onBeforeUnmount(() => {
    globalThis.removeEventListener("resize", adjustFontSize)
  })

  return {
    adjustFontSize,
  }
}
