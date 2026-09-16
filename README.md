# Sumber Emas Rezeki

Website katalog toko emas dan perhiasan berbasis **Nuxt 3, Vue 3, TypeScript, dan Tailwind CSS 4**. Spesifikasi lengkap tersedia di [PRD.md](PRD.md).

## Menjalankan project

```bash
npm install
npm run dev
```

## Pemeriksaan dan build

```bash
npm run typecheck
npm run build
npm run test:e2e
```

Pengujian Playwright menjalankan server hasil build secara otomatis, atau menggunakan preview yang sudah berjalan di port 3000. Jika Chromium belum tersedia, jalankan `npx playwright install chromium`. Untuk preview manual:

```bash
npm run preview
```

`npm run format` merapikan source code; `npm run format:check` memeriksa format.

## Halaman dan fitur

- Beranda dengan seluruh 14 bagian konten sesuai urutan PRD, navbar sticky, mega menu, pencarian modal, dan floating WhatsApp.
- `/koleksi`: pencarian nama/kategori/kadar/koleksi, filter kategori, kadar, harga, berat, gender, warna, ketersediaan, enam pilihan sorting, serta filter drawer mobile.
- `/kategori/[slug]`: cincin, kalung, gelang, anting, wedding, pria, liontin, wanita.
- `/produk/[slug]`: 16 produk demo, gallery dan zoom, swipe mobile, varian ukuran/warna dengan estimasi harga computed, spesifikasi, panduan/perawatan/buyback, wishlist, dan pesan WhatsApp sesuai varian.
- `/wishlist`: tambah/hapus koleksi, counter, empty state, localStorage yang aman untuk SSR dan kondisi storage dinonaktifkan.
- `/harga-emas`: harga lokal empat kadar, harga buyback, waktu pembaruan manual, dan keterangan demo.
- `/kalkulator`: nilai emas + biaya pembuatan + biaya tambahan, input harga manual, validasi angka, dan konsultasi estimasi.
- `/buyback`: simulasi empat kondisi barang, harga buyback per kadar, validasi berat, dan tahapan konsultasi toko.
- `/ukuran-cincin`: cara ukur, tabel contoh, kalkulator diameter/keliling, tips, dan keterangan standar non-universal.
- `/wedding`: editorial hero, koleksi His & Hers, serta filter Wedding Ring/Couple Ring/Engagement Ring/Bridal Jewelry.
- `/galeri`: filter kategori, masonry, dan lightbox dengan keyboard.
- `/tentang`, `/faq`, `/kontak`, `/lokasi`: informasi usaha, FAQ accordion, form pembuat pesan WhatsApp, dan placeholder lokasi.
- SEO dan Open Graph setiap halaman, 404, alt gambar, focus state, focus trap modal, navigasi keyboard, serta reduced motion.

Tidak ada backend bisnis, database, login, pembayaran, checkout, live price API, atau pengiriman form ke server. Server Nitro adalah renderer Nuxt dan penyaji aset. WhatsApp baru mengirim pesan setelah pengunjung meninjaunya di WhatsApp.

## Struktur source

| Folder / file                                        | Isi                                                         |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| `pages/`                                             | 15 file halaman, termasuk dua route dinamis                 |
| `components/layout/`                                 | Navbar, mega menu, footer                                   |
| `components/home/`                                   | Bagian homepage yang terpisah                               |
| `components/product/`                                | Katalog, filter, search, card, detail, varian, dan wishlist |
| `components/gold/`, `ring/`                          | Harga dan kalkulator                                        |
| `components/wedding/`, `gallery/`, `contact/`, `ui/` | Komponen editorial dan antarmuka reusable                   |
| `data/`                                              | Konfigurasi toko dan seluruh data demo TypeScript           |
| `composables/`                                       | State wishlist, SEO, dan aksesibilitas modal                |
| `assets/css/main.css`                                | Tailwind, token visual, layout, responsive, dan animasi     |
| `public/images/`                                     | Foto ilustrasi lokal yang mudah diganti                     |
| `tests/website.spec.ts`                              | Pengujian route, browser, interaksi, dan enam breakpoint    |

## Data yang harus diganti sebelum digunakan toko

