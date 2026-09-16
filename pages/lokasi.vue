<script setup lang="ts">
import { siteConfig } from '~/data/site'
usePageSeo('Lokasi Toko')
</script>
<template>
  <div>
    <UiPageHero
      title="Sampai jumpa di toko."
      eyebrow="Visit our store"
      description="Lihat lebih dekat. Rasakan detailnya. Temukan pilihan Anda."
    />
    <section class="container section contact-layout">
      <ContactInfo />
      <div>
        <div class="map-placeholder">
          <UiIcon name="pin" :size="48" />
          <h3>{{ siteConfig.fullName }}</h3>
          <p>Lokasi Google Maps belum tersedia.</p>
          <span>Alamat asli akan ditambahkan di sini.</span>
        </div>
        <a
          v-if="siteConfig.mapsUrl !== '#'"
          :href="siteConfig.mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >Buka di Google Maps</a
        ><button v-else class="button secondary" disabled>
          Buka di Google Maps · segera tersedia
        </button>
        <div class="tips-panel">
          <h3>Petunjuk Lokasi</h3>
          <p>
            Alamat dan petunjuk perjalanan menunggu data toko asli. Konfirmasikan lokasi serta jam
            operasional sebelum berkunjung.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
