<script setup lang="ts">
import { categories } from '~/data/categories'
defineEmits<{ close: [] }>()
</script>
<template>
  <div class="mega-menu" @click="$emit('close')">
    <div>
      <p class="eyebrow">Perhiasan</p>
      <NuxtLink
        v-for="c in categories.filter((c) =>
          ['Cincin', 'Kalung', 'Gelang', 'Anting', 'Liontin'].includes(c.name),
        )"
        :key="c.slug"
        :to="`/kategori/${c.slug}`"
        >{{ c.name }}</NuxtLink
      >
    </div>
    <div>
      <p class="eyebrow">Koleksi</p>
      <NuxtLink to="/koleksi?collection=new">New Arrival</NuxtLink
      ><NuxtLink to="/koleksi?collection=best">Best Seller</NuxtLink
      ><NuxtLink to="/wedding">Wedding</NuxtLink><NuxtLink to="/kategori/pria">Pria</NuxtLink
      ><NuxtLink to="/kategori/wanita">Wanita</NuxtLink>
    </div>
    <div>
      <p class="eyebrow">Berdasarkan kadar</p>
      <NuxtLink v-for="k in ['24K', '22K', '18K', '14K']" :key="k" :to="`/koleksi?karat=${k}`"
        >Emas {{ k }}</NuxtLink
      >
    </div>
    <NuxtLink to="/koleksi" class="mega-feature"
      ><img
        src="/images/products/bracelets/bracelet.jpg"
        alt="Inspirasi koleksi perhiasan emas"
      /><span>Everyday, extraordinary. →</span></NuxtLink
    >
  </div>
</template>
