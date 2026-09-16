<script setup lang="ts">
import { goldPrices } from '~/data/goldPrices'
import { buybackConditions, buybackDisclaimer } from '~/data/buyback'
import { money, whatsappUrl } from '~/data/site'
const type = ref('Cincin')
const karat = ref('18K')
const weight = ref<number | string>(5)
const condition = ref('Baik')
const rate = computed(() => goldPrices.find((g) => g.karat === karat.value)?.buybackPerGram || 0)
const deduction = computed(
  () => buybackConditions.find((c) => c.name === condition.value)?.deduction || 0,
)
const valid = computed(
  () =>
    weight.value !== '' &&
    Number.isFinite(Number(weight.value)) &&
    Number(weight.value) > 0 &&
    Number(weight.value) <= 10000,
)
const total = computed(() =>
  valid.value ? Number(weight.value) * rate.value * (1 - deduction.value) : 0,
)
</script>
<template>
  <div class="calculator">
    <div class="calculator-inputs">
      <p class="eyebrow">Langkah pertama Anda</p>
      <h3>Informasi emas Anda</h3>
      <div class="form-grid">
        <label
          >Jenis Produk<select aria-label="Jenis Produk" v-model="type">
            <option
              v-for="v in ['Cincin', 'Kalung', 'Gelang', 'Anting', 'Liontin', 'Lainnya']"
              :key="v"
            >
              {{ v }}
            </option>
          </select></label
        ><label
          >Kadar Emas<select aria-label="Kadar Emas" v-model="karat">
            <option v-for="g in goldPrices" :key="g.karat">{{ g.karat }}</option>
          </select></label
        ><label
          >Berat (gram)<input
            v-model="weight"
            type="number"
            min="0.01"
            max="10000"
            step="0.01" /></label
        ><label
          >Kondisi<select aria-label="Kondisi" v-model="condition">
            <option v-for="c in buybackConditions" :key="c.name">{{ c.name }}</option>
          </select></label
        >
      </div>
      <p class="notice">
        Simulasi menggunakan harga buyback demo dan penyesuaian kondisi contoh. Ini bukan kebijakan
        buyback resmi toko.
      </p>
      <p v-if="!valid" class="form-error" role="alert">
        Masukkan berat lebih dari 0 hingga 10.000 gram.
      </p>
    </div>
    <div class="calculator-result" aria-live="polite">
      <UiIcon name="diamond" :size="32" />
      <p class="eyebrow">Estimasi awal buyback</p>
      <dl>
        <dt>Produk / kadar</dt>
        <dd>{{ type }} / {{ karat }}</dd>
        <dt>Berat</dt>
        <dd>{{ weight || 0 }} gram</dd>
        <dt>Buyback / gram</dt>
        <dd>{{ money(rate) }}</dd>
        <dt>Penyesuaian kondisi demo</dt>
        <dd>{{ Math.round(deduction * 100) }}%</dd>
      </dl>
      <p class="result-label">Estimasi Nilai</p>
      <strong class="estimate" data-testid="buyback-total">{{ valid ? money(total) : '—' }}</strong>
      <p class="small">{{ buybackDisclaimer }}</p>
      <UiPrimaryButton
        :href="
          whatsappUrl(
            `Halo, saya ingin konsultasi buyback ${type}, ${karat}, ${weight} gram, kondisi ${condition}. Estimasi demo ${money(total)}.`,
          )
        "
        >Konsultasi Buyback</UiPrimaryButton
      >
    </div>
  </div>
</template>
