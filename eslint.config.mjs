// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    "@stylistic/quotes": ["error", "double"],
  },
})
// Your custom configs here
