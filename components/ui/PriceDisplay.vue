<script setup lang="ts">
import { money } from '~/data/site'
defineProps<{ value: number }>()
</script>
<template>
  <span>{{ money(value) }}</span>
</template>
