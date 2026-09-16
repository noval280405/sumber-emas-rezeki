<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'

const explore = [
  ['Tentang Kami', '/tentang'],
  ['Koleksi Wedding', '/wedding'],
  ['Galeri Perhiasan', '/galeri'],
  ['Lokasi Toko', '/lokasi'],
  ['Hubungi Kami', '/kontak'],
]
const guidance = [
  ['Harga Emas', '/harga-emas'],
  ['Kalkulator Emas', '/kalkulator'],
  ['Panduan Ukuran', '/ukuran-cincin'],
  ['Buyback & Tukar Tambah', '/buyback'],
  ['Pertanyaan Umum', '/faq'],
]
</script>

<template>
  <footer class="boutique-footer" aria-label="Informasi dan navigasi toko">
    <div class="container">
      <div class="footer-invitation">
        <div>
          <p class="eyebrow">A little guidance, a precious choice</p>
          <h2>Pilihan istimewa dimulai<br />dari <em>sebuah percakapan.</em></h2>
        </div>
        <a class="footer-consult" :href="whatsappUrl()" target="_blank" rel="noopener noreferrer">
          <span class="footer-consult-icon"><UiIcon name="chat" :size="24" /></span>
          <span>Kami siap membantu Anda<strong>Konsultasi via WhatsApp</strong></span>
          <UiIcon name="arrow" :size="22" />
        </a>
      </div>

      <div class="footer-columns">
        <div class="footer-identity">
          <NuxtLink to="/" class="footer-logo" aria-label="Sumber Emas Rezeki — beranda">
            <span class="footer-emblem"><UiIcon name="diamond" :size="32" /></span>
            <span>SUMBER EMAS REZEKI<small>TOKO EMAS & PERHIASAN</small></span>
          </NuxtLink>
          <p>{{ siteConfig.tagline }}</p>
          <div class="footer-socials">
            <a
              :href="`https://instagram.com/${siteConfig.instagram.slice(1)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sumber Emas Rezeki"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
              </svg>
              <span>Instagram</span>
            </a>
            <a :href="`mailto:${siteConfig.email}`" aria-label="Kirim email ke Sumber Emas Rezeki">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <nav class="footer-nav" aria-label="Jelajahi toko">
          <h3>Jelajahi</h3>
          <NuxtLink v-for="[label, to] in explore" :key="to" :to="to!">{{ label }}</NuxtLink>
        </nav>
        <nav class="footer-nav" aria-label="Panduan pelanggan">
          <h3>Panduan Anda</h3>
          <NuxtLink v-for="[label, to] in guidance" :key="to" :to="to!">{{ label }}</NuxtLink>
        </nav>

        <div class="footer-visit">
          <h3>Mari Bertemu</h3>
          <div class="footer-contact-row">
            <UiIcon name="pin" :size="18" />
            <p>
              {{ siteConfig.address
              }}<small v-if="siteConfig.contactIsPlaceholder">Alamat lengkap segera tersedia</small>
            </p>
          </div>
          <div class="footer-contact-row">
            <UiIcon name="clock" :size="18" />
            <p>
              {{ siteConfig.operationalHours }} WIB<small v-if="siteConfig.contactIsPlaceholder"
                >Jam operasional contoh</small
              >
            </p>
          </div>
          <a
            class="footer-contact-row"
            :href="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            ><UiIcon name="chat" :size="18" /><span>+{{ siteConfig.whatsapp }}</span></a
          >
          <p v-if="siteConfig.contactIsPlaceholder" class="footer-demo-note">
            Informasi kontak masih placeholder demo.
          </p>
        </div>
      </div>

      <nav class="footer-collection-links" aria-label="Koleksi perhiasan">
        <NuxtLink to="/koleksi" class="footer-collection-heading"
          >Temukan koleksi Anda <UiIcon name="arrow" :size="16"
        /></NuxtLink>
        <div>
          <NuxtLink
            v-for="category in ['Cincin', 'Kalung', 'Gelang', 'Anting', 'Liontin', 'Wedding']"
            :key="category"
            :to="`/kategori/${category.toLowerCase()}`"
            >{{ category }}</NuxtLink
          >
        </div>
      </nav>
      <div class="footer-legal">
        <p>© 2026 {{ siteConfig.name }}. All rights reserved.</p>
        <span>Setiap perhiasan, sebuah cerita.</span>
        <a href="#main-content">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.boutique-footer {
  background: #211710;
  color: #e8e0d2;
  padding: 0 0 24px;
}
.footer-invitation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 54px 0 44px;
  border-bottom: 1px solid #d7be8926;
}
.footer-invitation .eyebrow {
  color: #c7ab76;
  font-size: 9px;
}
.footer-invitation h2 {
  font-size: clamp(32px, 3vw, 44px);
  line-height: 1.13;
}
.footer-invitation em {
  color: #d7be89;
}
.footer-consult {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 21px 24px;
  border: 1px solid #d7be8940;
  background: #ffffff03;
}
.footer-consult:hover {
  background: #d7be8910;
  border-color: #d7be89;
  color: #fff3db;
}
.footer-consult-icon {
  color: #d7be89;
}
.footer-consult > span:nth-child(2) {
  color: #bcb2a3;
  font-size: 10px;
}
.footer-consult strong {
  display: block;
  font-size: 13px;
  color: #f0e7d6;
  font-weight: 500;
  margin-top: 3px;
}
.footer-consult > svg {
  color: #d7be89;
  margin-left: 12px;
}
.footer-columns {
  display: grid;
  grid-template-columns: 1.5fr 0.85fr 1fr 1.1fr;
  gap: 40px;
  padding: 48px 0;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-emblem {
  display: grid;
  place-items: center;
  width: 48px;
  height: 58px;
  border: 1px solid #d7be8945;
  border-radius: 24px 24px 3px 3px;
  color: #d7be89;
  flex-shrink: 0;
}
.footer-logo > span:last-child {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 21px;
  letter-spacing: 0.7px;
  line-height: 1.25;
}
.footer-logo small {
  display: block;
  font-family: 'Plus Jakarta Sans', Arial, sans-serif;
  font-size: 6px;
  letter-spacing: 2.4px;
  margin-top: 7px;
  color: #c3b5a0;
}
.footer-identity > p {
  max-width: 240px;
  font-size: 12px;
  color: #bfb5a6;
  margin-top: 21px;
  line-height: 1.9;
}
.footer-socials {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}
.footer-socials a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  border: 1px solid #ffffff20;
  padding: 9px 12px;
  font-size: 10px;
}
.footer-socials a:hover {
  border-color: #d7be89;
  color: #d7be89;
}
.footer-columns h3 {
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: 10px;
  font-weight: 500;
  margin: 6px 0 23px;
  color: #e3cda5;
}
.footer-nav a {
  display: block;
  width: fit-content;
  font-size: 11px;
  padding: 5px 0;
  color: #bfb5a6;
}
.footer-nav a:hover {
  color: #f0dab2;
  transform: translateX(3px);
}
.footer-contact-row {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-bottom: 16px;
  font-size: 11px;
  color: #d4cbbc;
}
.footer-contact-row svg {
  color: #bda474;
  margin-top: 2px;
}
.footer-contact-row small {
  display: block;
  font-size: 9px;
  color: #aaa092;
  margin-top: 3px;
}
.footer-demo-note {
  color: #aaa092;
  font-size: 9px;
  max-width: 200px;
}
.footer-collection-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-block: 1px solid #d7be8926;
  padding: 20px 0;
}
.footer-collection-heading {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  font-size: 11px;
  color: #dfc594;
}
.footer-collection-links > div {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}
.footer-collection-links > div a {
  font-size: 10px;
  color: #bfb5a6;
}
.footer-collection-links a:hover {
  color: #f0dab2;
}
.footer-legal {
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 9px;
  color: #aaa092;
}
.footer-legal > span {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: 15px;
}
.footer-legal a {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d7c8ad;
  padding: 8px 0;
}
.footer-legal a span {
  font-size: 17px;
}
.boutique-footer :focus-visible {
  outline-color: #d7be89;
}
@media (max-width: 1100px) {
  .footer-columns {
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 30px;
  }
  .footer-identity {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
  }
  .footer-identity > p,
  .footer-socials {
    margin-top: 0;
  }
  .footer-consult {
    padding: 18px;
    gap: 12px;
  }
}
@media (max-width: 767px) {
  .boutique-footer {
    padding-bottom: 80px;
  }
  .footer-invitation {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
    padding: 38px 0 30px;
  }
  .footer-invitation .eyebrow {
    font-size: 8px;
    letter-spacing: 1.6px;
  }
  .footer-invitation h2 {
    font-size: 35px;
  }
  .footer-consult {
    padding: 18px;
  }
  .footer-consult > svg {
    margin-left: auto;
  }
  .footer-columns {
    grid-template-columns: 1fr 1fr;
    gap: 32px 20px;
    padding: 34px 0;
  }
  .footer-identity {
    display: block;
  }
  .footer-identity > p {
    margin-top: 18px;
    max-width: 280px;
  }
  .footer-socials {
    margin-top: 18px;
  }
  .footer-columns h3 {
    margin-bottom: 15px;
    font-size: 9px;
  }
  .footer-nav a {
    font-size: 11px;
    padding-block: 7px;
  }
  .footer-visit {
    grid-column: 1 / -1;
    padding-top: 24px;
    border-top: 1px solid #d7be8926;
  }
  .footer-demo-note {
    max-width: none;
  }
  .footer-collection-links {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
  .footer-collection-links > div {
    gap: 12px 22px;
  }
  .footer-collection-links > div a {
    padding-block: 4px;
  }
  .footer-legal {
    flex-wrap: wrap;
    gap: 8px 15px;
  }
  .footer-legal > p {
    width: 100%;
    font-size: 8px;
  }
  .footer-legal > span {
    font-size: 14px;
  }
  .footer-legal a {
    margin-left: auto;
    font-size: 8px;
  }
}
</style>
