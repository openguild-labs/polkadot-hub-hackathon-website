import { gsap } from "gsap"

export interface TypingAnimationOptions {
  charDuration?: number
  cursorBlinkDuration?: number
  cursorOffset?: number
  delay?: number
  trigger?: HTMLElement | string
  start?: string
  once?: boolean
  timeline?: gsap.core.Timeline
}

/**
 * Composable to create typing animation effect
 */
export const useTypingAnimation = () => {
  /**
   * Animate typing effect
   * Can create its own timeline with scrollTrigger or use an existing timeline
   * @param charRefs - Array of character element references
   * @param cursorRef - Reference to the cursor element
   * @param options - Animation options
   */
  const animateTyping = (charRefs: Ref<(HTMLElement | null)[]>, cursorRef: Ref<HTMLElement | null>, options: TypingAnimationOptions = {}) => {
    const { charDuration = 0.05, cursorBlinkDuration = 0.5, cursorOffset = 4, delay = 0, trigger, start = "top 80%", once = true, timeline } = options

    if (!cursorRef.value || charRefs.value.length === 0) return

    // Use provided timeline or create a new one
    const tl =
      timeline ||
      gsap.timeline({
        delay,
        scrollTrigger: trigger
          ? {
              trigger,
              start,
              once,
            }
          : undefined,
      })

    // Position cursor at the start and show it
    tl.set(cursorRef.value, {
      x: 0,
      opacity: 1,
    })

    // Typing animation: reveal each character and move cursor
    charRefs.value.forEach((char, index) => {
      if (!char) return

      tl.to(
        char,
        {
          visibility: "visible",
          duration: charDuration,
          ease: "none",
        },
        ">" // First char starts immediately after cursor, rest follow naturally
      )

      // Move cursor to the right after each character
      if (index < charRefs.value.length - 1) {
        const nextChar = charRefs.value[index + 1]
        if (nextChar) {
          tl.to(cursorRef.value, {
            x: nextChar.offsetLeft,
            duration: 0,
            ease: "none",
          })
        }
      } else {
        // After last character, position cursor at the end
        tl.to(cursorRef.value, {
          x: char.offsetLeft + char.offsetWidth + cursorOffset,
          duration: 0,
          ease: "none",
        })
      }
    })

    // After typing is complete, make cursor blink
    tl.to(cursorRef.value, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    return tl
  }

  return {
    animateTyping,
  }
}
