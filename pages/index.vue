<template>
  <LayoutThePage>
    <!-- Bee Animation -->
    <section class="page-section-margins">
      <GraphicsBeeAnimation class="-m-5 -mt-10" />
    </section>

    <section class="-mt-15 text-xl page-section-margins">
      <p>
        <span class="font-bold text-3xl">We are like bees,</span> <br />
        known and appreciated <br />
        for being tireless workers <br />
        and precise designers.
      </p>

      <div class="flex justify-center py-3">
        <span
          class="i-bee-best-bee-glyph-fill text-bb-honey inline-block text-3xl"
        ></span>
      </div>

      <p class="text-right">
        <span class="font-bold text-3xl">We create projects</span> <br />
        with passion and commitment,<br />
        with great attention to aesthetic <br />
        and functional content.
      </p>
    </section>

    <LayoutPageSection section-title="What we love">
      <div class="mt-8 md:mx-10 flex flex-wrap justify-center gap-10">
        <figure
          class="category-figure color-middle-gray md:w-[55%]! lg:w-[45%]!"
        >
          <NuxtImg
            src="images/categories/adv_horm-2022_01.jpg"
            alt="Design Category Image"
          />
          <figcaption>
            <h3>design & tech</h3>
          </figcaption>
        </figure>

        <figure class="category-figure color-middle-gray w-[80%] md:w-[30%]!">
          <NuxtImg
            src="images/categories/adv_marina-babini-2001_01.jpg"
            alt="Design Category Image"
          />
          <figcaption>
            <h3>fashion</h3>
          </figcaption>
        </figure>

        <figure class="category-figure color-middle-gray md:-mt-10">
          <NuxtImg
            src="images/categories/projects_chocolove-2023_01.jpg"
            alt="Design Category Image"
          />
          <figcaption>
            <h3>food</h3>
          </figcaption>
        </figure>
      </div>
    </LayoutPageSection>

    <LayoutPageSection section-title="What we do"></LayoutPageSection>

    <LayoutPageSection section-title="Who we are"></LayoutPageSection>
  </LayoutThePage>
</template>

<style scoped>
.category-figure {
  @apply md:w-[45%] lg:w-[30%];
}
.category-figure :deep(img) {
  @apply w-full md:shadow-xl;
}
.category-figure figcaption {
  @apply flex justify-end;

  /* background: linear-gradient(70deg, #f1f1f1 50%, #fda100 90%);
  background: linear-gradient(
    70deg in oklch,
    oklch(95.81% 0 0) 60%,
    oklch(78.33% 0.17 69.28) 90%
  ); */
}
.category-figure figcaption h3 {
  @apply px-5 pt-1 -mt-2 mr-2
  text-3xl font-bold text-white;

  background-color: #fda100;
  background-color: oklch(78.33% 0.17 69.28);

  text-shadow: var(--shadow-elevation-medium);
}
</style>
