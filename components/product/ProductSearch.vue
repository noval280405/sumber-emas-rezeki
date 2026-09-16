<script setup lang="ts">
import { products, matchesSearch } from '~/data/products'
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const query = ref('')
const results = computed(() => products.filter((p) => matchesSearch(p, query.value)).slice(0, 5))
useModal(toRef(props, 'open'), () => emit('close'))
</script>
<template>
  <Teleport to="body"
    ><div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
      <section class="search-modal" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div class="drawer-heading">
          <h2 id="search-title">Temukan yang istimewa.</h2>
          <button class="icon-button" aria-label="Tutup pencarian" @click="$emit('close')">
            <UiIcon name="close" />
          </button>
        </div>
        <label class="search-field"
          ><UiIcon name="search" /><input
            v-model="query"
            aria-label="Cari produk"
            placeholder="Cari cincin, kalung, gelang..."
        /></label>
        <p class="eyebrow">{{ query ? 'Hasil pencarian' : 'Pilihan untuk Anda' }}</p>
        <NuxtLink
          v-for="p in results"
          :key="p.id"
          :to="`/produk/${p.slug}`"
          class="search-result"
          @click="$emit('close')"
          ><img :src="p.images[0]" :alt="p.name" /><span
            >{{ p.name }}<small>{{ p.karat }} · <UiPriceDisplay :value="p.price" /></small></span
          ><UiIcon name="arrow"
        /></NuxtLink>
        <p v-if="!results.length" class="notice">Produk tidak ditemukan. Coba kata kunci lain.</p>
        <NuxtLink
          :to="{ path: '/koleksi', query: { q: query } }"
          class="text-link"
          @click="$emit('close')"
          >Lihat semua hasil {{ query ? `untuk “${query}”` : '' }} <UiIcon name="arrow"
        /></NuxtLink>
      </section></div
  ></Teleport>
</template>
