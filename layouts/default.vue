<script setup lang="ts">
const modalDialog: Ref<HTMLDialogElement | undefined> = ref()
</script>

<template>
  <div>
    <DevOnly>
      <DevMediaSize />
    </DevOnly>

    <LayoutTheHeader :modal-dialog="modalDialog" />
    <main class="flex flex-col items-center lg-max-w-3/5 mx-auto">
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
