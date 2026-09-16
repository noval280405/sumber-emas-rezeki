<script setup lang="ts">
import { products } from '~/data/products'
const route = useRoute()
const product = computed(() => products.find((p) => p.slug === route.params.slug))
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'Produk tidak ditemukan' })
useSeoMeta({
  title: () => `${product.value?.name} | Sumber Emas Rezeki`,
  description: () => product.value?.description,
  ogTitle: () => product.value?.name,
  ogDescription: () => product.value?.description,
  ogImage: () => product.value?.images[0],
  ogType: 'website',
})
</script>
<template>
  <div v-if="product" :key="product.id" class="container product-page">
    <p class="breadcrumb">
      <NuxtLink to="/">Beranda</NuxtLink><span>/</span><NuxtLink to="/koleksi">Koleksi</NuxtLink
      ><span>/</span>{{ product.name }}
    </p>
    <div class="product-detail-layout">
      <ProductGallery :images="product.images" :name="product.name" /><ProductInfo
        :product="product"
      />
    </div>
    <ProductSpecification :product="product" /><ProductRelatedProducts :product="product" />
  </div>
</template>
