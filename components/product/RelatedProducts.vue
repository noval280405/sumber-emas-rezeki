<script setup lang="ts">
import { products, type Product } from '~/data/products'
const props = defineProps<{ product: Product }>()
const related = computed(() =>
  [
    ...products.filter((p) => p.id !== props.product.id && p.category === props.product.category),
    ...products.filter((p) => p.id !== props.product.id && p.category !== props.product.category),
  ].slice(0, 4),
)
</script>
<template>
  <section class="section">
    <UiSectionTitle eyebrow="Pilihan lainnya" title="Mungkin Anda juga menyukai" /><ProductGrid
      :products="related"
    />
  </section>
</template>
