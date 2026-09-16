export interface Product {
  id: number
  slug: string
  name: string
  category: 'Cincin' | 'Kalung' | 'Gelang' | 'Anting' | 'Liontin' | 'Wedding' | 'Gold Bar'
  gender: 'Wanita' | 'Pria' | 'Unisex'
  karat: '24K' | '22K' | '18K' | '14K'
  purityPercentage: number
  weight: number
  price: number
  originalPrice?: number
  workmanshipFee?: number
  description: string
  specifications: { label: string; value: string }[]
  sizes?: string[]
  colors?: string[]
  images: string[]
  stockStatus: 'Tersedia' | 'Terbatas' | 'Pre Order' | 'Habis'
  featured?: boolean
  bestSeller?: boolean
  newArrival?: boolean
  collection: string
}
const photos = {
  Cincin: '/images/products/rings/ring.jpg',
  Kalung: '/images/products/necklaces/necklace.jpg',
  Gelang: '/images/products/bracelets/bracelet.jpg',
  Anting: '/images/products/earrings/earrings.jpg',
  Liontin: '/images/products/necklaces/necklace.jpg',
  Wedding: '/images/products/rings/ring.jpg',
  'Gold Bar': '/images/hero/jewelry.jpg',
}
type Seed = [
  string,
  Product['category'],
  Product['karat'],
  number,
  number,
  Product['gender'],
  string,
]
const seeds: Seed[] = [
  ['Cincin Aurora 18K', 'Cincin', '18K', 3.8, 4850000, 'Wanita', 'Everyday Elegance'],
  ['Kalung Celestia 22K', 'Kalung', '22K', 5.2, 7800000, 'Wanita', 'Everyday Elegance'],
  ['Gelang Lumière 18K', 'Gelang', '18K', 6.4, 7350000, 'Wanita', 'Everyday Elegance'],
  ['Anting Étoile 18K', 'Anting', '18K', 2.1, 2850000, 'Wanita', 'Everyday Elegance'],
  ['Cincin Couple Harmony', 'Wedding', '18K', 7.5, 9250000, 'Unisex', 'Couple Ring'],
  ['Wedding Ring Classic', 'Wedding', '22K', 4.5, 6650000, 'Unisex', 'Wedding Ring'],
  ['Cincin Solitaire Amour', 'Wedding', '18K', 3.2, 5250000, 'Wanita', 'Engagement Ring'],
  ['Kalung Bridal Serenade', 'Wedding', '22K', 12.2, 18250000, 'Wanita', 'Bridal Jewelry'],
  ['Gelang Atlas Pria', 'Gelang', '22K', 15.2, 22000000, 'Pria', 'Men’s Collection'],
  ['Cincin Signet Noble', 'Cincin', '18K', 6.8, 7900000, 'Pria', 'Men’s Collection'],
  ['Liontin Luna 24K', 'Liontin', '24K', 1.8, 3150000, 'Wanita', 'Pendant Necklace'],
  ['Anting Mini Flora 14K', 'Anting', '14K', 1.2, 1450000, 'Wanita', 'Anting Anak'],
  ['Kalung Petite 14K', 'Kalung', '14K', 1.6, 1850000, 'Wanita', 'Kalung Anak'],
  ['Gelang Little Joy 14K', 'Gelang', '14K', 2.4, 2450000, 'Unisex', 'Gelang Anak'],
  ['Anting Hoop Elara 22K', 'Anting', '22K', 3.6, 5350000, 'Wanita', 'Hoop'],
  ['Cincin Rosée 18K', 'Cincin', '18K', 2.8, 3650000, 'Wanita', 'Women’s Collection'],
]
export const products: Product[] = seeds.map(
  ([name, category, karat, weight, price, gender, collection], index) => ({
    id: index + 1,
    slug: name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-'),
    name,
    category,
    gender,
    karat,
    weight,
    price,
    collection,
    purityPercentage: { '24K': 99.9, '22K': 91.6, '18K': 75, '14K': 58.5 }[karat],
    workmanshipFee: 500000,
    description: `${name} memadukan detail yang lembut dengan siluet yang tak lekang oleh waktu. Pilihan perhiasan untuk menemani keseharian maupun menjadi hadiah pada momen istimewa. Foto merupakan ilustrasi; detail dan harga akhir dikonfirmasi melalui toko.`,
    specifications: [
      { label: 'Material', value: 'Emas' },
      { label: 'Koleksi', value: collection },
      { label: 'Informasi batu', value: 'Konfirmasikan detail kepada admin' },
    ],
    sizes:
      category === 'Cincin' || (category === 'Wedding' && index !== 7)
        ? ['10', '11', '12', '13', '14', '15']
        : category === 'Kalung'
          ? ['40 cm', '45 cm', '50 cm']
          : category === 'Gelang'
            ? ['16 cm', '18 cm', '20 cm']
            : undefined,
    colors: ['Yellow Gold', 'Rose Gold', 'White Gold'],
    images: [photos[category], '/images/hero/jewelry.jpg'],
    stockStatus:
      index === 12
        ? 'Habis'
        : index === 6
          ? 'Pre Order'
          : index % 5 === 4
            ? 'Terbatas'
            : 'Tersedia',
    newArrival: index < 4 || index === 15,
    bestSeller: [0, 4, 10, 14].includes(index),
    featured: index < 4,
  }),
)
export const matchesSearch = (product: Product, query: string) =>
  `${product.name} ${product.category} ${product.karat} ${product.collection} ${product.gender}`
    .toLocaleLowerCase('id')
    .includes(query.trim().toLocaleLowerCase('id'))
