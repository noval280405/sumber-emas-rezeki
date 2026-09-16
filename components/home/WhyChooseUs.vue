<script setup lang="ts">
const reasons = [
  {
    icon: 'diamond',
    title: 'Koleksi Pilihan',
    copy: 'Berbagai model untuk beragam kebutuhan dan momen Anda.',
  },
  {
    icon: 'check',
    title: 'Informasi Produk Jelas',
    copy: 'Kadar, berat, dan spesifikasi ditampilkan secara transparan.',
  },
  {
    icon: 'chat',
    title: 'Konsultasi Mudah',
    copy: 'Temukan jawaban dan pilihan melalui WhatsApp.',
  },
  {
    icon: 'sun',
    title: 'Informasi Buyback',
    copy: 'Konsultasikan proses dan estimasi nilai emas Anda.',
  },
  {
    icon: 'heart',
    title: 'Panduan Ukuran',
    copy: 'Panduan awal untuk menemukan cincin yang terasa pas.',
  },
  {
    icon: 'pin',
    title: 'Kunjungan Toko',
    copy: 'Rencanakan kunjungan setelah lokasi toko dikonfirmasi.',
  },
]
</script>
<template>
  <section class="why-section section">
    <div class="container">
      <UiSectionTitle
        eyebrow="Thoughtfully chosen, just for you"
        title="Lebih dari Sekadar Perhiasan."
        description="Hal-hal kecil yang membuat pengalaman memilih terasa istimewa."
      />
      <div class="why-grid">
        <article v-for="r in reasons" :key="r.title">
          <UiIcon :name="r.icon" :size="26" />
          <h3>{{ r.title }}</h3>
          <p>{{ r.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
