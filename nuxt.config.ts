// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],
  plugins: [{ src: "~/plugins/aos.client.js", mode: "client", ssr: false }],

  modules: ["nuxt-icon", "nuxt-swiper"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Grupo Drews",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Pagina de Drews." },
      ],
    },
  },
});
