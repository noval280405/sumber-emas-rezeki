# PRODUCT REQUIREMENTS DOCUMENT
# SUMBER EMAS REZEKI
## Toko Emas & Perhiasan

---

# 1. INSTRUKSI UTAMA UNTUK CODEX

Bangun website:

# SUMBER EMAS REZEKI

Subtitle:

**Toko Emas & Perhiasan**

Tagline:

**Keindahan Emas untuk Setiap Momen Berharga.**

Website merupakan:

**Luxury Jewelry Catalogue + Gold Price Information + Product Inquiry + Gold Calculator + Buyback Estimator**

Kerjakan langsung pada source code project yang sedang dibuka.

Gunakan:

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Composition API
- `<script setup lang="ts">`
- NuxtLink
- Local TypeScript Data
- Mobile First
- Responsive Design

Website harus terlihat:

- premium
- elegan
- terpercaya
- modern
- clean
- mewah
- tidak berlebihan
- cocok untuk toko emas Indonesia

Jangan membuat:

- Backend
- Firebase
- Supabase
- Database
- Login
- Register
- Admin Dashboard
- Customer Dashboard
- Payment Gateway
- Midtrans
- QRIS
- Checkout sungguhan
- Live gold price API

Untuk MVP:

- seluruh produk menggunakan local TypeScript
- wishlist menggunakan local state / localStorage
- harga emas menggunakan data demo
- order / inquiry dilakukan melalui WhatsApp
- kalkulator hanya memberikan estimasi
- buyback hanya memberikan estimasi
- stock merupakan data frontend demo

Setelah selesai:

1. cek seluruh route
2. cek responsive
3. cek product search
4. cek product filtering
5. cek product variants
6. cek dynamic product page
7. cek wishlist
8. cek gold calculator
9. cek buyback calculator
10. cek ring size guide
11. cek WhatsApp
12. cek TypeScript
13. cek browser console
14. jalankan `npm run build`
15. perbaiki semua error sampai build berhasil

---

# 2. PROJECT INFORMATION

Brand:

**SUMBER EMAS REZEKI**

Full Business Name:

**Toko Sumber Emas Rezeki**

Category:

**Gold Jewelry & Precious Metal Retail**

Website Type:

**Luxury Jewelry Retail Catalogue**

Target customer:

- Wanita
- Pria
- Pasangan
- Calon pengantin
- Keluarga
- Pembeli hadiah
- Pembeli emas
- Customer buyback
- Customer tukar tambah

---

# 3. BRAND POSITIONING

Gunakan branding:

# SUMBER EMAS REZEKI

## Toko Emas & Perhiasan

Tagline:

**Keindahan Emas untuk Setiap Momen Berharga.**

Supporting copy:

**Temukan koleksi perhiasan emas pilihan mulai dari cincin, kalung, gelang, anting hingga koleksi pernikahan untuk melengkapi setiap momen istimewa.**

---

# 4. IMPORTANT BUSINESS RULE

Karena harga emas dapat berubah:

Jangan menggunakan istilah:

**Harga Live**

jika belum terhubung ke API atau sistem toko.

Gunakan:

**Harga Emas Hari Ini**

tetapi tambahkan label jika data demo:

**Harga yang ditampilkan merupakan data contoh untuk kebutuhan demo website.**

Atau gunakan:

**Harga terakhir diperbarui secara manual.**

Jangan membuat klaim:

- harga emas realtime
- harga terbaik se-Indonesia
- emas termurah
- buyback tertinggi
- 100% tanpa potongan
- sertifikasi tertentu

jika data asli belum tersedia.

---

# 5. DESIGN DIRECTION

Gunakan konsep:

# MODERN LUXURY JEWELRY

Website harus terlihat seperti butik perhiasan premium.

Karakter:

- clean
- sophisticated
- warm
- elegant
- spacious
- editorial
- luxurious

Gunakan:

- whitespace besar
- foto produk besar
- tipografi editorial
- border tipis
- shadow sangat halus
- transisi smooth
- warna emas sebagai accent

Jangan membuat:

- background gold penuh
- gradient gold berlebihan
- button terlalu glossy
- efek glitter berlebihan
- terlalu banyak icon
- UI seperti marketplace murah

---

# 6. COLOR PALETTE

Gunakan:

Warm Ivory:

