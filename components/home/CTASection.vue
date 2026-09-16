<script setup lang="ts">
import { whatsappUrl } from '~/data/site'
</script>
<template>
  <section class="final-cta">
    <UiIcon name="diamond" :size="29" />
    <p class="eyebrow">YOUR NEXT PRECIOUS MOMENT</p>
    <h2>Temukan Perhiasan untuk<br /><em>Momen Berharga Anda.</em></h2>
    <p>
      Jelajahi koleksi Sumber Emas Rezeki dan konsultasikan<br class="desktop-break" />
      produk pilihan Anda bersama kami.
    </p>
    <div>
      <UiPrimaryButton to="/koleksi">Lihat Koleksi</UiPrimaryButton
      ><UiPrimaryButton :href="whatsappUrl()" secondary>Chat WhatsApp</UiPrimaryButton>
    </div>
  </section>
</template>
