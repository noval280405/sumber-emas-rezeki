<script setup lang="ts">
import { products, matchesSearch } from '~/data/products'
import type { Filters } from './ProductFilter.vue'
import { demoNotice } from '~/data/site'
const props = defineProps<{ category?: string; weddingCollection?: string }>()
const route = useRoute()
const initial = (): Filters => ({
  categories: [],
  karats: typeof route.query.karat === 'string' ? [route.query.karat] : [],
  gender: '',
  color: '',
  stock: '',
  price: '',
  weight: '',
})
const filters = ref<Filters>(initial())
const query = ref(String(route.query.q || ''))
const sort = ref('new')
const drawer = ref(false)
watch(
  () => route.query,
  () => {
    query.value = String(route.query.q || '')
    filters.value = initial()
  },
)
const reset = () => {
  filters.value = {
    categories: [],
    karats: [],
    gender: '',
    color: '',
    stock: '',
    price: '',
    weight: '',
  }
  query.value = ''
  sort.value = 'new'
  if (Object.keys(route.query).length) navigateTo({ path: route.path })
}
const inRange = (value: number, range: string) => {
  if (!range) return true
  const [min, max] = range.split('-').map(Number)
  return value >= min! && value < max!
}
const filteredProducts = computed(() => {
  const f = filters.value
  const list = products.filter(
    (p) =>
      (!props.category ||
        (['Pria', 'Wanita'].includes(props.category)
          ? p.gender === props.category
          : p.category === props.category)) &&
      (!props.weddingCollection || p.collection === props.weddingCollection) &&
      matchesSearch(p, query.value) &&
      (!f.categories.length || f.categories.includes(p.category)) &&
      (!f.karats.length || f.karats.includes(p.karat)) &&
      (!f.gender || p.gender === f.gender) &&
      (!f.color || p.colors?.includes(f.color)) &&
      (!f.stock || p.stockStatus === f.stock) &&
      inRange(p.price, f.price) &&
      inRange(p.weight, f.weight) &&
      (route.query.collection !== 'new' || p.newArrival) &&
      (route.query.collection !== 'best' || p.bestSeller),
  )
  return list.sort((a, b) =>
    sort.value === 'price-asc'
      ? a.price - b.price
      : sort.value === 'price-desc'
        ? b.price - a.price
        : sort.value === 'weight-asc'
          ? a.weight - b.weight
          : sort.value === 'weight-desc'
            ? b.weight - a.weight
            : sort.value === 'best'
              ? Number(b.bestSeller) - Number(a.bestSeller)
              : b.id - a.id,
  )
})
useModal(drawer, () => {
  drawer.value = false
})
</script>
<template>
  <div class="catalogue container section">
    <p class="notice">{{ demoNotice }} Stok dan label favorit juga merupakan data demo.</p>
    <div class="catalogue-toolbar">
      <label class="search-field"
        ><UiIcon name="search" /><input
          v-model="query"
          aria-label="Cari koleksi"
          placeholder="Cari cincin, kalung, gelang..." /></label
      ><button class="button secondary mobile-filter" @click="drawer = true">
        <UiIcon name="filter" /> Filter</button
      ><label class="sort-label"
        ><span>Urutkan</span
        ><select v-model="sort" aria-label="Urutkan produk">
          <option value="new">Terbaru</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
          <option value="best">Best Seller</option>
          <option value="weight-asc">Berat Terendah</option>
          <option value="weight-desc">Berat Tertinggi</option>
        </select></label
      >
    </div>
    <div class="catalogue-layout">
      <aside class="desktop-filters"><ProductFilter v-model="filters" @reset="reset" /></aside>
      <div>
        <p class="result-count" aria-live="polite">
          {{ filteredProducts.length }} perhiasan pilihan
          <button v-if="!filteredProducts.length" class="text-button" @click="reset">
            Reset filter
          </button>
        </p>
        <ProductGrid :products="filteredProducts" />
      </div>
    </div>
    <Teleport to="body"
      ><div v-if="drawer" class="modal-backdrop" @click.self="drawer = false">
        <section class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Filter produk">
          <div class="drawer-heading">
            <h2>Filter</h2>
            <button class="icon-button" aria-label="Tutup filter" @click="drawer = false">
              <UiIcon name="close" />
            </button>
          </div>
          <ProductFilter v-model="filters" @reset="reset" /><button
            class="button"
            @click="drawer = false"
          >
            Lihat {{ filteredProducts.length }} produk
          </button>
        </section>
      </div></Teleport
    >
  </div>
</template>
