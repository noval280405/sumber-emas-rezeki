<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'
</script>
<template>
  <div class="contact-info">
    <p class="eyebrow">Mari terhubung</p>
    <h2>Kami siap membantu Anda.</h2>
    <p>Temukan pilihan perhiasan, tanyakan detail koleksi, atau rencanakan kunjungan Anda.</p>
    <dl>
      <dt>WhatsApp</dt>
      <dd>
        <a :href="whatsappUrl()" target="_blank" rel="noopener noreferrer"
          >+{{ siteConfig.whatsapp }}</a
        >
      </dd>
      <dt>Email</dt>
      <dd>
        <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>
      </dd>
      <dt>Instagram</dt>
      <dd>
        <a
          :href="`https://instagram.com/${siteConfig.instagram.slice(1)}`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ siteConfig.instagram }}</a
        >
      </dd>
      <dt>Alamat Toko</dt>
      <dd>{{ siteConfig.address }} · menunggu alamat asli</dd>
      <dt>Jam Operasional</dt>
      <dd>{{ siteConfig.operationalHours }} WIB · contoh</dd>
    </dl>
    <p class="notice">
      Nomor WhatsApp, email, Instagram, alamat, dan jam buka masih merupakan placeholder demo.
    </p>
  </div>
</template>
