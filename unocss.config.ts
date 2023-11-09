import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    // https://unocss.dev/presets/uno
    presetUno({}),
    // https://unocss.dev/presets/icons
    presetIcons({ collections: {} }),
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
})
