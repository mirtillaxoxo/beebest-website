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
    <div
      class="flex justify-between items-center border-b"
      style="border-color: var(--light-grey, #d0d0d0)"
    >
      <NuxtLink to="/">
        <h1 class="font-serif font-semibold text-3xl leading-6">
          BEE <br />BEST
        </h1>
      </NuxtLink>

      <button
        type="button"
        @click="modalDialog?.showModal()"
        class="px-10 py-4 border-l uppercase font-semibold"
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
    <p class="absolute -bottom-5.5 text-sm font-semibold text-bb-honey">
      we believe in improving
    </p>
  </header>
</template>
