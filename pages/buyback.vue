<script setup lang="ts">
import { buybackSteps } from '~/data/buyback'
usePageSeo('Informasi Buyback Emas')
</script>
<template>
  <div>
    <UiPageHero
      title="Buyback & Tukar Tambah Emas"
      eyebrow="Nilai yang terus berarti"
      description="Cek estimasi awal nilai emas sebelum datang ke toko."
    />
    <section class="container section">
      <GoldBuybackCalculator />
      <div class="section">
        <UiSectionTitle eyebrow="Proses konsultasi" title="Langkah yang mudah dipahami" />
        <ol class="buyback-steps">
          <li v-for="(step, i) in buybackSteps" :key="step">
            <span>0{{ i + 1 }}</span
            >{{ step }}
          </li>
        </ol>
        <div class="tips-panel">
          <h3>Rencanakan kunjungan Anda</h3>
          <p>
            Bawa perhiasan dan dokumen pembelian jika tersedia. Kelayakan buyback, potongan, serta
            ketentuan tukar tambah dikonfirmasi langsung kepada toko setelah pemeriksaan.
          </p>
          <NuxtLink to="/kontak" class="text-link">Tanyakan ketentuan toko →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
