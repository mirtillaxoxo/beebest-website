<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})
</script>

<template>
  <header class="mt-4 mb-1 px-5 relative">
    <div class="flex justify-between items-center border-b border-bb-lightgrey">
      <NuxtLink to="/">
        <h1 class="font-serif font-semibold text-3xl leading-6">
          BEE <br />BEST
        </h1>
      </NuxtLink>

      <nav class="hidden md:block" aria-label="primary-navigation">
        <LayoutPagesList
          :modal-dialog="modalDialog"
          class="header-pages-list"
        />
      </nav>

      <button
        type="button"
        @click="modalDialog?.showModal()"
        class="md:hidden px-10 py-4 border-l border-bb-lightgrey text-bb-middlegrey uppercase font-bold font-mono"
      >
        Menu
      </button>
    </div>

    <p
      class="absolute -bottom-4.5 font-sans uppercase text-xs font-semibold text-bb-honey"
    >
      we believe in improving
    </p>
  </header>
</template>

<style scoped>
.header-pages-list {
  @apply py-4 flex gap-8
  font-mono;
}
.header-pages-list :deep(.router-link-active) {
  @apply underline decoration-bb-honey;

  text-shadow: var(--shadow-elevation-low);
}
</style>
