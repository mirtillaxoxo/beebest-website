<template>
  <article class="flex flex-col gap-10">
    <!-- Bee Animation -->
    <section>
      <GraphicsBeeAnimation class="-mt-5 -mb-18 max-w-164 mx-auto" />
    </section>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
        <p class="uppercase">Consultancy + Agency</p>

        <ul class="what-we-do-shortlist">
          <li>
            <span class="i-arcticons-vr-media-player"></span>
            <span>Digital Projects</span>
          </li>
          <li>
            <span class="i-arcticons-emoji-movie-camera"></span>
            <span> Media Production </span>
          </li>
          <li>
            <span class="i-arcticons-at-voice"></span>
            <span>Events & Press</span>
          </li>
        </ul>

        <div>
          <p class="flex items-center gap-1">
            <span> We are like bees</span>
            <span class="i-bee-best-bee-glyph-fill text-bb-honey"></span>,
          </p>
          <p>
            known and appreciated for being tireless workers and precise
            designers.
          </p>

          <p>
            We create projects<br />
            with passion and commitment, with great attention to aesthetic and
            functional content.
          </p>
        </div>
      </div>
    </section>

    <!-- what we love -->
    <section>
      <h2 class="section-title">
        <span class="i-arcticons-hearth"></span>

        <span>What we love: </span>
      </h2>
      <nav
        aria-label="macro-categories-navigation"
        class="what-we-love-container"
      >
        <figure>
          <div>
            <NuxtImg
              src="/images/categories/projects_showroom-novacolor-24_materia-viva_conchiglia.jpg"
              alt="Design"
            />
          </div>
          <figcaption>Design</figcaption>
        </figure>

        <figure>
          <div>
            <NuxtImg
              src="/images/categories/adv_marina-babini-2001_01.jpg"
              alt="Fashion"
            />
          </div>
          <figcaption>Fashion</figcaption>
        </figure>

        <figure>
          <div>
            <NuxtImg
              src="/images/categories/projects_chocolove-2023_01.jpg"
              alt="Food"
            />
          </div>
          <figcaption>Food</figcaption>
        </figure>

        <div class="md:hidden">
          <div class="pb-[100%] relative">
            <div
              class="w-full h-full absolute top-0 flex justify-center items-center"
            >
              <span
                class="i-bee-best-bee-glyph text-[9rem] text-bb-honey"
              ></span>
            </div>
          </div>

          <p>..Bees!</p>
        </div>
      </nav>
    </section>

    <!-- our services -->
    <section>
      <div class="grid items-start grid-cols-1 md:grid-cols-3 gap-5 font-mono">
        <h2 class="section-title">
          <span class="i-arcticons-keyboard"></span>
          <span>What we do: </span>
        </h2>

        <div class="bg-bb-lightgrey -mx-2.5 md:mx-0 md:aspect-square">
          <div class="flex md:flex-col items-center md:justify-center gap-2.5">
            <span
              class="i-arcticons-vr-media-player inline-block ml-2.5 md:ml-0 animate-spin animate-duration-[3000ms] md:text-6xl"
            ></span>
            <span>Digital Projects</span>
          </div>
        </div>

        <div class="services-container">
          <h3>Integrated Communication</h3>
          <ul>
            <li>
              <span></span>
              <span>Press Office, PR and Digital PR</span>
            </li>
            <li>
              <span></span>
              <span>Social Media Marketing</span>
            </li>
            <li>
              <span></span>
              <span>Online/Offline communication tools design</span>
            </li>
          </ul>
        </div>

        <div class="bg-bb-lightgrey h-full -mx-2.5 md:mx-0">
          <div
            class="flex md:flex-col items-center md:h-full md:justify-center gap-2.5"
          >
            <span
              class="i-arcticons-vr-media-player inline-block ml-2.5 md:ml-0 animate-spin animate-duration-[3000ms] md:text-6xl"
            ></span>
            <span>Digital Projects</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-center">
        <div class="relative">
          <NuxtLink to="/services" class="action-button"
            >Discover what we do</NuxtLink
          >
          <span
            class="absolute i-arcticons-auto-clicker text-2xl top-9 animate-bounce left-[45%]"
          ></span>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.what-we-do-shortlist li {
  @apply flex items-center gap-2.5;
}
.what-we-do-shortlist li > span:first-child {
  @apply text-xl;
}

.what-we-love-container {
  @apply mt-5 -mx-2.5 md:mx-0
  grid grid-cols-2 gap-2.5
  md:grid md:grid-cols-3 md:gap-5
  -mb-2.5;
}
.what-we-love-container > * {
  @apply mb-2.5;
}

.what-we-love-container figure > div {
  @apply relative pb-[100%];

  box-shadow: var(--shadow-elevation-low);
}

.what-we-love-container img {
  @apply absolute w-full h-full object-cover;
}
.what-we-love-container figcaption {
  @apply mt-1;
}

.services-container h3 {
  @apply underline;
}
.services-container > ul > li {
  @apply flex gap-1 pt-2;
}
.services-container > ul > li > span:first-of-type {
  @apply i-ph:arrow-down-right text-bb-honey min-w-6;
}
</style>
