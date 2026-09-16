<script setup lang="ts">
usePageSeo('Galeri Perhiasan')
</script>
<template>
  <div>
    <UiPageHero
      title="Keindahan, dari dekat."
      eyebrow="The gallery"
      description="Sebuah ruang inspirasi untuk menemukan perhiasan yang mencerminkan diri Anda."
    />
    <section class="container section">
      <p class="notice">
        Seluruh foto merupakan ilustrasi untuk demo, bukan dokumentasi produk atau toko asli.
      </p>
      <GalleryGrid />
    </section>
  </div>
</template>
