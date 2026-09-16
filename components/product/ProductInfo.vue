<script setup lang="ts">
import type { Product } from '~/data/products'
import { money, whatsappUrl, siteConfig, demoNotice } from '~/data/site'
const props = defineProps<{ product: Product }>()
const size = ref(props.product.sizes?.[0] || 'Tidak berlaku')
const color = ref(props.product.colors?.[0] || 'Yellow Gold')
const price = computed(
  () =>
    props.product.price +
    Math.max(0, props.product.sizes?.indexOf(size.value) || 0) * 50000 +
    (color.value === 'Rose Gold' ? 100000 : color.value === 'White Gold' ? 150000 : 0),
)
const inquiry = computed(() =>
  whatsappUrl(`Halo ${siteConfig.name},

Saya tertarik dengan produk berikut:
Produk: ${props.product.name}
Kadar: ${props.product.karat} / ${props.product.purityPercentage}%
Berat: ± ${props.product.weight} gram
Ukuran: ${size.value}
Warna: ${color.value}
Harga yang ditampilkan: ${money(price.value)} (demo)

Apakah produk ini masih tersedia?`),
)
</script>
<template>
  <div class="product-info">
    <p class="eyebrow">{{ product.category }} / {{ product.collection }}</p>
    <h1>{{ product.name }}</h1>
    <p class="detail-price" data-testid="variant-price">{{ money(price) }}</p>
    <p class="small muted">{{ demoNotice }}</p>
    <div class="product-facts">
      <div>
        <UiIcon name="diamond" /><span
          >Kadar Emas<strong>{{ product.karat }} / {{ product.purityPercentage }}%</strong></span
        >
      </div>
      <div>
        <UiIcon name="sun" /><span
          >Berat Perhiasan<strong>± {{ product.weight }} gram</strong></span
        >
      </div>
    </div>
    <ProductVariantSelector
      v-model:size="size"
      v-model:color="color"
      :sizes="product.sizes"
      :colors="product.colors"
    />
    <p class="stock">
      <span :class="{ unavailable: product.stockStatus === 'Habis' }" />{{
        product.stockStatus === 'Terbatas' ? 'Stok Terbatas' : product.stockStatus
      }}
      <small>· status demo, konfirmasi kepada admin</small>
    </p>
    <div class="detail-buttons">
      <UiPrimaryButton :href="inquiry">Pesan via WhatsApp</UiPrimaryButton
      ><UiPrimaryButton :href="inquiry" secondary>Cek Ketersediaan</UiPrimaryButton>
    </div>
    <ProductWishlistButton :id="product.id" text />
    <p class="notice">
      Pilihan ukuran dan warna memengaruhi estimasi harga demo. Ketersediaan varian dan berat aktual
      perlu dikonfirmasi. Nomor WhatsApp masih placeholder.
    </p>
    <div class="mobile-product-cta">
      <ProductWishlistButton :id="product.id" /><a
        :href="inquiry"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
        >Chat Produk <UiIcon name="chat" :size="18"
      /></a>
    </div>
  </div>
</template>
