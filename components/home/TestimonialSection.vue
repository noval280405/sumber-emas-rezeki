<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>
<template>
  <section class="testimonials section">
    <div class="container">
      <UiSectionTitle
        eyebrow="Precious moments, personal stories"
        title="Cerita di Balik Perhiasan"
      />
      <p class="demo-caption">
        Contoh testimoni untuk ilustrasi tampilan · bukan ulasan pelanggan asli.
      </p>
      <div class="three-grid">
        <article v-for="t in testimonials" :key="t.name">
          <span class="quote-mark">“</span>
          <blockquote>{{ t.quote }}</blockquote>
          <strong>{{ t.name }}</strong>
          <p>{{ t.occasion }}</p>
          <small v-if="t.isDemo">TESTIMONI DEMO</small>
        </article>
      </div>
    </div>
  </section>
</template>
