type ThemeColor = {
  [string: string]: { hex: string; oklch?: string }
}

export const useThemeColors = (): ThemeColor => ({
  honey: { hex: '#fda100', oklch: 'oklch(78.33% 0.17 69.28)' },
  'background-white': { hex: '#f1f1f1', oklch: 'oklch(95.81% 0 0)' },
  'light-grey': { hex: '#d0d0d0', oklch: 'oklch(85.76% 0 0)' },
  'middle-grey': { hex: '#989898ec', oklch: 'oklch(67.97% 0 0 / 92.55%)' },
  'dark-grey': { hex: '#222222', oklch: 'oklch(25.2% 0 0)' },
})
