<script setup lang="ts">
defineProps<{ karat: string }>()
</script>
<template>
  <span class="gold-badge">{{ karat }}</span>
</template>
