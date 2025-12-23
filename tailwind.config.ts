import type { Config } from "tailwindcss"

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5816CF",
          50: "#f5f0ff",
          100: "#ebe0ff",
          200: "#d7c1ff",
          300: "#c3a2ff",
          400: "#af83ff",
          500: "#5816CF",
          600: "#4611a6",
          700: "#340d7d",
          800: "#220854",
          900: "#11052a",
          950: "#0a0520",
        },
        secondary: {
          DEFAULT: "#FF195F",
          50: "#ffe5ed",
          100: "#ffccdb",
          200: "#ff99b7",
          300: "#ff6693",
          400: "#ff336f",
          500: "#FF195F",
          600: "#cc144c",
          700: "#990f39",
          800: "#660a26",
          900: "#330513",
          950: "#1a0209",
        },
        tertiary: {
          DEFAULT: "#E6F1FF",
          50: "#f5f8ff",
          100: "#ccd3e6",
          200: "#e0e8ff",
          300: "#cce0ff",
          400: "#b9d8ff",
          500: "#E6F1FF",
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