```css
#FAF7F0

Pure White:

#FFFFFF

Luxury Gold:

#B8924A

Light Gold:

#D7BE89

Soft Beige:

#E9DFCF

Dark Brown:

#302A25

Charcoal:

#181818

Muted Text:

#756D64

Border:

#E8E1D7

Success:

#3D7A5B

Gunakan gold hanya sebagai:

accent
icon kecil
line decoration
button tertentu
badge
hover
7. TYPOGRAPHY

Heading:

Cormorant Garamond

Body:

Plus Jakarta Sans

Alternatif heading:

Playfair Display

Heading harus memberikan kesan:

elegant
luxury
editorial

Body harus tetap mudah dibaca.

8. ROUTE STRUCTURE

Gunakan:

/
├── /koleksi
├── /kategori/[slug]
├── /produk/[slug]
├── /harga-emas
├── /kalkulator
├── /ukuran-cincin
├── /wishlist
├── /buyback
├── /wedding
├── /galeri
├── /tentang
├── /faq
├── /kontak
└── /lokasi
9. PAGE STRUCTURE
pages/
├── index.vue
├── koleksi.vue
├── harga-emas.vue
├── kalkulator.vue
├── ukuran-cincin.vue
├── wishlist.vue
├── buyback.vue
├── wedding.vue
├── galeri.vue
├── tentang.vue
├── faq.vue
├── kontak.vue
├── lokasi.vue
│
├── kategori/
│   └── [slug].vue
│
└── produk/
    └── [slug].vue
10. COMPONENT STRUCTURE
components/
│
├── layout/
│   ├── Navbar.vue
│   ├── MegaMenu.vue
│   └── Footer.vue
│
├── home/
│   ├── HeroSection.vue
│   ├── CategorySection.vue
│   ├── NewCollection.vue
│   ├── BestSeller.vue
│   ├── GoldPricePreview.vue
│   ├── WeddingCollection.vue
│   ├── WhyChooseUs.vue
│   ├── BuybackPreview.vue
│   ├── GalleryPreview.vue
│   ├── TestimonialSection.vue
│   ├── LocationPreview.vue
│   ├── FAQPreview.vue
│   └── CTASection.vue
│
├── product/
│   ├── ProductCard.vue
│   ├── ProductGrid.vue
│   ├── ProductFilter.vue
│   ├── ProductSearch.vue
│   ├── ProductGallery.vue
│   ├── ProductInfo.vue
│   ├── ProductSpecification.vue
│   ├── ProductVariantSelector.vue
│   ├── RelatedProducts.vue
│   └── WishlistButton.vue
│
├── gold/
│   ├── GoldPriceCard.vue
│   ├── GoldPriceTable.vue
│   ├── GoldCalculator.vue
│   └── BuybackCalculator.vue
│
├── ring/
│   ├── RingSizeGuide.vue
│   └── RingSizeCalculator.vue
│
├── wedding/
│   ├── WeddingHero.vue
│   └── WeddingCollection.vue
│
├── gallery/
│   ├── GalleryGrid.vue
│   └── GalleryLightbox.vue
│
├── contact/
│   ├── ContactForm.vue
│   └── ContactInfo.vue
│
└── ui/
    ├── SectionTitle.vue
    ├── PageHero.vue
    ├── PrimaryButton.vue
    ├── PriceDisplay.vue
    ├── GoldBadge.vue
    ├── ProductBadge.vue
    └── WhatsAppFloating.vue
11. LOCAL DATA

Gunakan:

data/
├── site.ts
├── categories.ts
├── products.ts
├── goldPrices.ts
├── buyback.ts
├── ringSizes.ts
├── testimonials.ts
├── gallery.ts
└── faq.ts
12. SITE CONFIG

Buat:

export const siteConfig = {
  name: 'Sumber Emas Rezeki',

  fullName: 'Toko Sumber Emas Rezeki',

  tagline:
    'Keindahan Emas untuk Setiap Momen Berharga.',

  whatsapp: '6281234567890',

  email: 'hello@sumberemasrezeki.com',

  instagram: '@sumberemasrezeki',

  address: 'Alamat toko',

  mapsUrl: '#',

  operationalHours: '09:00 - 20:00',
}

Semua informasi kontak harus mengambil dari config.

Jangan hardcode berkali-kali.

13. NAVBAR

Desktop:

SUMBER EMAS REZEKI

Beranda
Koleksi
Cincin
Kalung
Gelang
Anting
Wedding
Harga Emas
Buyback
Tentang

[Search]
[Wishlist]
[WhatsApp]

Mobile:

gunakan hamburger.

Navbar:

sticky
elegant
transparent pada hero
berubah menjadi solid saat scroll
active state
responsive
14. MEGA MENU

Untuk menu Koleksi buat mega menu.

Contoh:

KOLEKSI

PERHIASAN
Cincin
Kalung
Gelang
Anting
Liontin

KOLEKSI
New Arrival
Best Seller
Wedding
Pria
Wanita

BERDASARKAN KADAR
24K
22K
18K
14K
15. HOMEPAGE FINAL FLOW
NAVBAR

↓

HERO

↓

NEW COLLECTION

↓

SHOP BY CATEGORY

↓

GOLD PRICE TODAY

↓

BEST SELLER

↓

WEDDING COLLECTION

↓

GOLD CALCULATOR

↓

WHY CHOOSE US

↓

BUYBACK & TRADE-IN

↓

GALLERY

↓

TESTIMONIAL

↓

STORE LOCATION

↓

FAQ

↓

FINAL CTA

↓

FOOTER
16. HERO SECTION

Gunakan visual:

close-up perhiasan emas dengan background ivory.

Headline:

Keindahan yang
Bertahan Sepanjang Waktu.

Description:

Temukan koleksi perhiasan emas pilihan untuk melengkapi setiap momen berharga.

CTA:

Lihat Koleksi

→ /koleksi

CTA kedua:

Cek Harga Emas

→ /harga-emas

Tambahkan small text:

Cincin • Kalung • Gelang • Anting • Wedding

Animasi:

image reveal
text fade up
subtle gold line animation

Jangan berlebihan.

17. PRODUCT CATEGORIES

Kategori utama:

Cincin

Subcategory:

Cincin Wanita
Cincin Pria
Cincin Couple
Wedding Ring
Engagement Ring
Kalung
Kalung Wanita
Kalung Anak
Pendant Necklace
Gelang
Gelang Wanita
Gelang Pria
Gelang Anak
Anting
Stud
Hoop
Drop
Anting Anak
Liontin
Wedding Jewelry
Men's Collection
Women's Collection
Gold Bar

Gold bar dibuat optional.

18. CATEGORY SECTION

Homepage tampilkan:

CINCIN
Temukan koleksi cincin emas untuk berbagai momen.

KALUNG
Koleksi kalung elegan untuk melengkapi penampilan.

GELANG
Pilihan gelang emas dengan berbagai desain.

ANTING
Koleksi anting dari klasik hingga modern.

WEDDING
Perhiasan untuk momen pernikahan.

PRIA
Koleksi emas untuk pria.
19. PRODUCT INTERFACE

Gunakan:

export interface Product {
  id: number
  slug: string

  name: string

  category:
    | 'Cincin'
    | 'Kalung'
    | 'Gelang'
    | 'Anting'
    | 'Liontin'
    | 'Wedding'
    | 'Gold Bar'

  gender:
    | 'Wanita'
    | 'Pria'
    | 'Unisex'

  karat:
    | '24K'
    | '22K'
    | '18K'
    | '14K'

  purityPercentage: number

  weight: number

  price: number

  originalPrice?: number

  workmanshipFee?: number

  description: string

  specifications: {
    label: string
    value: string
  }[]

  sizes?: string[]

  colors?: string[]

  images: string[]

  stockStatus:
    | 'Tersedia'
    | 'Terbatas'
    | 'Pre Order'
    | 'Habis'

  featured?: boolean
  bestSeller?: boolean
  newArrival?: boolean
}
20. SAMPLE PRODUCT

Gunakan dummy:

Cincin Aurora 18K

Category:
Cincin

Kadar:
18K

Kemurnian:
75%

Berat:
3.8 gram

Harga:
Rp4.850.000

Ukuran:
10
11
12
13
14
15

Warna:
Yellow Gold
Rose Gold
White Gold

Stock:
Tersedia
21. PRODUCT LIST PAGE

Route:

/koleksi

Headline:

Koleksi Perhiasan

Search:

Cari cincin, kalung, gelang...

Filter:

Kategori
Kadar
Harga
Berat
Gender
Warna
Availability

Sorting:

Terbaru
Harga Terendah
Harga Tertinggi
Best Seller
Berat Terendah
Berat Tertinggi
22. PRODUCT FILTER

Filter kategori:

Cincin
Kalung
Gelang
Anting
Liontin
Wedding

Kadar:

24K
22K
18K
14K

Harga:

< Rp2.000.000

Rp2.000.000 - Rp5.000.000

Rp5.000.000 - Rp10.000.000

Rp10.000.000+

Berat:

< 2 gram
2 - 5 gram
5 - 10 gram
10+ gram
23. PRODUCT CARD

Contoh:

[PRODUCT IMAGE]

NEW

Cincin Aurora

18K • 3.8 gram

Rp4.850.000

♡ Wishlist

[Lihat Detail]

Hover desktop:

image zoom sedikit
second image optional
wishlist muncul
border / shadow halus
24. PRODUCT DETAIL

Dynamic route:

/produk/[slug]

Layout desktop:

LEFT

Product Gallery

RIGHT

Product Name
Category
Rating placeholder optional
Gold Purity
Weight
Price
Variant
Size
Stock
CTA
25. PRODUCT DETAIL CONTENT

Contoh:

CINCIN AURORA 18K

Rp4.850.000

18K / 75%

Berat
3.8 gram

Pilih Ukuran

[10]
[11]
[12]
[13]
[14]
[15]

Warna

Yellow Gold
Rose Gold
White Gold

Stock

Tersedia

[CEK KETERSEDIAAN]

[PESAN VIA WHATSAPP]

♡ Tambahkan ke Wishlist
26. PRODUCT DETAIL TABS

Di bawah produk tampilkan:

DESKRIPSI

SPESIFIKASI

PANDUAN UKURAN

PERAWATAN

BUYBACK

INFORMASI PRODUK
27. PRODUCT SPECIFICATIONS

Contoh:

Kategori
Cincin

Material
Emas

Kadar
18K

Kemurnian
75%

Berat
± 3.8 gram

Warna
Yellow Gold

Ukuran
10 – 15

Gunakan simbol ± jika berat merupakan perkiraan.

28. PRODUCT IMAGE GALLERY

Gunakan:

main image
thumbnails
zoom
optional lightbox

Mobile:

swipe horizontal.

29. PRODUCT VARIANT

Gunakan:

Ukuran

Warna Emas

Berat jika memiliki variasi

Ketika variant berubah:

price dapat berubah berdasarkan data dummy.

Gunakan computed.

30. WISHLIST

Route:

/wishlist

Tidak perlu login.

Gunakan:

localStorage

Fitur:

Add wishlist
Remove wishlist
Wishlist counter
Empty state

Empty state:

Wishlist masih kosong.

Temukan perhiasan yang Anda sukai.
31. GOLD PRICE PAGE

Route:

/harga-emas

Headline:

Harga Emas Hari Ini

Tampilkan:

24K
RpX.XXX.XXX / gram

22K
RpX.XXX.XXX / gram

18K
RpXXX.XXX / gram

14K
RpXXX.XXX / gram

Gunakan data local.

Tambahkan:

Terakhir diperbarui:
[DATE PLACEHOLDER]

Dan:

Harga pada halaman demo tidak terhubung dengan harga pasar realtime.

32. GOLD PRICE INTERFACE
export interface GoldPrice {
  karat: string
  purity: number
  pricePerGram: number
  buybackPerGram?: number
  updatedAt: string
}
33. GOLD CALCULATOR

Route:

/kalkulator

Headline:

Kalkulator Estimasi Perhiasan Emas

Input:

Kadar Emas

Berat

Harga Emas / Gram

Biaya Pembuatan

Biaya Tambahan
34. GOLD CALCULATOR EXAMPLE

Input:

Kadar
18K

Berat
4.2 gram

Harga Emas
Rp950.000 / gram

Biaya Pembuatan
Rp500.000

Calculation:

Nilai Emas

4.2 × Rp950.000
=
Rp3.990.000

Biaya Pembuatan
Rp500.000

----------------

ESTIMASI

Rp4.490.000

Gunakan:

computed()

Disclaimer:

Hasil kalkulator hanya merupakan estimasi dan bukan harga transaksi final. Harga dapat berbeda berdasarkan berat aktual, kadar, desain, batu, biaya produksi dan kebijakan toko.

35. RING SIZE PAGE

Route:

/ukuran-cincin

Headline:

Temukan Ukuran Cincin yang Tepat.

Section:

Cara Mengukur

Size Chart

Ring Size Calculator

Tips Mengukur
36. RING SIZE CALCULATOR

Input:

Diameter bagian dalam cincin

atau

Keliling jari

Result:

Diameter
16.5 mm

Rekomendasi Ukuran
Size 12

Data menggunakan:

data/ringSizes.ts

Jangan menganggap tabel universal.

Tambahkan notice:

Ukuran dapat berbeda tergantung standar yang digunakan toko. Konfirmasikan kembali kepada admin sebelum membeli.

37. BUYBACK PAGE

Route:

/buyback

Headline:

Buyback & Tukar Tambah Emas

Description:

Cek estimasi awal nilai emas sebelum datang ke toko.

38. BUYBACK CALCULATOR

Input:

Jenis Produk

Kadar

Berat

Kondisi

Jenis:

Cincin
Kalung
Gelang
Anting
Liontin
Lainnya

Kondisi:

Baik

Rusak Ringan

Rusak

Tidak Tahu
39. BUYBACK RESULT

Contoh:

Emas 18K

Berat
5 gram

Estimasi Buyback / gram
RpXXX.XXX

----------------

ESTIMASI NILAI

RpX.XXX.XXX

Disclaimer sangat jelas:

Nilai di atas hanya estimasi. Nilai akhir ditentukan setelah pemeriksaan kadar, berat aktual, kondisi barang serta kebijakan toko.

40. BUYBACK FLOW
Input Data

↓

Lihat Estimasi

↓

Bawa Emas ke Toko

↓

Pengecekan

↓

Penawaran Final

↓

Transaksi
41. WEDDING PAGE

Route:

/wedding

Gunakan desain lebih editorial.

Headline:

A Symbol of Forever.

Subheadline:

Koleksi cincin pernikahan untuk menemani awal perjalanan baru Anda.

Kategori:

Wedding Ring
Couple Ring
Engagement Ring
Bridal Jewelry

CTA:

Lihat Koleksi Wedding

42. WEDDING PRODUCT EXPERIENCE

Tampilkan:

His & Hers

Yellow Gold

Rose Gold

White Gold

Custom Size

Jika custom order belum tersedia secara nyata:

jangan mengklaim bisa custom.

Gunakan:

Konsultasikan ketersediaan model dan ukuran kepada admin.

43. WHY CHOOSE US

Tampilkan 5 atau 6 card.

Contoh:

Koleksi Pilihan

Berbagai model untuk beragam kebutuhan.

Informasi Produk Jelas

Kadar, berat dan spesifikasi ditampilkan secara transparan.

Konsultasi Mudah

Hubungi toko melalui WhatsApp.

Buyback Information

Informasi buyback dapat dikonsultasikan.

Panduan Ukuran

Membantu menentukan ukuran cincin.

Toko Fisik

Customer dapat datang langsung ke lokasi toko.

Jangan membuat klaim tentang sertifikasi atau keaslian tanpa data asli.

44. PRODUCT CARE

Tambahkan info:

Cara Merawat Perhiasan

Tips umum:

Simpan terpisah
Hindari benturan
Bersihkan secara lembut
Hindari kontak bahan kimia berlebihan
Simpan di tempat kering

Jangan membuat klaim teknis yang tidak pasti.

45. GALLERY PAGE

Route:

/galeri

Kategori:

Cincin

Kalung

Gelang

Anting

Wedding

Store

Gunakan:

masonry grid
lightbox
smooth image transition
46. ABOUT PAGE

Route:

/tentang

Headline:

Tentang Sumber Emas Rezeki

Copy:

Sumber Emas Rezeki hadir sebagai toko emas dan perhiasan yang menyediakan berbagai pilihan koleksi untuk kebutuhan sehari-hari, hadiah dan berbagai momen istimewa.

Jangan membuat:

tahun berdiri palsu
jumlah pelanggan palsu
jumlah cabang palsu
sertifikasi palsu

Jika data asli belum ada:

gunakan placeholder.

47. LOCATION PAGE

Route:

/lokasi

Tampilkan:

Nama Toko

Alamat

Google Maps

Jam Operasional

WhatsApp

Petunjuk Lokasi

CTA:

Buka di Google Maps

Gunakan placeholder sampai lokasi asli tersedia.

48. CONTACT PAGE

Route:

/kontak

Form:

Nama

Nomor WhatsApp

Email

Keperluan

Pesan

Keperluan:

Tanya Produk

Cek Stok

Buyback

Wedding Ring

Harga Emas

Lokasi Toko

Lainnya

Submit:

generate WhatsApp.

49. PRODUCT WHATSAPP MESSAGE

Contoh:

Halo Sumber Emas Rezeki,

Saya tertarik dengan produk berikut:

Produk:
Cincin Aurora 18K

Kadar:
18K / 75%

Berat:
3.8 gram

Ukuran:
12

Warna:
Yellow Gold

Harga yang ditampilkan:
Rp4.850.000

Apakah produk ini masih tersedia?

Gunakan:

encodeURIComponent()
50. GENERAL WHATSAPP

Floating WhatsApp:

Halo Sumber Emas Rezeki, saya ingin bertanya mengenai produk emas dan perhiasan.

Tampilkan di seluruh halaman.

51. SEARCH

Tambahkan search modal.

Placeholder:

Cari cincin, kalung, gelang...

Search by:

Product Name
Category
Karat
Collection

Gunakan local data + computed.

52. SEARCH SUGGESTIONS

Saat user mengetik:

cincin

Tampilkan:

Cincin Aurora 18K

Cincin Couple Harmony

Wedding Ring Classic

Lihat semua hasil untuk "cincin"
53. BEST SELLER

Homepage section:

Koleksi Favorit

Tampilkan 4–8 produk.

Data berdasarkan:

bestSeller: true

Bukan data penjualan sebenarnya.

Untuk portfolio, label best seller hanya dummy.

54. NEW ARRIVAL

Homepage:

Koleksi Terbaru

Gunakan:

newArrival: true
55. STOCK STATUS

Gunakan badge:

Tersedia

Stok Terbatas

Pre Order

Habis

Jika habis:

disable CTA inquiry optional.

Tapi tetap boleh:

Tanya Ketersediaan

56. PRICE FORMAT

Gunakan:

new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

Output:

Rp1.250.000

Rp4.850.000

Rp12.500.000
57. TESTIMONIAL

Jika belum mempunyai review nyata:

gunakan demo dengan:

isDemo: true

Jangan tampilkan:

Google rating palsu
rating 4.9 palsu
jumlah review palsu
58. FAQ

Tambahkan:

Apakah harga emas berubah?

Ya. Harga emas dapat berubah mengikuti kondisi pasar dan kebijakan toko.

Apakah harga website merupakan harga final?

Tidak selalu. Berat aktual dan detail produk dapat memengaruhi harga final.

Bagaimana cara mengecek stok?

Hubungi admin melalui WhatsApp.

Apakah tersedia buyback?

Informasi buyback dapat dikonsultasikan langsung dengan toko.

Bagaimana mengetahui ukuran cincin?

Gunakan panduan ukuran atau konsultasikan dengan admin.

Apakah tersedia wedding ring?

Ya, website menampilkan koleksi wedding yang tersedia.

Apakah dapat membeli langsung melalui website?

Pada versi ini, website berfungsi sebagai katalog dan konsultasi. Transaksi dikonfirmasi melalui toko atau WhatsApp.

59. FINAL CTA

Gunakan section premium.

Headline:

Temukan Perhiasan untuk
Momen Berharga Anda.

Description:

Jelajahi koleksi Sumber Emas Rezeki dan konsultasikan produk pilihan Anda bersama kami.

CTA:

[Lihat Koleksi]

[Chat WhatsApp]
60. FOOTER
SUMBER EMAS REZEKI

Toko Emas & Perhiasan

Keindahan Emas untuk Setiap Momen Berharga.

Menu:

Koleksi
Harga Emas
Kalkulator
Ukuran Cincin
Buyback
Wedding
Tentang
Lokasi
Kontak

Categories:

Cincin
Kalung
Gelang
Anting
Wedding

Contact:

WhatsApp
Instagram
Email
Alamat
Jam Operasional

Copyright:

© 2026 Sumber Emas Rezeki.
All rights reserved.
61. ANIMATION

Gunakan animasi premium dan subtle.

Contoh:

hero image reveal
fade up
stagger card
image zoom
line reveal
gold accent animation
section reveal
smooth modal
wishlist heart animation
button hover

Jangan:

bouncing berlebihan
glitter berlebihan
marquee cepat
animation random

Gunakan:

@media (prefers-reduced-motion: reduce)
62. IMAGE STYLE

Product image:

background clean
ivory
white
beige
close-up
high detail
consistent ratio

Gunakan aspect ratio:

4:5

atau:

1:1

secara konsisten.

63. IMAGE STRUCTURE
public/images/
├── hero/
├── products/
│   ├── rings/
│   ├── necklaces/
│   ├── bracelets/
│   ├── earrings/
│   ├── wedding/
│   └── gold-bars/
│
├── gallery/
├── store/
└── general/
64. PLACEHOLDER IMAGE

Jika foto produk belum tersedia:

gunakan placeholder yang terlihat profesional.

Jangan menggunakan broken image.

Asset harus mudah diganti nanti.

65. RESPONSIVE DESIGN

Test:

360px
390px
768px
1024px
1280px
1440px

Mobile:

hamburger
search accessible
product grid 2 columns jika memungkinkan
detail product 1 column
filter drawer
image swipe
sticky product CTA
no horizontal scroll

Tablet:

2–3 product columns

Desktop:

4 product columns
sidebar filter
gallery + product info 2 columns
large editorial hero
66. MOBILE PRODUCT CTA

Pada product detail mobile:

sticky bottom bar:

♡ Wishlist

[Chat Produk]

Pastikan tidak menutup content.

67. SEO

Gunakan:

useSeoMeta()

Homepage:

Sumber Emas Rezeki | Toko Emas & Perhiasan

Description:

Temukan koleksi cincin, kalung, gelang, anting dan perhiasan emas pilihan di Sumber Emas Rezeki.

Collections:

Koleksi Perhiasan Emas | Sumber Emas Rezeki

Gold Price:

Harga Emas Hari Ini | Sumber Emas Rezeki

Rings:

Koleksi Cincin Emas | Sumber Emas Rezeki

Wedding:

Cincin Pernikahan & Wedding Ring | Sumber Emas Rezeki

Buyback:

Informasi Buyback Emas | Sumber Emas Rezeki
68. SEO KEYWORDS

Gunakan natural:

toko emas
perhiasan emas
cincin emas
kalung emas
gelang emas
anting emas
harga emas
wedding ring
cincin nikah
buyback emas
toko perhiasan

Keyword lokasi hanya ditambahkan jika lokasi toko asli sudah diketahui.

69. OPEN GRAPH

Tambahkan:

og:title
og:description
og:image
og:type

Gunakan hero image sebagai default share image.

70. ACCESSIBILITY

Pastikan:

semua gambar memiliki alt
button semantic
focus state
label form
keyboard navigation
contrast cukup
modal dapat ditutup keyboard
wishlist button punya aria-label
71. PERFORMANCE

Gunakan:

lazy images
local data
computed filter
reusable components
minimal dependencies
CSS transitions
optimized asset

Jangan memasang library berat jika tidak dibutuhkan.

72. PRODUCT FILTER LOGIC

Gunakan:

const selectedCategories = ref<string[]>([])
const selectedKarats = ref<string[]>([])
const selectedGenders = ref<string[]>([])
const priceRange = ref<[number, number]>([0, 50000000])

Filtered products:

const filteredProducts = computed(() => {
  return products.filter((product) => {
    // apply search + filters
    return true
  })
})

Implementasikan filter secara benar.

73. WISHLIST STATE

Buat composable:

composables/useWishlist.ts

Functions:

addWishlist
removeWishlist
toggleWishlist
isWishlisted
wishlistCount

Persist menggunakan localStorage.

Harus aman saat SSR.

74. REQUIRED FEATURES

Wajib selesai:

Homepage
Premium Responsive Navbar
Mega Menu
Hero
Category Section
Product Catalogue
Product Search
Advanced Product Filter
Sorting
Dynamic Product Detail
Product Gallery
Product Variants
Wishlist
Gold Price Page
Gold Calculator
Ring Size Guide
Ring Size Calculator
Buyback Page
Buyback Estimator
Wedding Collection
Gallery
Store Location
About
FAQ
Contact
WhatsApp Inquiry
Floating WhatsApp
SEO
Responsive Design
Animations
Reduced Motion Support
75. DO NOT BUILD

Jangan membuat:

Login
Register
Database
Firebase
Supabase
Admin Panel
Payment Gateway
Online Payment
Checkout
Order Database
Inventory Database
Customer Account
Live Gold API
Real Buyback API
Realtime Stock
76. FUTURE DEVELOPMENT

Code structure harus memungkinkan fitur berikut ditambahkan nanti:

Live Gold Price API
Inventory Management
Admin Dashboard
Customer Login
Online Order
Checkout
Payment Gateway
Purchase History
Digital Certificate
Product Review
Store Pickup
Reservation
Real Buyback System

Jangan implementasikan sekarang.

77. HOMEPAGE FINAL STRUCTURE
NAVBAR

↓

SUMBER EMAS REZEKI

KEINDAHAN YANG
BERTAHAN SEPANJANG WAKTU.

Temukan koleksi perhiasan emas pilihan
untuk setiap momen berharga.

[Lihat Koleksi]
[Cek Harga Emas]

↓

KOLEKSI TERBARU

↓

BELANJA BERDASARKAN KATEGORI

Cincin
Kalung
Gelang
Anting
Wedding
Pria

↓

HARGA EMAS HARI INI

24K
22K
18K
14K

[Lihat Harga]

↓

KOLEKSI FAVORIT

↓

WEDDING COLLECTION

A Symbol of Forever.

↓

KALKULATOR EMAS

↓

KENAPA SUMBER EMAS REZEKI

↓

BUYBACK & TUKAR TAMBAH

↓

GALERI

↓

TESTIMONIAL

↓

LOKASI TOKO

↓

FAQ

↓

TEMUKAN PERHIASAN UNTUK
MOMEN BERHARGA ANDA.

[Lihat Koleksi]
[Chat WhatsApp]

↓

FOOTER
78. PRIORITY IMPLEMENTATION
P0

Kerjakan:

Navbar
Homepage
Products
Categories
Product Detail
Search
Filter
WhatsApp
Responsive
P1
Wishlist
Gold Prices
Gold Calculator
Ring Size
Buyback
Wedding
P2
Gallery
Location
FAQ
About
Animations
SEO
UI Polishing
79. ACCEPTANCE CRITERIA

Website selesai jika:

seluruh route dapat dibuka
homepage selesai
UI terlihat luxury dan modern
product data tampil
search bekerja
filter bekerja
sorting bekerja
category routes bekerja
dynamic product routes bekerja
product variants bekerja
wishlist bekerja
wishlist persist setelah refresh
gold prices tampil
gold calculator bekerja
buyback estimator bekerja
ring size calculator bekerja
WhatsApp inquiry bekerja
mobile navigation bekerja
mega menu bekerja
responsive seluruh breakpoint
tidak ada horizontal scroll
tidak ada broken image
tidak ada NaN
tidak ada undefined di UI
tidak ada TypeScript error
tidak ada Vue warning penting
npm run build berhasil
80. CONTENT RULES

Jangan membuat data palsu seperti:

jumlah customer
rating Google
jumlah cabang
tahun pengalaman
sertifikasi
jumlah transaksi
harga emas realtime

Jika data belum tersedia:

gunakan placeholder yang mudah diganti.

Semua harga produk adalah data demo sampai data produk asli dimasukkan.

81. CODE QUALITY

Gunakan:

TypeScript
interface
reusable components
local data
composable
clear naming

Gunakan:

ref()
computed()
props
emits

Hindari:

any

jika tidak diperlukan.

Jangan membuat semua website hanya di:

pages/index.vue

Pisahkan component sesuai struktur.

82. FINAL OUTPUT

Website final harus menjadi:

SUMBER EMAS REZEKI
Toko Emas & Perhiasan

Tagline:

Keindahan Emas untuk Setiap Momen Berharga.

Website harus membuat pengunjung langsung memahami:

produk apa yang dijual
koleksi apa yang tersedia
kadar emas
berat produk
harga produk
harga emas
ukuran cincin
informasi buyback
lokasi toko
cara menghubungi toko
cara menanyakan produk

Karakter website:

Elegant
Premium
Modern
Luxury
Clean
Professional
Trustworthy
Responsive
Business Ready
83. INSTRUKSI FINAL UNTUK CODEX

Baca file PRD.md sampai selesai sebelum mulai implementasi.

Implementasikan seluruh website SUMBER EMAS REZEKI sesuai requirement dalam PRD.

Kerjakan langsung pada source code project.

Jangan hanya memberikan contoh kode.

Jangan hanya memberikan tutorial.

Jangan berhenti setelah homepage.

Gunakan:

Nuxt 3
Vue 3
TypeScript
Tailwind CSS

Implementasikan:

homepage
premium navbar
mega menu
product catalogue
categories
search
advanced filter
sorting
dynamic product pages
gallery
product variants
wishlist
gold price page
gold calculator
ring size guide
ring size calculator
buyback estimator
wedding collection
gallery
store location
about
FAQ
contact
WhatsApp integration
responsive design
SEO
animations

Jangan membuat:

backend
Firebase
database
login
register
admin dashboard
payment gateway
checkout
live gold price API

Gunakan local TypeScript data.

Harga emas harus diberi keterangan bahwa merupakan data demo jika belum menggunakan data asli.

Jangan membuat klaim palsu mengenai toko.

Jika foto produk belum tersedia:

gunakan placeholder profesional yang mudah diganti.

Jika nomor WhatsApp, alamat, email, Google Maps atau Instagram belum tersedia:

gunakan placeholder terpusat di site config.

Setelah selesai:

Jalankan aplikasi.
Periksa browser console.
Test seluruh route.
Test mobile navbar.
Test mega menu.
Test product search.
Test product filter.
Test sorting.
Test product variants.
Test wishlist.
Test gold calculator.
Test buyback calculator.
Test ring size calculator.
Test WhatsApp.
Test responsive.
Jalankan npm run build.
Perbaiki seluruh error sampai build berhasil.

Terakhir berikan ringkasan:

file yang dibuat
file yang diubah
pages yang selesai
components yang dibuat
fitur yang selesai
hasil npm run build
placeholder image
placeholder contact
data produk yang masih dummy
data harga emas yang masih dummy