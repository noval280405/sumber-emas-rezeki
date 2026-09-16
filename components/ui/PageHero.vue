<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string; description?: string }>()
</script>
<template>
  <header class="page-hero">
    <div class="container">
      <p class="breadcrumb">
        <NuxtLink to="/">Beranda</NuxtLink><span>/</span>{{ eyebrow || title }}
      </p>
      <p class="eyebrow">{{ eyebrow || 'SUMBER EMAS REZEKI' }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
      <slot />
    </div>
  </header>
</template>
