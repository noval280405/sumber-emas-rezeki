<script setup lang="ts">
import { goldPrices } from '~/data/goldPrices'
import { demoNotice } from '~/data/site'
</script>
<template>
  <section class="container section gold-preview">
    <UiSectionTitle
      eyebrow="Nilai dalam setiap gram"
      title="Harga Emas Hari Ini"
      to="/harga-emas"
      link-text="Informasi Harga Emas"
    />
    <div class="gold-grid"><GoldPriceCard v-for="g in goldPrices" :key="g.karat" :gold="g" /></div>
    <div class="gold-note">
      <p><span /> Diperbarui manual: {{ goldPrices[0]?.updatedAt }}</p>
      <p>{{ demoNotice }}</p>
    </div>
  </section>
</template>
