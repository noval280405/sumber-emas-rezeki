<script setup lang="ts">
const collection = ref('')
</script>
<template>
  <section id="wedding-collection">
    <div class="container section wedding-intro">
      <p class="eyebrow">Dua hati. Satu perjalanan.</p>
      <h2>Diciptakan untuk cerita Anda.</h2>
      <p>His & Hers · Yellow Gold · Rose Gold · White Gold</p>
      <p class="muted">Konsultasikan ketersediaan model dan ukuran kepada admin.</p>
      <label
        >Koleksi Wedding<select aria-label="Koleksi Wedding" v-model="collection">
          <option value="">Semua koleksi wedding</option>
          <option
            v-for="c in ['Wedding Ring', 'Couple Ring', 'Engagement Ring', 'Bridal Jewelry']"
            :key="c"
          >
            {{ c }}
          </option>
        </select></label
      >
    </div>
    <ProductCatalogue category="Wedding" :wedding-collection="collection" />
  </section>
</template>
