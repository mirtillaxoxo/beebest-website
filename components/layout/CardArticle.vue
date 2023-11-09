<script setup lang="ts">
interface Props {
  tag: string
}
const props = withDefaults(defineProps<Props>(), {
  tag: '#',
})
</script>

<template>
  <article class="bb-card">
    <header style="border-left: 3px solid var(--light-grey, #d0d0d0)">
      <slot name="title"></slot>
    </header>
    <slot></slot>

    <div
      class="absolute bottom-1.5 right-2 text-bb-honey font-sans font-bold text-base"
    >
      {{ tag }}
    </div>
  </article>
</template>

<style>
.bb-card {
  border: 1px solid var(--light-grey, #d0d0d0);
  box-shadow: var(--shadow-elevation-medium);
  @apply relative
    px-4 pt-3 pb-10
    text-xl;
}

.bb-card > *:first-child {
  text-shadow: var(--shadow-elevation-low);
  @apply font-900 font-sans text-3xl mb-6 pl-3;
}
.bb-card > *:first-child::first-letter {
}

.bb-card > p {
  @apply relative pb-5;
}
.bb-card > p::before {
  content: '';
  border-top: 1px solid #fda100;
  @apply absolute top-6 -left-6
    w-14;
}

.bb-card > p:last-of-type {
  @apply pb-3;
}

.bb-card > p > strong {
  @apply font-bold;
}

.bb-card::after {
  content: '';
  background-image: linear-gradient(to right, #ffcd00 0%, #fda100 100%);

  background-image: linear-gradient(
    to right in oklab,
    oklch(93% 0.38 91 / 0.6) 77%,
    oklch(88% 0.35 10 / 0.8) 100%
  );

  @apply absolute w-full h-1.5
   left-0 bottom-0;
}
</style>
