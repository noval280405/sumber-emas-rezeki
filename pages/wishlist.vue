<script setup lang="ts">
import { products } from '~/data/products'
const { ids } = useWishlist()
const selected = computed(() => products.filter((p) => ids.value.includes(p.id)))
usePageSeo('Wishlist Anda')
</script>
<template>
  <div>
    <UiPageHero
      title="Pilihan yang Anda simpan."
      eyebrow="My wishlist"
      description="Simpan keindahan yang menarik hati. Kembali kapan pun Anda siap."
    />
    <section class="container section">
      <div v-if="!selected.length" class="empty-state">
        <UiIcon name="heart" :size="44" />
        <h2>Wishlist masih kosong.</h2>
        <p>Temukan perhiasan yang Anda sukai.</p>
        <UiPrimaryButton to="/koleksi">Jelajahi Koleksi</UiPrimaryButton>
      </div>
      <template v-else
        ><p class="result-count">{{ selected.length }} perhiasan tersimpan di perangkat ini</p>
        <ProductGrid :products="selected"
      /></template>
    </section>
  </div>
</template>
