<script setup lang="ts">
defineProps<{ id: number; text?: boolean }>()
const { toggleWishlist, isWishlisted } = useWishlist()
</script>
<template>
  <button
    :class="['wishlist-button', { saved: isWishlisted(id), 'with-text': text }]"
    :aria-label="isWishlisted(id) ? 'Hapus dari wishlist' : 'Tambahkan ke wishlist'"
    :aria-pressed="isWishlisted(id)"
    @click.prevent="toggleWishlist(id)"
  >
    <UiIcon name="heart" :size="19" /><span v-if="text">{{
      isWishlisted(id) ? 'Tersimpan di Wishlist' : 'Tambahkan ke Wishlist'
    }}</span>
  </button>
</template>
