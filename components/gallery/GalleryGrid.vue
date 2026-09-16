<script setup lang="ts">
import { galleryItems } from '~/data/gallery'
const category = ref('Semua')
const active = ref(0)
const open = ref(false)
const filtered = computed(() =>
  galleryItems.filter((g) => category.value === 'Semua' || g.category === category.value),
)
const current = computed(() => filtered.value[active.value])
watch(category, () => {
  active.value = 0
})
const move = (delta: number) => {
  active.value = (active.value + delta + filtered.value.length) % filtered.value.length
}
const showImage = (index: number) => {
  active.value = index
  open.value = true
}
</script>
<template>
  <div>
    <div class="tabs gallery-filters">
      <button
        v-for="c in ['Semua', 'Cincin', 'Kalung', 'Gelang', 'Anting', 'Wedding', 'Store']"
        :key="c"
        :class="{ active: category === c }"
        :aria-pressed="category === c"
        @click="category = c"
      >
        {{ c }}
      </button>
    </div>
    <div class="masonry">
      <button
        v-for="(g, i) in filtered"
        :key="g.id"
        :aria-label="`Perbesar ${g.title}`"
        @click="showImage(i)"
      >
        <img :src="g.image" :alt="g.title" loading="lazy" /><span
          >{{ g.title }} <UiIcon name="arrow"
        /></span>
      </button>
    </div>
    <GalleryLightbox
      :open="open"
      :image="current?.image || ''"
      :title="current?.title || ''"
      @close="open = false"
      @previous="move(-1)"
      @next="move(1)"
    />
  </div>
</template>
