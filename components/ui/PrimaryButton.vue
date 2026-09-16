<script setup lang="ts">
defineProps<{ to?: string; href?: string; secondary?: boolean }>()
</script>
<template>
  <NuxtLink v-if="to" :to="to" :class="['button', { secondary }]"
    ><slot /><UiIcon name="arrow" :size="16" /></NuxtLink
  ><a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="['button', { secondary }]"
    ><slot /><UiIcon name="arrow" :size="16" /></a
  ><button v-else :class="['button', { secondary }]"><slot /></button>
</template>
