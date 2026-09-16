<script setup lang="ts">
import type { Product } from '~/data/products'
defineProps<{ product: Product }>()
const active = ref('Deskripsi')
const tabs = [
  'Deskripsi',
  'Spesifikasi',
  'Panduan Ukuran',
  'Perawatan',
  'Buyback',
  'Informasi Produk',
]
const activateTab = (index: number) => {
  const next = (index + tabs.length) % tabs.length
  active.value = tabs[next]!
  document.getElementById(`tab-${next}`)?.focus()
}
</script>
<template>
  <div class="product-details section">
    <div class="tabs" role="tablist" aria-label="Informasi produk">
      <button
        v-for="(tab, index) in tabs"
        :id="`tab-${index}`"
        :key="tab"
        :class="{ active: active === tab }"
        role="tab"
        :aria-selected="active === tab"
        aria-controls="product-panel"
        @click="active = tab"
        @keydown.right.prevent="activateTab(index + 1)"
        @keydown.left.prevent="activateTab(index - 1)"
        @keydown.home.prevent="activateTab(0)"
        @keydown.end.prevent="activateTab(tabs.length - 1)"
        :tabindex="active === tab ? 0 : -1"
      >
        {{ tab }}
      </button>
    </div>
    <div
      id="product-panel"
      class="tab-panel"
      role="tabpanel"
      :aria-labelledby="`tab-${tabs.indexOf(active)}`"
    >
      <p v-if="active === 'Deskripsi'">{{ product.description }}</p>
      <dl v-else-if="active === 'Spesifikasi'" class="spec-list">
        <template
          v-for="s in [
            { label: 'Kategori', value: product.category },
            {
              label: 'Kadar / Kemurnian',
              value: `${product.karat} / ${product.purityPercentage}%`,
            },
            { label: 'Berat', value: `± ${product.weight} gram` },
            { label: 'Warna', value: product.colors?.join(', ') },
            { label: 'Ukuran', value: product.sizes?.join(', ') || 'Tidak berlaku' },
            ...product.specifications,
          ]"
          :key="s.label"
          ><dt>{{ s.label }}</dt>
          <dd>{{ s.value }}</dd></template
        >
      </dl>
      <div v-else-if="active === 'Panduan Ukuran'">
        <p>
          Ukur diameter bagian dalam cincin atau keliling jari. Standar ukuran dapat berbeda;
          konfirmasikan kepada admin.
        </p>
        <NuxtLink class="text-link" to="/ukuran-cincin">Buka panduan ukuran →</NuxtLink>
      </div>
      <ul v-else-if="active === 'Perawatan'" class="care-list">
        <li>Simpan perhiasan terpisah.</li>
        <li>Hindari benturan.</li>
        <li>Bersihkan secara lembut.</li>
        <li>Hindari kontak bahan kimia berlebihan.</li>
        <li>Simpan di tempat kering.</li>
      </ul>
      <div v-else-if="active === 'Buyback'">
        <p>
          Nilai akhir buyback ditentukan setelah pemeriksaan kadar, berat aktual, kondisi barang,
          serta kebijakan toko.
        </p>
        <NuxtLink class="text-link" to="/buyback">Cek estimasi buyback →</NuxtLink>
      </div>
      <p v-else>
        Seluruh informasi produk, harga, varian, dan status stok merupakan data demo. Foto adalah
        ilustrasi. Website ini merupakan katalog; transaksi dan informasi akhir dikonfirmasi melalui
        toko.
      </p>
    </div>
  </div>
</template>
