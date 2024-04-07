<script setup lang="ts">
interface Props {
  modalDialog: HTMLDialogElement
}
const props = withDefaults(defineProps<Props>(), {
  modalDialog: undefined,
})

const {
  beeBest: { websiteName, socialProfiles },
} = useWebsiteInfo()

const { locale } = useI18n()
</script>

<template>
  <footer class="p-5 flex flex-col">
    <div class="flex flex-wrap justify-between border-y border-bb-lightgrey">
      <div class="flex">
        <div
          class="pr-2.5 pt-1 border-r border-bb-lightgrey font-serif font-bold"
        >
          <p>{{ websiteName }}</p>
          <p class="text-xs -mt-1.5 text-bb-honey">Consultancy</p>
        </div>

        <InfoStudioAddress class="footer-address" />
      </div>
      <nav
        aria-label="footer-call-to-actions-navigation"
        class="flex flex-wrap items-center gap-4"
      >
        <NuxtLink to="/contacts" class="action-button-fill"
          >Contact Us</NuxtLink
        >
      </nav>
    </div>

    <div class="flex justify-between items-center border-b border-bb-lightgrey">
      <div>
        <div class="flex items-center justify-center">
          <span
            class="text-bb-honey pb-1 md:pb-0 -ml-3 md:ml-0 md:mr-2 -mr-2 rotate-270 md:rotate-0 font-mono text-xs uppercase"
            >pages</span
          >
          <nav aria-label="footer-page-navigation">
            <LayoutPagesList
              :modal-dialog="modalDialog"
              :show-icon="true"
              class="footer-pages-list"
            />
          </nav>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div
          class="flex items-center justify-center border-r border-bb-lightgrey"
        >
          <span
            class="text-bb-honey pb-1 md:pb-0 -mr-2 md:mr-2 rotate-270 md:rotate-0 font-mono text-xs uppercase"
            >social</span
          >
        </div>

        <nav aria-label="footer-social-navigation">
          <LayoutSocialIcon
            v-for="social in socialProfiles"
            :social="social"
            class="footer-social-icon"
          ></LayoutSocialIcon>
        </nav>
      </div>
    </div>

    <nav
      aria-label="footer-privacy-navigation"
      class="flex flex-wrap gap-8 py-1 font-mono text-sm border-b border-bb-lightgrey"
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
        class="text-xs font-sans text-bb-middlegrey my-2 flex items-center gap-2"
      >
        <span>
          Copyright {{ websiteName }}
          {{ new Date().toLocaleDateString(locale, { year: 'numeric' }) }}
          - All rights reserved</span
        >

        <span
          class="-mt-1 text-2xl i-bee-best-bee-glyph-fill text-bb-honey"
        ></span>
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
  @apply font-sans text-bb-middlegrey;

  text-shadow: var(--shadow-elevation-low);
}

.footer-social-icon {
  @apply text-2xl;
}

.footer-pages-list {
  @apply mt-1 grid grid-cols-2 md:grid-cols-4
    text-sm font-mono;
}
.footer-pages-list :deep(li) {
  @apply relative mr-4;
}
</style>
