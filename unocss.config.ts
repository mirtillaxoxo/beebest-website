import { readFile } from 'fs/promises'

import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss'

import Color from 'colorjs.io'
import { useThemeColors } from './composables/useThemeColors'

// add icon here to load dynamic icon
import { icons } from './composables/useIcons'

// Theme colors (hex values fallbacks and oklch)
const themeColorsValues = useThemeColors()
const themeColors: { [string: string]: Array<string> | string } = {}
for (const [key, value] of Object.entries(themeColorsValues)) {
  themeColors[key] = new Color(value.hex).to('oklch').toString()
}

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
            readFile('./assets/graphics/logos/beebest_bee-glyph.svg', 'utf-8'),

          'bee-glyph-fill': () =>
            readFile(
              './assets/graphics/logos/beebest_bee-glyph_fill.svg',
              'utf-8',
            ),
        },
      },
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],

  transformers: [
    // https://unocss.dev/transformers/directives
    transformerDirectives(),
  ],

  theme: {
    colors: {
      // BeeBest theme
      bb: themeColors,
    },
  },

  rules: [
    ['font-serif', { 'font-family': 'Cormorant Garamond' }],
    ['font-sans', { 'font-family': 'DM Sans' }],
    ['font-body', { 'font-family': 'Vollkorn' }],
    ['font-mono', { 'font-family': 'IBM Plex Mono' }],
    ['font-outline', { 'font-family': 'Ostrich Sans' }],
    ['font-display', { 'font-family': 'Blackout' }],
  ],

  // https://unocss.dev/guide/extracting
  safelist: [
    //   // to use dynamic icons included in useIcon composable
    ...Object.values(icons),
  ],
})
