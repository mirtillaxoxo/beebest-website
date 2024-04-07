<script setup lang="ts">
const themeColors = useThemeColors()

const themeCustomColorPrefix = 'bb'

const cssElements = ['bg', 'border', 'text']

const classString = () => {
  const classString = []

  for (const element of cssElements) {
    for (const color of Object.keys(themeColors)) {
      classString.push(`${element}-${themeCustomColorPrefix}-${color}`)
    }
  }
  return classString
}
</script>

<template>
  <div class="" :class="classString()"></div>
</template>
