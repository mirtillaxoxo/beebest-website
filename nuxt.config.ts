import { cssFiles } from './.config/websiteConfig'
import { faviconLinks, appColorsMeta } from './.config/websiteHead'

// import { iubendaScripts } from './.config/privacyPolicy'
import { useWebsiteInfo } from './composables/useWebsiteInfo'

const {
  beeBest: { websiteUrl, websiteName, websiteDescription },
} = useWebsiteInfo()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',

    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',

    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',

    '@nuxtjs/html-validator',
    'nuxt-typed-router',

    '@hypernym/nuxt-gsap',
  ],

  css: [...cssFiles], // from /.config/websiteConfig

  postcss: {
    plugins: { '@csstools/postcss-oklab-function': { preserve: true } },
  },

  googleFonts: {
    families: {
      Vollkorn: true,
      'DM Sans': true,
      Figtree: true,
      'IBM Plex Mono': true,
    },
  },

  app: {
    head: {
      title: 'BeeBest',
      htmlAttrs: {
        lang: 'en',
      },

      link: [...(faviconLinks as [])],
      meta: [...(appColorsMeta as [])],
      script: [],

      // script: [
      //   ...(process.env.NODE_ENV !== 'development'
      //     ? (iubendaScripts as [])
      //     : []), // to work with the spread operator
      // ] as AppHeadMetaObject['script'],
    },
  },

  /*
    ENVIRONMENT
  */

  runtimeConfig: {},

  /*
    DEV
  */
  devtools: { enabled: true },

  experimental: {
    headNext: true, // to enable <head> tags sorting for improvement from capo.js
  },

  /*
    MODULES Config
  */

  // LOCALIZATION
  // https://i18n.nuxtjs.org/docs/getting-started/usage
  i18n: {
    baseUrl: websiteUrl,
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en-US.ts' },
      // { code: 'it', file: 'it-IT.ts' },
    ],
    defaultLocale: 'en',

    experimental: { jsTsFormatResource: true }, // to enable .ts locales file
  },

  // NuxtImage
  // https://image.nuxt.com/get-started/configuration
  image: {
    format: ['avid', 'webp'],
    placeholder: '[50, 25, 75, 5]',
  },

  // NuxtSEO
  // https://nuxtseo.com/nuxt-seo/guides/configuring-modules
  site: {
    url: websiteUrl,
    name: websiteName,
    description: websiteDescription,
    defautLocale: 'en',
  },

  // GSAP
  gsap: { composables: false, extraPlugins: { motionPath: true } },
})
