// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/html-validator',
    'nuxt-typed-router',
  ],

  css: [
    '~/assets/css/main.css',
    '~/assets/css/style.css',
    '~/assets/css/fonts.css',
    '~/assets/css/shadows.css',
  ],

  devtools: { enabled: true },
})
