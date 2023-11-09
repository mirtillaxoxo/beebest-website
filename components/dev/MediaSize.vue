<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { width } = useWindowSize()
const activeBreakpoint = computed(() => {
  let breakpoint = 'base'
  for (const [key, value] of Object.entries(breakpointsTailwind)) {
    if (value <= width.value) breakpoint = key
  }
  return breakpoint
})
</script>

<template>
  <div
    class="fixed right-2 top-2 z-100 text-xs text-blue-600 border border-blue-400 px-1"
  >
    <pre>{{ activeBreakpoint.toUpperCase() }}: {{ width }}px</pre>
    <pre></pre>
  </div>
</template>
