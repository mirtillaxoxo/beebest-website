<template>
  <article class="w-screen flex flex-col items-center">
    <slot />
  </article>
</template>

<style scoped>
:deep(section) {
  @apply w-full;
}
</style>
