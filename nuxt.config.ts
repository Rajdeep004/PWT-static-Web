// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
})
