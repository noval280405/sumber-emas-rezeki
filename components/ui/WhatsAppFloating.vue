<script setup lang="ts">
import { whatsappUrl } from '~/data/site'
</script>
<template>
  <a
    :href="whatsappUrl()"
    class="floating-wa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Konsultasi melalui WhatsApp (nomor demo)"
    ><UiIcon name="chat" :size="24" /><span>Chat dengan Kami</span></a
  >
</template>
