<script setup lang="ts">
import { goldPrices, calculatorDisclaimer } from '~/data/goldPrices'
import { money, whatsappUrl } from '~/data/site'
const karat = ref('18K')
const weight = ref<number | string>(4.2)
const price = ref<number | string>(950000)
const fee = ref<number | string>(500000)
const extra = ref<number | string>(0)
watch(karat, (value) => {
  price.value = goldPrices.find((g) => g.karat === value)?.pricePerGram || 0
})
const valid = computed(
  () =>
    [weight.value, price.value, fee.value, extra.value].every(
      (v) => v !== '' && Number.isFinite(Number(v)) && Number(v) >= 0,
    ) &&
    Number(weight.value) > 0 &&
    Number(weight.value) <= 10000 &&
    Number(price.value) > 0 &&
    [price.value, fee.value, extra.value].every((v) => Number(v) <= 1000000000),
)
const goldValue = computed(() => (valid.value ? Number(weight.value) * Number(price.value) : 0))
const total = computed(() =>
  valid.value ? goldValue.value + Number(fee.value) + Number(extra.value) : 0,
)
</script>
<template>
  <div class="calculator">
    <div class="calculator-inputs">
      <p class="eyebrow">Hitung dengan mudah</p>
      <h3>Detail perhiasan Anda</h3>
      <div class="form-grid">
        <label
          >Kadar Emas<select aria-label="Kadar Emas" v-model="karat">
            <option v-for="g in goldPrices" :key="g.karat">{{ g.karat }}</option>
          </select></label
        ><label
          >Berat (gram)<input
            v-model="weight"
            type="number"
            min="0.01"
            max="10000"
            step="0.01"
            inputmode="decimal" /></label
        ><label class="full"
          >Harga Emas / Gram (Rp)<input
            v-model="price"
            type="number"
            min="1"
            max="1000000000"
            inputmode="numeric" /></label
        ><label
          >Biaya Pembuatan (Rp)<input
            v-model="fee"
            type="number"
            min="0"
            max="1000000000"
            inputmode="numeric" /></label
        ><label
          >Biaya Tambahan (Rp)<input
            v-model="extra"
            type="number"
            min="0"
            max="1000000000"
            inputmode="numeric"
        /></label>
      </div>
      <p class="small muted">
        Harga awal mengikuti data demo. Anda dapat memasukkan harga sendiri.
      </p>
      <p v-if="!valid" class="form-error" role="alert">
        Masukkan berat dan harga positif, serta biaya minimal 0. Berat maksimal 10.000 gram; biaya
        maksimal Rp1 miliar.
      </p>
    </div>
    <div class="calculator-result" aria-live="polite">
      <UiIcon name="diamond" :size="32" />
      <p class="eyebrow">Gambaran nilai perhiasan</p>
      <dl>
        <dt>Nilai emas ({{ weight || 0 }} g × {{ money(Number(price)) }})</dt>
        <dd>{{ money(goldValue) }}</dd>
        <dt>Biaya pembuatan</dt>
        <dd>{{ money(Number(fee)) }}</dd>
        <dt>Biaya tambahan</dt>
        <dd>{{ money(Number(extra)) }}</dd>
      </dl>
      <p class="result-label">Total Estimasi</p>
      <strong class="estimate" data-testid="gold-total">{{ valid ? money(total) : '—' }}</strong>
      <p class="small">{{ calculatorDisclaimer }}</p>
      <UiPrimaryButton
        :href="
          whatsappUrl(
            `Halo, saya ingin konsultasi estimasi perhiasan ${karat}, berat ${weight} gram, estimasi ${money(total)} (demo).`,
          )
        "
        >Konsultasikan Estimasi</UiPrimaryButton
      >
    </div>
  </div>
</template>
