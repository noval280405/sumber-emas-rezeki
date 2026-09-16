<script setup lang="ts">
import { whatsappUrl } from '~/data/site'
</script>

<template>
  <aside class="boutique-announcement" aria-label="Informasi koleksi dan konsultasi">
    <div class="container announcement-inner">
      <NuxtLink to="/koleksi?collection=new" class="announcement-new">
        <span class="new-marker" aria-hidden="true" />
        THE NEW COLLECTION
      </NuxtLink>
      <div class="announcement-message">
        <UiIcon name="diamond" :size="15" />
        <p>Perhiasan indah. <em>Cerita berharga.</em></p>
        <span class="announcement-divider" aria-hidden="true" />
        <NuxtLink to="/koleksi" class="announcement-discover">
          Temukan pilihan Anda <UiIcon name="arrow" :size="14" />
        </NuxtLink>
      </div>
      <a :href="whatsappUrl()" class="announcement-chat" target="_blank" rel="noopener noreferrer">
        <UiIcon name="chat" :size="15" />
        <span>Konsultasi Personal</span>
      </a>
    </div>
  </aside>
</template>

<style scoped>
.boutique-announcement {
  background: #211710;
  color: #f0e7d8;
  border-bottom: 1px solid #b8924a70;
  background-image: linear-gradient(110deg, #211710, #3d291a 50%, #211710);
}
.announcement-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 43px;
}
.announcement-new {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #d7be89;
  font-size: 8px;
  letter-spacing: 1.6px;
  white-space: nowrap;
}
.new-marker {
  width: 5px;
  height: 5px;
  background: #d7be89;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #d7be8910;
}
.announcement-message {
  display: flex;
  align-items: center;
  gap: 12px;
}
.announcement-message > svg {
  color: #d7be89;
}
.announcement-message p {
  font-size: 10px;
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.announcement-message em {
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: #e4cfa6;
  font-size: 16px;
  margin-left: 3px;
}
.announcement-divider {
  height: 13px;
  width: 1px;
  background: #d7be8940;
  margin-inline: 5px;
}
.announcement-discover,
.announcement-chat {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 9px;
  white-space: nowrap;
  min-height: 43px;
}
.announcement-discover {
  color: #e4cfa6;
}
.announcement-chat {
  color: #d5c9b8;
}
.announcement-discover svg {
  transition: transform 0.2s;
}
.announcement-discover:hover svg {
  transform: translateX(3px);
}
.boutique-announcement a:hover {
  color: #fff6e5;
}
.boutique-announcement a:focus-visible {
  outline-color: #d7be89;
  outline-offset: 2px;
}
@media (max-width: 1100px) {
  .announcement-new {
    display: none;
  }
}
@media (max-width: 767px) {
  .announcement-inner {
    justify-content: center;
    min-height: 58px;
    padding-block: 8px;
  }
  .announcement-chat,
  .announcement-divider {
    display: none;
  }
  .announcement-message {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0 9px;
    justify-content: center;
  }
  .announcement-message > svg {
    width: 14px;
    grid-row: 1;
  }
  .announcement-message p {
    font-size: 10px;
  }
  .announcement-message em {
    font-size: 16px;
  }
  .announcement-discover {
    grid-column: 1 / -1;
    justify-content: center;
    min-height: 26px;
    font-size: 9px;
    gap: 7px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .announcement-discover svg {
    transition: none;
  }
}
</style>
