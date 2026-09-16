<script setup lang="ts">
import { goldPrices } from '~/data/goldPrices'
import { demoNotice } from '~/data/site'
usePageSeo('Harga Emas Hari Ini')
</script>
<template>
  <div>
    <UiPageHero
      title="Harga Emas Hari Ini"
      eyebrow="Informasi emas"
      description="Referensi untuk memahami nilai di balik setiap perhiasan."
    />
    <section class="container section">
      <p class="notice">
        {{ demoNotice }} Harga pada halaman demo tidak terhubung dengan harga pasar realtime.
      </p>
      <p class="updated">
        Terakhir diperbarui secara manual: {{ goldPrices[0]?.updatedAt }} · DATA DEMO
      </p>
      <div class="gold-grid">
        <GoldPriceCard v-for="g in goldPrices" :key="g.karat" :gold="g" />
      </div>
      <div class="section"><GoldPriceTable /></div>
      <div class="tips-panel">
        <h3>Memahami harga perhiasan</h3>
        <p>
          Harga perhiasan dapat mencakup berat emas, kadar, desain, batu, serta biaya pembuatan.
          Harga akhir dan buyback mengikuti pemeriksaan serta konfirmasi toko.
        </p>
        <NuxtLink to="/kalkulator" class="text-link">Hitung estimasi perhiasan Anda →</NuxtLink>
      </div>
    </section>
  </div>
</template>
