<script setup lang="ts">
usePageSeo('Pertanyaan yang Sering Diajukan')
</script>
<template>
  <div>
    <UiPageHero
      title="Ada yang ingin Anda ketahui?"
      eyebrow="Frequently asked questions"
      description="Informasi sederhana untuk membantu Anda memilih dengan lebih nyaman."
    />
    <section class="container narrow section">
      <UiFAQList />
      <div class="tips-panel">
        <h3>Belum menemukan jawabannya?</h3>
        <p>Konsultasikan pertanyaan Anda bersama kami.</p>
        <NuxtLink to="/kontak" class="text-link">Hubungi kami →</NuxtLink>
      </div>
    </section>
  </div>
</template>
