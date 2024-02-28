<script setup lang="ts">
const {
  beeBest: { websiteName, socialProfiles },
} = useWebsiteInfo()

const { locale } = useI18n()
</script>

<template>
  <footer class="p-5 flex flex-col">
    <div
      class="border-y flex flex-wrap justify-between"
      style="border-color: var(--light-grey, #d0d0d0)"
    >
      <div class="flex">
        <div
          class="border-r pr-2.5 pt-1"
          style="border-color: var(--light-grey, #d0d0d0)"
        >
          <p>{{ websiteName }}</p>
          <p class="text-xs -mt-1.5 text-bb-honey">Consultancy</p>
        </div>

        <InfoStudioAddress class="footer-address" />
      </div>
      <nav class="flex flex-wrap items-center gap-4">
        <NuxtLink to="/contacts" class="action-button">Contact Us</NuxtLink>
      </nav>
    </div>

    <div
      class="border-b flex justify-between items-center"
      style="border-color: var(--light-grey, #d0d0d0)"
    >
      <div>
        <div class="flex items-center justify-center">
          <span
            class="text-bb-honey pb-1 md:pb-0 -ml-3 md:ml-0 md:mr-2 -mr-2 rotate-270 md:rotate-0 font-mono text-xs"
            >pages</span
          >
          <nav>
            <LayoutPagesList :show-icon="true" class="footer-pages-list" />
          </nav>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div
          class="border-r flex items-center justify-center"
          style="border-color: var(--light-grey, #d0d0d0)"
        >
          <span
            class="text-bb-honey pb-1 md:pb-0 -mr-2 md:mr-2 rotate-270 md:rotate-0 font-mono text-xs"
            >social</span
          >
        </div>

        <nav>
          <LayoutSocialIcon
            v-for="social in socialProfiles"
            :social="social"
            class="footer-social-icon"
          ></LayoutSocialIcon>
        </nav>
      </div>
    </div>

    <nav
      class="border-b flex flex-wrap gap-8 py-1 font-mono text-sm"
      style="border-color: var(--light-grey, #d0d0d0)"
    >
      <a href="https://www.iubenda.com/privacy-policy/95903843"
        >Privacy Policy</a
      >
      <a href="https://www.iubenda.com/privacy-policy/95903843/cookie-policy"
        >Cookie Policy <span class="inline-block i-ph:cookie -mb-0.5"></span
      ></a>
    </nav>

    <div class="flex justify-center md:justify-end">
      <p
        class="text-sm my-2 flex items-center gap-2"
        style="color: var(--middle-gray, #989898ec)"
      >
        <span>
          Copyright {{ websiteName }}
          {{ new Date().toLocaleDateString(locale, { year: 'numeric' }) }}
          - All rights reserved</span
        >

        <span class="-mt-1 inline-flex text-2xl i-bee-best-bee-glyph"></span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-address {
  @apply py-1 px-2
    text-xs font-mono;
}
.footer-address :deep(p:last-of-type) {
  @apply font-sans;

  color: var(--middle-grey, #989898ec);
  text-shadow: var(--shadow-elevation-low);
}

.footer-social-icon {
  @apply text-2xl;
}

.footer-pages-list {
  @apply mt-1 grid grid-cols-2 md:grid-cols-4
    text-base;
}
.footer-pages-list :deep(li) {
  @apply relative mr-4;
}
</style>
