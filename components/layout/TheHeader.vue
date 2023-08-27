<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})
</script>

<template>
  <header class="mt-5 mb-1 px-5">
    <div
      class="flex justify-between items-center border-b"
      style="border-color: var(--light-grey)"
    >
      <NuxtLink to="/" class="font-serif font-black text-3xl">BeeBest</NuxtLink>

      <button
        type="button"
        @click="modalDialog?.showModal()"
        class="px-10 border-l font-uppercase font-black"
        style="border-color: var(--light-grey); color: var(--light-grey)"
      >
        Menu
      </button>
    </div>
  </header>
</template>

<style scoped>
div > *:last-child {
  @apply py-4;
}
</style>
