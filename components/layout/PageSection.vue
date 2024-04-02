<script setup lang="ts">
interface Props {
  sectionTitle: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'section title',
})
</script>

<template>
  <!-- Background -->
  <div class="horizontal-pattern-circle h-20 w-full mt-10"></div>

  <section class="-mt-12 z-10 text-center mb-24">
    <header class="section-title">
      <h2 class="text-bb-honey text-4xl font-black font-sans uppercase">
        {{ sectionTitle }}
      </h2>
    </header>

    <slot />
  </section>
</template>

<style scoped>
.horizontal-pattern-circle {
  background: linear-gradient(to bottom, #e4e4e4 0%, #eeeeee 100%),
    linear-gradient(
      to bottom in oklch longer hue,
      oklch(92% 0 0) 0%,
      oklch(95% 0 0) 100%
    );
  -webkit-mask-image: url('~/assets/graphics/patterns/pattern_circle-01.svg');
  mask-image: url('~/assets/graphics/patterns/pattern_circle-02.svg');
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
}

.section-title {
  @apply inline-block relative;
}
.section-title h2 {
  @apply relative z-1;

  text-shadow: var(--shadow-elevation-high);
}
.section-title::after {
  @apply absolute -bottom-11 -left-8
  content-empty z-0
  h-24 w-28
  filter-drop-shadow;

  background: linear-gradient(to bottom, #e4e4e4 0%, #eeeeee 100%),
    linear-gradient(
      to bottom in oklch longer hue,
      oklch(92% 0 0) 0%,
      oklch(95% 0 0) 100%
    );

  -webkit-mask-image: url('~/assets/graphics/elements/hex-01.svg');
  mask-image: url('~/assets/graphics/elements/hex-01.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
