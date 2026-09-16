<script setup lang="ts">
import { ringSizes, ringSizeNotice } from '~/data/ringSizes'
const method = ref('diameter')
const value = ref<number | string>(16.5)
watch(method, (method) => {
  value.value = method === 'diameter' ? 16.5 : 51.8
})
const diameter = computed(() =>
  method.value === 'diameter' ? Number(value.value) : Number(value.value) / Math.PI,
)
const valid = computed(
  () =>
    value.value !== '' &&
    Number.isFinite(diameter.value) &&
    diameter.value >= ringSizes[0]!.diameter - 0.2 &&
    diameter.value <= ringSizes[ringSizes.length - 1]!.diameter + 0.2,
)
const result = computed(() =>
  valid.value
    ? ringSizes.reduce((best, size) =>
        Math.abs(size.diameter - diameter.value) < Math.abs(best.diameter - diameter.value)
          ? size
          : best,
      )
    : null,
)
</script>
<template>
  <div class="calculator ring-calculator">
    <div class="calculator-inputs">
      <p class="eyebrow">Ukuran yang personal</p>
      <h3>Kalkulator ukuran cincin</h3>
      <label
        >Metode Pengukuran<select aria-label="Metode Pengukuran" v-model="method">
          <option value="diameter">Diameter bagian dalam cincin</option>
          <option value="circumference">Keliling jari</option>
        </select></label
      ><label
        >{{ method === 'diameter' ? 'Diameter (mm)' : 'Keliling (mm)'
        }}<input v-model="value" type="number" min="1" max="100" step="0.1"
      /></label>
      <p v-if="!valid" class="form-error" role="alert">
        Ukuran berada di luar tabel contoh. Masukkan diameter 14,5–19,8 mm atau keliling sekitar
        45,6–62,2 mm, atau konsultasikan kepada admin.
      </p>
    </div>
    <div class="calculator-result" aria-live="polite">
      <p class="eyebrow">Rekomendasi ukuran</p>
      <strong class="estimate" data-testid="ring-result">{{
        result ? `Size ${result.size}` : '—'
      }}</strong>
      <p v-if="result">
        Diameter {{ result.diameter }} mm · Keliling {{ result.circumference }} mm
      </p>
      <p class="small">{{ ringSizeNotice }}</p>
    </div>
  </div>
</template>
