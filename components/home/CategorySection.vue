<script setup lang="ts">
import { categories } from '~/data/categories'
</script>
<template>
  <section class="category-section section">
    <div class="container">
      <UiSectionTitle
        eyebrow="Find your signature"
        title="Setiap Gaya, Ada Ceritanya."
        description="Jelajahi koleksi yang terasa paling Anda."
      />
      <div class="category-grid">
        <NuxtLink
          v-for="c in categories.slice(0, 6)"
          :key="c.slug"
          :to="`/kategori/${c.slug}`"
          class="category-card"
          ><div>
            <img :src="c.image" :alt="`Ilustrasi koleksi ${c.name}`" loading="lazy" /><span
              ><UiIcon name="arrow" :size="18"
            /></span>
          </div>
          <h3>{{ c.name }}</h3>
          <p>{{ c.description }}</p></NuxtLink
        >
      </div>
    </div>
  </section>
</template>
