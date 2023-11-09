// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',

    '@nuxtjs/html-validator',
    'nuxt-typed-router',
  ],

  css: [
    '~/assets/css/style.css',
    '~/assets/css/fonts.css',
    '~/assets/css/shadows.css',
  ],

  // CONFIG
  runtimeConfig: {},

  // LOCALIZATION
  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en-US.ts' },
      { code: 'it', file: 'it-IT.ts' },
    ],
    defaultLocale: 'en',
    experimental: { jsTsFormatResource: true }, // to enable .ts locales file
  },

  devtools: { enabled: true },

  experimental: {
    headNext: true, // to enable <head> tags sorting for improvement from capo.js
  },
})
