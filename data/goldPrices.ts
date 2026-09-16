export interface GoldPrice {
  karat: string
  purity: number
  pricePerGram: number
  buybackPerGram?: number
  updatedAt: string
}
export const goldPrices: GoldPrice[] = [
  {
    karat: '24K',
    purity: 99.9,
    pricePerGram: 1500000,
    buybackPerGram: 1350000,
    updatedAt: '16 September 2026',
  },
  {
    karat: '22K',
    purity: 91.6,
    pricePerGram: 1375000,
    buybackPerGram: 1237500,
    updatedAt: '16 September 2026',
  },
  {
    karat: '18K',
    purity: 75,
    pricePerGram: 950000,
    buybackPerGram: 855000,
    updatedAt: '16 September 2026',
  },
  {
    karat: '14K',
    purity: 58.5,
    pricePerGram: 780000,
    buybackPerGram: 702000,
    updatedAt: '16 September 2026',
  },
]
export const calculatorDisclaimer =
  'Hasil kalkulator hanya merupakan estimasi dan bukan harga transaksi final. Harga dapat berbeda berdasarkan berat aktual, kadar, desain, batu, biaya produksi dan kebijakan toko.'
