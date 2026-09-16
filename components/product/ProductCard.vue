<script setup lang="ts">
import type { Product } from '~/data/products'
defineProps<{ product: Product }>()
</script>
<template>
  <article class="product-card">
    <div class="product-image">
      <NuxtLink :to="`/produk/${product.slug}`" :aria-label="`Lihat ${product.name}`"
        ><img
          :src="product.images[0]"
          :alt="`${product.name} — foto ilustrasi`"
          loading="lazy"
          width="600"
          height="750" /></NuxtLink
      ><UiProductBadge v-if="product.newArrival" label="NEW ARRIVAL" /><UiProductBadge
        v-else-if="product.bestSeller"
        label="FAVORIT"
      /><ProductWishlistButton :id="product.id" /><NuxtLink
        :to="`/produk/${product.slug}`"
        class="product-view"
        >Lihat Detail <UiIcon name="arrow" :size="15"
      /></NuxtLink>
    </div>
    <div class="product-meta">
      <span>{{ product.category }}</span
      ><span>{{ product.karat }} <i>·</i> ± {{ product.weight }} g</span>
    </div>
    <NuxtLink :to="`/produk/${product.slug}`"
      ><h3>{{ product.name }}</h3></NuxtLink
    >
    <div class="product-price">
      <UiPriceDisplay :value="product.price" /><span
        class="color-dots"
        aria-label="Tersedia dalam tiga warna"
        ><i /><i /><i
      /></span>
    </div>
    <span v-if="product.stockStatus !== 'Tersedia'" class="stock-label"
      >{{ product.stockStatus === 'Terbatas' ? 'Stok Terbatas' : product.stockStatus }} · demo</span
    >
  </article>
</template>
