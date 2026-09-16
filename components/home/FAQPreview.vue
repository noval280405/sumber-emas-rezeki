<template>
  <section class="container section faq-preview">
    <div>
      <p class="eyebrow">A little guidance</p>
      <h2>Sebelum Anda<br /><em>menentukan pilihan.</em></h2>
      <p>Beberapa hal yang mungkin ingin Anda ketahui.</p>
      <NuxtLink to="/faq" class="text-link">Lihat Semua FAQ <UiIcon name="arrow" /></NuxtLink>
    </div>
    <UiFAQList :limit="4" />
  </section>
</template>
