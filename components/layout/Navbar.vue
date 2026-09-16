<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'
const route = useRoute()
const mobileOpen = ref(false)
const searchOpen = ref(false)
const megaOpen = ref(false)
const scrolled = ref(false)
const { wishlistCount } = useWishlist()
const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Koleksi', to: '/koleksi' },
  ...['Cincin', 'Kalung', 'Gelang', 'Anting'].map((label) => ({
    label,
    to: `/kategori/${label.toLowerCase()}`,
  })),
  { label: 'Wedding', to: '/wedding' },
  { label: 'Harga Emas', to: '/harga-emas' },
  { label: 'Buyback', to: '/buyback' },
  { label: 'Tentang', to: '/tentang' },
]
const scroll = () => {
  scrolled.value = window.scrollY > 40
}
onMounted(() => {
  scroll()
  window.addEventListener('scroll', scroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', scroll))
watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    searchOpen.value = false
    megaOpen.value = false
  },
)
useModal(mobileOpen, () => {
  mobileOpen.value = false
})
</script>
<template>
  <div class="announcement">
    Perhiasan indah. Cerita berharga. <span>Temukan pilihan untuk setiap momen.</span
    ><UiIcon name="diamond" :size="12" />
  </div>
  <header
    :class="['navbar', { scrolled, 'on-home': route.path === '/' }]"
    @keydown.esc="megaOpen = false"
  >
    <div class="nav-main container">
      <button
        class="icon-button mobile-toggle"
        aria-label="Buka menu navigasi"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = true"
      >
        <UiIcon name="menu" /></button
      ><NuxtLink to="/" class="brand" aria-label="Sumber Emas Rezeki beranda"
        ><UiIcon name="diamond" :size="32" /><span
          >SUMBER EMAS REZEKI<small>TOKO EMAS & PERHIASAN</small></span
        ></NuxtLink
      >
      <div class="brand-note">Timeless beauty. Meaningful moments.</div>
      <div class="nav-actions">
        <button class="icon-button" aria-label="Cari produk" @click="searchOpen = true">
          <UiIcon name="search" /></button
        ><NuxtLink
          class="icon-button wishlist-link"
          to="/wishlist"
          :aria-label="`Wishlist, ${wishlistCount} produk`"
          ><UiIcon name="heart" /><span v-if="wishlistCount" class="counter">{{
            wishlistCount
          }}</span></NuxtLink
        ><a :href="whatsappUrl()" target="_blank" rel="noopener noreferrer" class="nav-consult"
          ><UiIcon name="chat" :size="17" /> Konsultasi</a
        >
      </div>
    </div>
    <nav class="desktop-nav container" aria-label="Navigasi utama">
      <div
        v-for="link in links"
        :key="link.to"
        class="nav-item"
        @mouseenter="link.label === 'Koleksi' && (megaOpen = true)"
        @mouseleave="link.label === 'Koleksi' && (megaOpen = false)"
      >
        <div class="nav-link-group">
          <NuxtLink :to="link.to" :class="{ active: route.path === link.to }">{{
            link.label
          }}</NuxtLink
          ><button
            v-if="link.label === 'Koleksi'"
            class="menu-chevron"
            aria-label="Buka mega menu koleksi"
            :aria-expanded="megaOpen"
            @click="megaOpen = !megaOpen"
          >
            <UiIcon name="chevron" :size="12" />
          </button>
        </div>
        <LayoutMegaMenu v-if="link.label === 'Koleksi' && megaOpen" @close="megaOpen = false" />
      </div>
    </nav>
  </header>
  <Teleport to="body"
    ><div v-if="mobileOpen" class="modal-backdrop" @click.self="mobileOpen = false">
      <section class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu navigasi">
        <div class="drawer-heading">
          <span class="eyebrow">Jelajahi koleksi</span
          ><button class="icon-button" aria-label="Tutup menu" @click="mobileOpen = false">
            <UiIcon name="close" />
          </button>
        </div>
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          >{{ link.label }}<UiIcon name="arrow" :size="16" /></NuxtLink
        ><NuxtLink
          v-for="[label, to] in [
            ['Kalkulator', '/kalkulator'],
            ['Panduan Ukuran', '/ukuran-cincin'],
            ['Galeri', '/galeri'],
            ['Kontak & Lokasi', '/kontak'],
          ]"
          :key="to"
          :to="to!"
          >{{ label }}</NuxtLink
        >
        <p class="muted small">{{ siteConfig.tagline }}</p>
      </section>
    </div></Teleport
  ><ProductSearch :open="searchOpen" @close="searchOpen = false" />
</template>
