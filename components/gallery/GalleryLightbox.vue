<script setup lang="ts">
const props = defineProps<{ open: boolean; image: string; title: string }>()
const emit = defineEmits<{ close: []; previous: []; next: [] }>()
useModal(toRef(props, 'open'), () => emit('close'))
</script>
<template>
  <Teleport to="body"
    ><div v-if="open" class="modal-backdrop lightbox-backdrop" @click.self="$emit('close')">
      <section
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @keydown.left="$emit('previous')"
        @keydown.right="$emit('next')"
      >
        <button class="icon-button lightbox-close" aria-label="Tutup foto" @click="$emit('close')">
          <UiIcon name="close" /></button
        ><img :src="image" :alt="title" />
        <div class="lightbox-controls">
          <button class="icon-button" aria-label="Foto sebelumnya" @click="$emit('previous')">
            ←
          </button>
          <p>{{ title }} <small>· foto ilustrasi</small></p>
          <button class="icon-button" aria-label="Foto berikutnya" @click="$emit('next')">→</button>
        </div>
      </section>
    </div></Teleport
  >
</template>