1. **Kontak:** ubah `data/site.ts` untuk WhatsApp, email, Instagram, alamat, maps URL, jam buka, dan `contactIsPlaceholder`. Seluruh tautan kontak mengambil data dari file ini. Jangan gunakan nomor contoh untuk operasional. Sesuaikan pula keterangan placeholder pada komponen kontak/lokasi setelah data asli tersedia.
2. **Produk:** ubah `data/products.ts`. Semua 16 nama, kadar, berat, harga, fee, varian, stok, dan label koleksi merupakan contoh. Harga varian demo bertambah Rp50.000 per langkah ukuran, Rp100.000 untuk Rose Gold, dan Rp150.000 untuk White Gold; logikanya ada di `components/product/ProductInfo.vue`.
3. **Harga emas:** ubah `data/goldPrices.ts`. Tanggal 16 September 2026 adalah tanggal snapshot demo, bukan tanggal pembaruan otomatis atau harga pasar terverifikasi.
4. **Buyback:** ubah `data/buyback.ts`. Potongan kondisi 0%, 3%, 7%, dan 5% merupakan simulasi, bukan kebijakan toko. Nilai final selalu memerlukan pemeriksaan toko.
5. **Ukuran cincin:** sesuaikan `data/ringSizes.ts` dengan tabel ukuran yang digunakan toko. Data contoh memetakan diameter 16,5 mm ke ukuran 12.
6. **Testimoni dan profil:** testimoni pada `data/testimonials.ts` ditandai `isDemo: true`. Riwayat usaha, rating, sertifikasi, dan klaim lain tidak dibuat-buat.
7. **Foto:** ganti berkas di `public/images/` atau referensinya pada data produk/kategori/galeri. Foto saat ini adalah ilustrasi, bukan barang atau lokasi toko yang sebenarnya. Foto bisa digunakan berulang untuk beberapa produk demo.
8. **Share image:** setelah domain final tersedia, gunakan URL gambar absolut yang sesuai domain pada metadata Open Graph.

Google Maps sengaja ditampilkan sebagai placeholder dan tombol dinonaktifkan selama `mapsUrl` bernilai `#`. Website tidak menebak lokasi toko.

## Foto ilustrasi

Foto disimpan lokal, sehingga gambar tidak membutuhkan permintaan ke penyedia foto saat website dibuka. Sumber foto Unsplash:

| Aset                              | Sumber                                                       |
| --------------------------------- | ------------------------------------------------------------ |
| Hero dan anting                   | https://images.unsplash.com/photo-1617038220319-276d3cfab638 |
| Cincin                            | https://images.unsplash.com/photo-1605100804763-247f67b3557e |
| Kalung dan liontin                | https://images.unsplash.com/photo-1599643477877-530eb83abc8e |
| Ilustrasi gaya perhiasan / gelang | https://images.unsplash.com/photo-1611652022419-a9419f74343d |
| Suasana wedding                   | https://images.unsplash.com/photo-1523438885200-e635ba2c371e |

Font Cormorant Garamond dan Plus Jakarta Sans dimuat melalui Google Fonts; tersedia fallback Georgia dan Arial jika koneksi font tidak tersedia.

## Hasil verifikasi implementasi

- `npm run build`: berhasil (exit code 0).
- `npm run typecheck`: berhasil tanpa error TypeScript.
- `npm run format:check`: berhasil.
- 11 skenario Playwright tervalidasi. Suite awal terakhir meluluskan 10 skenario; selector pesan validasi kalkulator diperbaiki dan skenario tersisa lulus melalui `npx playwright test --last-failed`.
- Semua 37 URL halaman/kategori/produk dapat dibuka, memiliki SEO, dan tidak memunculkan gambar rusak, `NaN`, `undefined`, error JavaScript, atau warning Vue/hydration penting.
- Pemeriksaan layout pada lebar 360, 390, 768, 1024, 1280, dan 1440 px tidak menemukan overflow horizontal.
- Pencarian, seluruh filter/sorting, varian harga dan pesan WhatsApp, persistensi wishlist, kalkulator emas/buyback/ukuran, galeri, form kontak, navigasi mobile, mega menu, serta 404 sudah diuji.
- Tautan WhatsApp diperiksa isinya tanpa mengirim pesan ke nomor contoh.
