import { gsap } from "gsap"

interface PixelatedRevealOptions {
  duration?: number
  stagger?: number
  delay?: number
  ease?: string
}

export const usePixelatedReveal = () => {
  const animatePixelatedReveal = (images: NodeListOf<Element> | Element[], options: PixelatedRevealOptions = {}) => {
    const { duration = 0.3, stagger = 0.2, delay = 0, ease = "linear" } = options

    // Set initial pixelated state
    gsap.set(images, {
      filter: "blur(10px)",
    })

    // Animate to clear state
    return gsap.to(images, {
      filter: "blur(0px)",
      duration,
      stagger,
      delay,
      ease,
    })
  }

  return {
    animatePixelatedReveal,
  }
}
