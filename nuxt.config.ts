// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css', '~/assets/css/style.css'],

  devtools: { enabled: true },
})
