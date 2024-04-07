<script setup lang="ts">
const modalDialog: Ref<HTMLDialogElement | undefined> = ref()
</script>

<template>
  <div>
    <DevOnly>
      <ClientOnly>
        <DevMediaSize />
      </ClientOnly>
    </DevOnly>

    <LayoutTheHeader :modal-dialog="modalDialog" />

    <main class="p-5">
      <slot />
    </main>

    <aside aria-label="mobile-menu">
      <dialog ref="modalDialog" class="relative p-0 w-full h-full">
        <LazyLayoutModalDialog :modal-dialog="modalDialog" />
      </dialog>
    </aside>

    <LazyLayoutTheFooter :modal-dialog="modalDialog" />

    <LazyLayoutUtilitiesClass />
  </div>
</template>

<style scoped>
dialog::backdrop {
  @apply bg-white;
}
dialog[open] {
  @apply fixed;
}
</style>
