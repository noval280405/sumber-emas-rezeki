<script setup lang="ts">
import { products } from '~/data/products'
</script>
<template>
  <section class="container section section-topless">
    <UiSectionTitle
      eyebrow="The pieces we love"
      title="Koleksi Favorit"
      description="Desain pilihan yang mudah jatuh hati, sulit dilupakan."
      to="/koleksi?collection=best"
    /><ProductGrid :products="products.filter((p) => p.bestSeller).slice(0, 4)" />
    <p class="collection-note">
      Pilihan favorit merupakan kurasi demo, bukan berdasarkan data penjualan.
    </p>
  </section>
</template>
