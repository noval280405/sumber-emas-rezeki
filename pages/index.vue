<script setup lang="ts">
useSeoMeta({
  title: 'Sumber Emas Rezeki | Toko Emas & Perhiasan',
  description:
    'Temukan koleksi cincin, kalung, gelang, anting dan perhiasan emas pilihan di Sumber Emas Rezeki.',
  ogTitle: 'Sumber Emas Rezeki | Toko Emas & Perhiasan',
  ogDescription: 'Keindahan Emas untuk Setiap Momen Berharga.',
  ogImage: '/images/hero/jewelry.jpg',
  ogType: 'website',
})
</script>
<template>
  <div>
    <HomeHeroSection /><HomeNewCollection /><HomeCategorySection /><HomeGoldPricePreview /><HomeBestSeller /><HomeWeddingCollection />
    <section class="container section">
      <UiSectionTitle
        eyebrow="Make an informed choice"
        title="Rencanakan Perhiasan Impian Anda"
        description="Ketahui gambaran nilainya dengan kalkulator estimasi emas."
        to="/kalkulator"
        link-text="Tentang Kalkulator"
      /><GoldCalculator />
    </section>
    <HomeWhyChooseUs /><HomeBuybackPreview /><HomeGalleryPreview /><HomeTestimonialSection /><HomeLocationPreview /><HomeFAQPreview /><HomeCTASection />
  </div>
</template>
