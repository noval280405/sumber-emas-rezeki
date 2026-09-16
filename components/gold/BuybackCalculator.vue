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
  <div class="calculator buyback-estimator">
    <div class="calculator-inputs">
      <div class="estimator-heading">
        <span class="step-marker">01</span>
        <div>
          <p class="eyebrow">Detail perhiasan</p>
          <h3>Informasi emas Anda</h3>
        </div>
      </div>
      <p class="input-intro">
        Lengkapi detail berikut untuk mendapatkan gambaran awal nilai emas Anda.
      </p>
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
          >Berat (gram)<span class="weight-field"
            ><input
              v-model="weight"
              type="number"
              min="0.01"
              max="10000"
              step="0.01"
              inputmode="decimal"
              aria-label="Berat (gram)"
            /><span aria-hidden="true">gram</span></span
          ></label
        ><label
          >Kondisi<select aria-label="Kondisi" v-model="condition">
            <option v-for="c in buybackConditions" :key="c.name">{{ c.name }}</option>
          </select></label
        >
      </div>
      <div class="simulation-note">
        <UiIcon name="diamond" :size="19" />
        <div>
          <strong>Simulasi, bukan penawaran final</strong>
          <p>
            Harga dan penyesuaian kondisi menggunakan data demo, bukan kebijakan buyback resmi toko.
          </p>
        </div>
      </div>
      <p v-if="!valid" class="form-error" role="alert">
        Masukkan berat lebih dari 0 hingga 10.000 gram.
      </p>
    </div>
    <div class="calculator-result" aria-live="polite">
      <div class="result-heading">
        <span class="result-emblem"><UiIcon name="diamond" :size="25" /></span>
        <p class="eyebrow">Ringkasan estimasi</p>
        <span class="demo-pill">DATA DEMO</span>
      </div>
      <div class="estimate-highlight">
        <p class="result-label">Estimasi nilai buyback</p>
        <strong class="estimate" data-testid="buyback-total">{{
          valid ? money(total) : '—'
        }}</strong>
        <p class="estimate-caption">
          {{ valid ? 'Dihitung otomatis dari detail emas Anda' : 'Lengkapi berat emas yang valid' }}
        </p>
      </div>
      <dl>
        <dt>Produk / kadar</dt>
        <dd>{{ type }} / {{ karat }}</dd>
        <dt>Berat</dt>
        <dd>{{ weight || 0 }} gram</dd>
        <dt>Buyback / gram</dt>
        <dd>{{ money(rate) }}</dd>
        <dt>Penyesuaian kondisi <small>(demo)</small></dt>
        <dd>{{ Math.round(deduction * 100) }}%</dd>
      </dl>
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

