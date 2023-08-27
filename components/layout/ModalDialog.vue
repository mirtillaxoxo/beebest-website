<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <nav>
      <ul class="flex flex-col gap-18 text-5xl font-serif">
        <li>
          <NuxtLink to="/" @click="modalDialog?.close()">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" @click="modalDialog?.close()">Work</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" @click="modalDialog?.close()">About</NuxtLink>
        </li>
      </ul>
    </nav>

    <button
      type="button"
      @click="modalDialog?.close()"
      class="absolute right-10.5 top-4.5 font-uppercase font-black"
    >
      close
    </button>
  </div>
</template>
