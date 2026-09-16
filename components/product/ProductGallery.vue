<script setup lang="ts">
const props = defineProps<{ images: string[]; name: string }>()
const active = ref(0)
const zoom = ref(false)
let startX = 0
watch(
  () => props.name,
  () => {
    active.value = 0
  },
)
const swipe = (e: TouchEvent) => {
  const diff = (e.changedTouches[0]?.clientX || 0) - startX
  if (Math.abs(diff) > 40)
    active.value = (active.value + (diff < 0 ? 1 : -1) + props.images.length) % props.images.length
}
</script>
<template>
  <div class="product-gallery">
    <button
      class="gallery-main"
      aria-label="Perbesar foto produk"
      @click="zoom = true"
      @touchstart="startX = $event.touches[0]?.clientX || 0"
      @touchend="swipe"
    >
      <img :src="images[active]" :alt="`${name}, foto ${active + 1}`" /><span
        ><UiIcon name="search" :size="16" /> Perbesar foto</span
      >
    </button>
    <div class="thumbnails">
      <button
        v-for="(image, index) in images"
        :key="image"
        :class="{ selected: active === index }"
        :aria-label="`Tampilkan foto ${index + 1}`"
        :aria-pressed="active === index"
        @click="active = index"
      >
        <img :src="image" :alt="`Thumbnail ${name} ${index + 1}`" />
      </button>
    </div>
    <p class="small muted">Foto ilustrasi. Geser foto pada perangkat seluler.</p>
    <GalleryLightbox
      :open="zoom"
      :image="images[active] || ''"
      :title="name"
      @close="zoom = false"
      @previous="active = (active - 1 + images.length) % images.length"
      @next="active = (active + 1) % images.length"
    />
  </div>
</template>
