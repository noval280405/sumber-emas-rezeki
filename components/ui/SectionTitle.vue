<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  to?: string
  linkText?: string
}>()
</script>
<template>
  <div class="section-heading">
    <div>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="section-description">{{ description }}</p>
    </div>
    <NuxtLink v-if="to" :to="to" class="text-link"
      >{{ linkText || 'Lihat Semua Koleksi' }} <UiIcon name="arrow" :size="17"
    /></NuxtLink>
  </div>
</template>
