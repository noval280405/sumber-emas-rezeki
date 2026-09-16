<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
</script>
<template>
  <div class="empty-state error-page">
    <UiIcon name="diamond" :size="44" />
    <p class="eyebrow">{{ error.statusCode }}</p>
    <h1>Halaman belum ditemukan.</h1>
    <p>Jelajahi koleksi kami untuk menemukan pilihan Anda.</p>
    <button class="button" @click="clearError({ redirect: '/koleksi' })">
      Kembali ke Koleksi →
    </button>
  </div>
</template>
