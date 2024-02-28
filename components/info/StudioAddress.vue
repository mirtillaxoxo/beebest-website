<script setup lang="ts">
const {
  beeBest: { address },
} = useBusinessInfo()
</script>

<template>
  <address class="not-italic">
    <a :href="address.googleMapsUrl">
      <p>{{ address.street }}, {{ address.streetNumber }}</p>
      <p>{{ address.postalCode }} - {{ address.city }}</p>
      <p>{{ address.district }} {{ address.districtPayoff }}</p>
    </a>
  </address>
</template>
