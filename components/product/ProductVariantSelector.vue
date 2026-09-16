<script setup lang="ts">
defineProps<{ sizes?: string[]; colors?: string[]; size: string; color: string }>()
defineEmits<{ 'update:size': [value: string]; 'update:color': [value: string] }>()
</script>
<template>
  <div class="variant-selector">
    <fieldset v-if="sizes?.length">
      <legend>Pilih Ukuran <NuxtLink to="/ukuran-cincin">Panduan ukuran ↗</NuxtLink></legend>
      <div class="variant-options">
        <button
          v-for="s in sizes"
          :key="s"
          :class="{ selected: size === s }"
          :aria-pressed="size === s"
          @click="$emit('update:size', s)"
        >
          {{ s }}
        </button>
      </div>
    </fieldset>
    <fieldset v-if="colors?.length">
      <legend>Warna Emas</legend>
      <div class="variant-options">
        <button
          v-for="c in colors"
          :key="c"
          :class="{ selected: color === c }"
          :aria-pressed="color === c"
          @click="$emit('update:color', c)"
        >
          <i
            class="color-swatch"
            :style="{
              background:
                c === 'Rose Gold' ? '#c88f7c' : c === 'White Gold' ? '#c7c7c3' : '#bd9d56',
            }"
          />{{ c }}
        </button>
      </div>
    </fieldset>
  </div>
</template>
