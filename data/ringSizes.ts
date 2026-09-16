export const ringSizes = Array.from({ length: 17 }, (_, index) => ({
  size: index + 6,
  diameter: Number((14.5 + index / 3).toFixed(1)),
  circumference: Number(((14.5 + index / 3) * Math.PI).toFixed(1)),
}))
export const ringSizeNotice =
  'Ukuran dapat berbeda tergantung standar yang digunakan toko. Konfirmasikan kembali kepada admin sebelum membeli.'
