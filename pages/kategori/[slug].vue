<script setup lang="ts">
import { categories } from '~/data/categories'
const route = useRoute()
const category = computed(() => categories.find((c) => c.slug === route.params.slug))
if (!category.value)
  throw createError({ statusCode: 404, statusMessage: 'Kategori tidak ditemukan' })
useSeoMeta({
  title: () => `Koleksi ${category.value?.name || ''} Emas | Sumber Emas Rezeki`,
  description: () => category.value?.description,
  ogTitle: () => `Koleksi ${category.value?.name} Emas`,
  ogDescription: () => category.value?.description,
  ogImage: '/images/hero/jewelry.jpg',
  ogType: 'website',
})
</script>
<template>
  <div v-if="category">
    <UiPageHero
      :title="`Koleksi ${category.name} Emas`"
      eyebrow="Perhiasan pilihan"
      :description="category.description"
      ><div class="subcategory-list">
        <span v-for="s in category.subcategories" :key="s">{{ s }}</span>
      </div></UiPageHero
    ><ProductCatalogue :key="category.slug" :category="category.name" />
  </div>
</template>
