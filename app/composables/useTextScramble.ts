import { gsap } from "gsap"

export interface ScrambleTextOptions {
  duration?: number
  chars?: string
  speed?: number
  delay?: number
  position?: string | number
  trigger?: HTMLElement | string
  start?: string
  once?: boolean
  timeline?: gsap.core.Timeline
}

/**
 * Composable to add scramble text animation to elements
 * Can create its own timeline with scrollTrigger or use an existing timeline
 */
export const useTextScramble = () => {
  /**
   * Animate text with scramble effect
   * @param element - Reference to the element to animate
   * @param finalText - The final text to reveal
   * @param options - Animation options
   */
  const animateText = (element: HTMLElement, finalText: string, options: ScrambleTextOptions = {}) => {
    const {
      duration = 2,
      chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
      speed = 0.8,
      delay = 0,
      position = 0,
      trigger,
      start = "top bottom",
      once = true,
      timeline,
    } = options

    if (!element) return

    // Use provided timeline or create a new one
    const tl =
      timeline ||
      gsap.timeline({
        scrollTrigger: trigger
          ? {
              trigger: trigger instanceof HTMLElement ? trigger : element,
              start,
              once,
            }
          : undefined,
      })

    tl.to(
      element,
      {
        duration,
        scrambleText: {
          text: finalText,
          chars,
          speed,
        },
        delay,
      },
      position
    )

    return tl
  }

  return {
    animateText,
  }
}
