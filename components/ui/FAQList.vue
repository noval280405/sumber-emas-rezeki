<script setup lang="ts">
import { faqs } from '~/data/faq'
defineProps<{ limit?: number }>()
</script>
<template>
  <div class="faq-list">
    <details v-for="(faq, index) in faqs.slice(0, limit || faqs.length)" :key="faq.question">
      <summary>
        <span class="faq-number">0{{ index + 1 }}</span
        >{{ faq.question }}<span class="plus">+</span>
      </summary>
      <p>{{ faq.answer }}</p>
    </details>
  </div>
</template>
