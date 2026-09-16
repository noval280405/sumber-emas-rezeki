<script setup lang="ts">
import { siteConfig } from '~/data/site'
</script>
<template>
  <section class="container section location-preview">
    <div class="location-art">
      <UiIcon name="pin" :size="44" /><span>VISIT OUR BOUTIQUE</span>
      <h3>Sumber Emas Rezeki</h3>
      <p>Lokasi toko akan segera dilengkapi.</p>
    </div>
    <div>
      <p class="eyebrow">Let’s meet in person</p>
      <h2>Temukan kilau Anda,<br /><em>secara langsung.</em></h2>
      <p>Luangkan waktu untuk melihat koleksi dan menemukan perhiasan yang tepat untuk Anda.</p>
      <p class="location-detail"><UiIcon name="pin" /> {{ siteConfig.address }} · placeholder</p>
      <p class="location-detail">
        <UiIcon name="clock" /> {{ siteConfig.operationalHours }} WIB · jam contoh
      </p>
      <NuxtLink to="/lokasi" class="text-link"
        >Informasi Lokasi Toko <UiIcon name="arrow"
      /></NuxtLink>
    </div>
  </section>
</template>
