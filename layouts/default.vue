<script setup lang="ts">
const modalDialog: Ref<HTMLDialogElement | undefined> = ref()
</script>

<template>
  <div>
    <LayoutTheHeader :modal-dialog="modalDialog" />

    <main>
      <slot />
    </main>

    <aside>
      <dialog ref="modalDialog" class="relative p-0 w-full h-full">
        <LayoutModalDialog :modal-dialog="modalDialog" />
      </dialog>
    </aside>

    <footer>footer</footer>
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
