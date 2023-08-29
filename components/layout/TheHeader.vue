<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})
</script>

<template>
  <header class="mt-5 mb-1 px-5 relative">
    <div
      class="flex justify-between items-center border-b"
      style="border-color: var(--light-grey)"
    >
      <NuxtLink to="/" class="font-serif font-black text-3xl">
        <h1>BeeBest</h1>
      </NuxtLink>

      <button
        type="button"
        @click="modalDialog?.showModal()"
        class="px-10 border-l font-uppercase font-black"
        style="
          border-color: var(--light-grey, #d0d0d0);
          color: var(--light-grey, #d0d0d0);
        "
      >
        Menu
      </button>
    </div>
    <figure class="absolute w-full flex justify-center h-7 top-12.8 left-0">
      <img
        src="~/assets/graphics/bee-best_bee-glyph.svg"
        alt="Bee Best Bee Glyph"
        class="h-full px-1 bg-white"
        style="background-color: var(--background-white, #f1f1f1)"
      />
    </figure>
  </header>
</template>

<style scoped>
div > *:last-child {
  @apply py-4;
}
</style>
