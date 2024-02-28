<script setup lang="ts">
interface Props {
  social: { name: string; url: string }
}
const props = withDefaults(defineProps<Props>(), {})

const findIcon = useIcons()
</script>

<template>
  <a
    :href="social.url"
    :aria-label="`${social.name} link`"
    class="flex items-center justify-center"
  >
    <span
      class="inline-flex"
      style="text-shadow: var(--shadow-elevation-low)"
      :class="findIcon(social.url)"
    ></span>
  </a>
</template>
