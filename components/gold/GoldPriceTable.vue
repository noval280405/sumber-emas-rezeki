<script setup lang="ts">
import { goldPrices } from '~/data/goldPrices'
</script>
<template>
  <div class="table-scroll">
    <table>
      <caption>
        Harga emas dan estimasi buyback · data demo
      </caption>
      <thead>
        <tr>
          <th>Kadar</th>
          <th>Kemurnian</th>
          <th>Harga / gram</th>
          <th>Buyback / gram</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="g in goldPrices" :key="g.karat">
          <td><UiGoldBadge :karat="g.karat" /></td>
          <td>{{ g.purity }}%</td>
          <td><UiPriceDisplay :value="g.pricePerGram" /></td>
          <td><UiPriceDisplay :value="g.buybackPerGram || 0" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
