<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'
const menu = [
  ['Koleksi', '/koleksi'],
  ['Harga Emas', '/harga-emas'],
  ['Kalkulator Emas', '/kalkulator'],
  ['Panduan Ukuran', '/ukuran-cincin'],
  ['Buyback', '/buyback'],
  ['Wedding', '/wedding'],
  ['Tentang Kami', '/tentang'],
  ['Galeri', '/galeri'],
  ['FAQ', '/faq'],
  ['Lokasi', '/lokasi'],
  ['Kontak', '/kontak'],
]
</script>
<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <UiIcon name="diamond" :size="32" />
        <h3>SUMBER EMAS REZEKI</h3>
        <p class="eyebrow">Toko Emas & Perhiasan</p>
        <p>{{ siteConfig.tagline }}</p>
        <span class="footer-line" />
      </div>
      <div>
        <h4>Jelajahi</h4>
        <NuxtLink v-for="[label, to] in menu" :key="to" :to="to!">{{ label }}</NuxtLink>
      </div>
      <div>
        <h4>Koleksi</h4>
        <NuxtLink
          v-for="c in ['Cincin', 'Kalung', 'Gelang', 'Anting', 'Liontin', 'Wedding']"
          :key="c"
          :to="`/kategori/${c.toLowerCase()}`"
          >{{ c }}</NuxtLink
        >
      </div>
      <div>
        <h4>Mari Terhubung</h4>
        <a :href="whatsappUrl()" target="_blank" rel="noopener noreferrer"
          >+{{ siteConfig.whatsapp }}</a
        ><a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a
        ><a
          :href="`https://instagram.com/${siteConfig.instagram.slice(1)}`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ siteConfig.instagram }}</a
        >
        <p>{{ siteConfig.address }} · belum tersedia</p>
        <p>{{ siteConfig.operationalHours }} WIB · contoh</p>
        <p class="small">Informasi kontak masih placeholder demo.</p>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Sumber Emas Rezeki. All rights reserved.</span
      ><span>Dibuat untuk setiap momen berharga.</span>
    </div>
  </footer>
</template>
