export const siteConfig = {
  name: 'Sumber Emas Rezeki',
  fullName: 'Toko Sumber Emas Rezeki',
  subtitle: 'Toko Emas & Perhiasan',
  tagline: 'Keindahan Emas untuk Setiap Momen Berharga.',
  whatsapp: '6281234567890',
  email: 'hello@sumberemasrezeki.com',
  instagram: '@sumberemasrezeki',
  address: 'Alamat toko',
  mapsUrl: '#',
  operationalHours: '09:00 - 20:00',
  contactIsPlaceholder: true,
}
export const demoNotice =
  'Harga yang ditampilkan merupakan data contoh untuk kebutuhan demo website.'
export const money = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0)
export const whatsappUrl = (
  message = `Halo ${siteConfig.name}, saya ingin bertanya mengenai produk emas dan perhiasan.`,
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