<style scoped>
.buyback-estimator {
  grid-template-columns: 1.05fr 1fr;
  border: 1px solid #d6c49b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 45px #082f2509;
  align-items: stretch;
}
.buyback-estimator .calculator-inputs {
  padding: 38px;
  background: #fffdf8;
}
.estimator-heading {
  display: flex;
  align-items: center;
  gap: 16px;
}
.step-marker {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid #d9c58e;
  border-radius: 50%;
  color: #94701f;
  font-size: 12px;
  flex-shrink: 0;
}
.estimator-heading .eyebrow {
  margin-bottom: 5px;
  font-size: 9px;
}
.buyback-estimator h3 {
  margin-bottom: 0;
  font-size: 33px;
}
.input-intro {
  font-size: 12px;
  color: var(--muted);
  margin: 20px 0 28px;
  max-width: 370px;
}
.buyback-estimator .form-grid {
  gap: 23px 20px;
}
.buyback-estimator label {
  color: #234735;
  font-size: 11px;
}
.buyback-estimator select,
.buyback-estimator input {
  min-height: 50px;
  margin-top: 9px;
  border-color: #d8d9cc;
  border-radius: 5px;
  background: #fff;
  font-size: 12px;
}
.buyback-estimator input:focus-visible,
.buyback-estimator select:focus-visible {
  outline: 2px solid #a9822e;
  outline-offset: 2px;
  border-color: #a9822e;
}
.weight-field {
  display: block;
  position: relative;
}
.weight-field input {
  padding-right: 58px;
}
.weight-field > span {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #657565;
  font-size: 11px;
  pointer-events: none;
}
.weight-field input {
  appearance: textfield;
  -moz-appearance: textfield;
}
.weight-field input::-webkit-inner-spin-button,
.weight-field input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.simulation-note {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-top: 28px;
  padding: 17px;
  background: #f3eedf;
  border: 1px solid #e3d8b9;
  border-radius: 6px;
}
.simulation-note > svg {
  margin-top: 2px;
  color: #94701f;
}
.simulation-note strong {
  font-size: 10px;
  font-weight: 600;
  color: #66511c;
}
.simulation-note p {
  font-size: 10px;
  line-height: 1.8;
  color: #746b54;
  margin-top: 4px;
}
.buyback-estimator .calculator-result {
  padding: 34px 38px;
  --gold: #dfbd78;
  --metal: #dfbd78;
  --muted: #d5c3ad;
  background: #302018;
  color: #fff4e2;
  justify-content: flex-start;
}
.result-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.result-emblem {
  width: 43px;
  height: 43px;
  border: 1px solid #e5be6350;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--metal);
  flex-shrink: 0;
}
.result-heading .eyebrow {
  color: #dfbd78;
  font-size: 9px;
  letter-spacing: 1.5px;
  margin-bottom: 0;
}
.demo-pill {
  margin-left: auto;
  border: 1px solid #e5be6340;
  color: #e5be63;
  border-radius: 3px;
  padding: 4px 7px;
  font-size: 7px;
  letter-spacing: 1px;
  white-space: nowrap;
}
.estimate-highlight {
  width: 100%;
  padding: 23px 0 24px;
}
.estimate-highlight .result-label {
  margin-top: 0;
  font-size: 9px;
  letter-spacing: 1.7px;
  color: #dfbd78;
}
.estimate-highlight .estimate {
  display: block;
  font-size: clamp(36px, 3.8vw, 56px);
  line-height: 1.15;
  color: #f4d791;
  margin: 10px 0;
  overflow-wrap: anywhere;
}
.estimate-caption {
  color: #d5c3ad;
  font-size: 10px;
}
.buyback-estimator dl {
  border-top: 1px solid #e5be6330;
  border-bottom: 1px solid #e5be6330;
  padding: 20px 0;
  margin-bottom: 19px;
  gap: 12px 20px;
  font-size: 11px;
}
.buyback-estimator dt {
  color: #d5c3ad;
}
.buyback-estimator dd {
  color: #fff5df;
  font-weight: 500;
}
.buyback-estimator dt small {
  font-size: 9px;
}
.buyback-estimator .calculator-result > .small {
  font-size: 10px;
  line-height: 1.9;
  color: #d5c3ad;
}
.buyback-estimator .calculator-result > .button {
  background: #d9b56f;
  border-color: #d9b56f;
  color: #302018;
  margin-top: 22px;
  border-radius: 5px;
  min-height: 50px;
}
.buyback-estimator .calculator-result > .button:hover {
  background: #efd098;
  border-color: #efd098;
}
@media (max-width: 1023px) {
  .buyback-estimator .calculator-inputs,
  .buyback-estimator .calculator-result {
    padding: 28px;
  }
  .result-heading {
    flex-wrap: wrap;
  }
  .demo-pill {
    margin-left: 0;
  }
}
@media (max-width: 767px) {
  .buyback-estimator {
    grid-template-columns: 1fr;
    border-radius: 8px;
  }
  .buyback-estimator .calculator-inputs,
  .buyback-estimator .calculator-result {
    padding: 26px 22px;
  }
  .buyback-estimator h3 {
    font-size: 29px;
  }
  .estimator-heading {
    gap: 12px;
  }
  .step-marker {
    width: 36px;
    height: 36px;
  }
  .input-intro {
    font-size: 11px;
    margin: 18px 0 23px;
  }
  .buyback-estimator .form-grid {
    gap: 20px 14px;
  }
  .buyback-estimator select,
  .buyback-estimator input {
    font-size: 14px;
  }
  .estimate-highlight .estimate {
    font-size: 43px;
  }
  .result-heading {
    gap: 9px;
  }
  .result-heading .eyebrow {
    color: #dfbd78;
    font-size: 8px;
    letter-spacing: 1px;
  }
  .demo-pill {
    margin-left: auto;
    font-size: 6px;
  }
  .buyback-estimator dl {
    font-size: 10px;
    gap: 12px 15px;
  }
}
@media (max-width: 389px) {
  .buyback-estimator .calculator-inputs,
  .buyback-estimator .calculator-result {
    padding: 23px 18px;
  }
  .buyback-estimator h3 {
    font-size: 26px;
  }
  .estimate-highlight .estimate {
    font-size: 38px;
  }
}
</style>
