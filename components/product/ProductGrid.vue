<script setup lang="ts">
import type { Product } from '~/data/products'
defineProps<{ products: Product[] }>()
</script>
<template>
  <div v-if="products.length" class="product-grid">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div v-else class="empty-state">
    <UiIcon name="search" :size="36" />
    <h3>Belum ada koleksi yang cocok.</h3>
    <p>Coba kata kunci lain atau atur ulang filter Anda.</p>
  </div>
</template>
