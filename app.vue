<script setup lang="ts">
import { siteConfig } from '~/data/site'
useHead({ meta: [{ name: 'theme-color', content: '#FAF7F0' }] })
</script>
<template>
  <div>
    <NuxtRouteAnnouncer /><a href="#main-content" class="skip-link">Lewati ke konten</a
    ><LayoutNavbar />
    <main id="main-content"><NuxtPage /></main>
    <LayoutFooter /><UiWhatsAppFloating />
    <div class="sr-only" aria-live="polite">{{ siteConfig.name }}</div>
  </div>
</template>
