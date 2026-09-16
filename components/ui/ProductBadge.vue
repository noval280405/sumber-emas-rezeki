<script setup lang="ts">
defineProps<{ label: string }>()
</script>
<template>
  <span class="product-badge">{{ label }}</span>
</template>
