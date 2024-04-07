<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full font-mono">
    <nav aria-label="mobile-menu-navigation">
      <LayoutPagesList :modal-dialog="modalDialog" class="modal-page-list" />
    </nav>

    <button
      type="button"
      @click="modalDialog?.close()"
      class="absolute right-7.5 top-3 font-uppercase font-black"
    >
      close
    </button>
  </div>
</template>

<style scoped>
.modal-page-list {
  @apply flex flex-col flex-wrap justify-between gap-8
    text-5xl;
}

.modal-page-list :deep(.router-link-active::before) {
  @apply absolute -left-10 bottom-0
  text-bb-honey text-6xl;

  content: '>';
  text-shadow: var(--shadow-elevation-medium);
}
</style>
