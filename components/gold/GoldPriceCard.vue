<script setup lang="ts">
import type { GoldPrice } from '~/data/goldPrices'
defineProps<{ gold: GoldPrice }>()
</script>
<template>
  <article class="gold-price-card">
    <div>
      <span class="gold-karat">{{ gold.karat }}</span
      ><UiIcon name="diamond" :size="25" />
    </div>
    <p>Emas {{ gold.purity }}%</p>
    <strong><UiPriceDisplay :value="gold.pricePerGram" /></strong
    ><span class="small muted"> / gram</span><span class="gold-card-line" />
  </article>
</template>
