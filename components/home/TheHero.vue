<template>
  <section class="px-5 -mb-15">
    <header class="flex justify-center md:justify-between overflow-hidden">
      <h2>agency</h2>
      <h2 class="hidden md:flex">consultancy</h2>
    </header>
  </section>
</template>

<style scoped>
h2 {
  @apply font-outline font-black text-32 sm:text-24;

  color: var(--background-white, #f1f1f1);
  text-shadow:
    0.5px 0.3px 0.6px hsl(var(--shadow-color) / 0.2),
    1px 0.5px 1.1px hsl(var(--shadow-color) / 0.18),
    2px 1.1px 2.2px hsl(var(--shadow-color) / 0.15),
    4.3px 2.3px 4.8px hsl(var(--shadow-color) / 0.12),
    8.7px 4.7px 9.6px hsl(var(--shadow-color) / 0.09);
}
</style>
