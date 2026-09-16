<script setup lang="ts">
import { galleryItems } from '~/data/gallery'
</script>
<template>
  <section class="container section section-topless">
    <UiSectionTitle
      eyebrow="A closer look"
      title="Keindahan dalam Detail"
      to="/galeri"
      link-text="Jelajahi Galeri"
    />
    <div class="gallery-preview">
      <NuxtLink v-for="g in galleryItems.slice(0, 3)" :key="g.id" to="/galeri"
        ><img :src="g.image" :alt="g.title" loading="lazy" /><span
          >{{ g.title }} <UiIcon name="arrow" /></span
      ></NuxtLink>
    </div>
  </section>
</template>
