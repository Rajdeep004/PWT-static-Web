// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-headlessui', 'nuxt-swiper'],
  ssr: true,
  compatibilityDate: '2025-03-03',
})