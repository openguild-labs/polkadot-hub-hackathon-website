import type { Config } from "tailwindcss"

export default {
  theme: {
    extend: {
      colors: {
        /* Retro 8-bit cyan/teal palette */
        primary: {
          DEFAULT: "#00bcd4",
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
          950: "#004d40",
        },
        /* Dark cyan/teal accent */
        secondary: {
          DEFAULT: "#006064",
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#006064",
          600: "#00838f",
          700: "#006064",
          800: "#004d40",
          900: "#003d33",
          950: "#002622",
        },
        /* Light cyan accents */
        tertiary: {
          DEFAULT: "#e0f7fa",
          50: "#f0fdff",
          100: "#e0f7fa",
          200: "#b2ebf2",
          300: "#80deea",
          400: "#4dd0e1",
          500: "#e0f7fa",
        },
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
        minecraftia: ["Minecraftia", "monospace"],
        "vcr-osd-mono": ['"VCR OSD Mono"', "monospace"],
      },
    },
  },
} satisfies Config
