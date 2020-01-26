/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // global reset
import "./src/styles/global-reset.scss"
// fonts
import "./src/styles/fonts.scss"

// ie polyfill for gastsby background image
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }
