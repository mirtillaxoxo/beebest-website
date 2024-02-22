import { readFile } from 'fs/promises'

import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss'

// add icon here to load dynamic icon
import { icons } from './composables/useIcons'

// https://github.com/unocss/unocss/tree/main/packages/nuxt
export default defineConfig({
  presets: [
    // https://unocss.dev/presets/uno
    presetUno({}),
    // https://unocss.dev/presets/icons
    presetIcons({
      collections: {
        'bee-best': {
          // https://unocss.dev/presets/icons#node-js
          'bee-glyph': () =>
            readFile('./assets/graphics/logos/bee-best_bee-glyph.svg', 'utf-8'),
        },
      },
      prefix: 'i-',
    }),
  ],

  transformers: [
    // https://unocss.dev/transformers/directives
    transformerDirectives(),
  ],

  theme: {
    colors: {
      bb: { honey: '#fda100' },
    },
  },

  rules: [
    ['font-serif', { 'font-family': 'Cormorant Garamond' }],
    ['font-sans', { 'font-family': 'Geist' }],
    ['font-body', { 'font-family': 'Vollkorn' }],
    ['font-outline', { 'font-family': 'Ostrich Sans' }],
    ['font-display', { 'font-family': 'Blackout' }],
  ],

  // https://unocss.dev/guide/extracting
  safelist: [
    //   // to use dynamic icons included in useIcon composable
    ...Object.values(icons),
  ],
})
