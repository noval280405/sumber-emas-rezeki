<script setup lang="ts">
import { products } from '~/data/products'
</script>
<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="A new kind of beautiful"
      title="Koleksi Terbaru"
      description="Sentuhan baru untuk melengkapi cerita dan gaya Anda."
      to="/koleksi?collection=new"
    /><ProductGrid :products="products.filter((p) => p.newArrival).slice(0, 4)" />
    <p class="collection-note">Foto ilustrasi · Harga, varian, dan stok merupakan data demo.</p>
  </section>
</template>
