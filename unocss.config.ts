import { readFile } from 'fs/promises'

import { useThemeColors } from './composables/useThemeColors'

import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss'

// add icon here to load dynamic icon
import { icons } from './composables/useIcons'

// Theme colors (hex values for unocss)
const themeColors = useThemeColors()
const themeColorsHex: { [string: string]: string } = {}
for (const [key, value] of Object.entries(themeColors)) {
  themeColorsHex[key] = value.hex
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
    }),
  ],

  transformers: [
    // https://unocss.dev/transformers/directives
    transformerDirectives(),
  ],

  theme: {
    colors: {
      bb: themeColorsHex,
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
