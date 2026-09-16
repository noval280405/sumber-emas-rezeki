<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'
const form = reactive({ name: '', phone: '', email: '', purpose: 'Tanya Produk', message: '' })
const ready = ref(false)
const url = computed(() =>
  whatsappUrl(`Halo ${siteConfig.name},
Nama: ${form.name}
WhatsApp: ${form.phone}
Email: ${form.email || '-'}
Keperluan: ${form.purpose}

${form.message}`),
)
watch(form, () => {
  ready.value = false
})
const submit = () => {
  ready.value = true
}
</script>
<template>
  <form class="contact-form" @submit.prevent="submit">
    <p class="eyebrow">Konsultasi personal</p>
    <h3>Ceritakan kebutuhan Anda.</h3>
    <div class="form-grid">
      <label
        >Nama<input
          v-model="form.name"
          autocomplete="name"
          required
          maxlength="100"
          placeholder="Nama lengkap" /></label
      ><label
        >Nomor WhatsApp<input
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          required
          pattern="[+0-9 ()-]{8,20}"
          maxlength="20"
          placeholder="08xxxxxxxxxx" /></label
      ><label class="full"
        >Email (opsional)<input
          v-model="form.email"
          type="email"
          autocomplete="email"
          maxlength="150"
          placeholder="nama@email.com" /></label
      ><label class="full"
        >Keperluan<select aria-label="Keperluan" v-model="form.purpose">
          <option
            v-for="p in [
              'Tanya Produk',
              'Cek Stok',
              'Buyback',
              'Wedding Ring',
              'Harga Emas',
              'Lokasi Toko',
              'Lainnya',
            ]"
            :key="p"
          >
            {{ p }}
          </option>
        </select></label
      ><label class="full"
        >Pesan<textarea
          v-model="form.message"
          required
          rows="5"
          maxlength="2000"
          placeholder="Apa yang ingin Anda tanyakan?"
        />
      </label>
    </div>
    <p class="small muted">
      Form menyiapkan pesan WhatsApp. Data tidak disimpan di server. Nomor tujuan masih contoh.
    </p>
    <button class="button" type="submit">Siapkan Pesan WhatsApp <UiIcon name="arrow" /></button>
    <div v-if="ready" class="notice" role="status">
      <p>Pesan Anda siap. Buka WhatsApp untuk meninjau dan mengirimkannya.</p>
      <a :href="url" class="button" target="_blank" rel="noopener noreferrer"
        >Lanjut ke WhatsApp <UiIcon name="chat"
      /></a>
    </div>
  </form>
</template>
