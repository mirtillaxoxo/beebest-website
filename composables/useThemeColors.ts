type ThemeColor = {
  [string: string]: { hex: string; oklch?: string }
}

export const useThemeColors = (): ThemeColor => ({
  honey: { hex: '#fda100', oklch: 'oklch(78.33% 0.17 69.28)' },
  yellow: { hex: '#feee06' },
  backgroundultrawhite: { hex: '#fafafa' },
  backgroundwhite: { hex: '#f1f1f1', oklch: 'oklch(95.81% 0 0)' },
  lightgrey: { hex: '#d0d0d0', oklch: 'oklch(85.76% 0 0)' },
  silver: { hex: '#cdcdcd' }, // background
  middlegrey: { hex: '#989898ec', oklch: 'oklch(67.97% 0 0 / 92.55%)' },
  outerspace: { hex: '#484848' }, // text
  charcoal: { hex: '#333333' },
  darkgrey: { hex: '#222222', oklch: 'oklch(25.2% 0 0)' },
})
