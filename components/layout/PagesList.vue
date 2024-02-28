<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
  showIcon?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
  showIcon: false,
})

const pages = usePages()
</script>

<template>
  <ul>
    <li
      v-for="page in pages"
      :key="page.name.toLowerCase().replaceAll(' ', '-')"
      class="relative flex items gap-1"
    >
      <span
        v-if="showIcon"
        class="i-ph:arrow-down-right inline-flex text-bb-honey"
      ></span>
      <NuxtLink
        :to="page.url"
        @click="modalDialog?.close()"
        class="capitalize"
        >{{ page.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
