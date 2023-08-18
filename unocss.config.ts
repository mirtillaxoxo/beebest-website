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
    colors: {},
  },

  rules: [
    ['font-display', { 'font-family': 'Blackout' }],
    ['font-sans', { 'font-family': 'Ostrich Sans' }],
    ['font-serif', { 'font-family': 'Fanwood Text' }],
  ],
})
