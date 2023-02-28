import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    }) // eslint-disable-line new-cap
  }
})

