export const usePageSeo = (
  title: string,
  description = 'Temukan koleksi cincin, kalung, gelang, anting dan perhiasan emas pilihan di Sumber Emas Rezeki.',
) => {
  useSeoMeta({
    title: `${title} | Sumber Emas Rezeki`,
    description,
    ogTitle: `${title} | Sumber Emas Rezeki`,
    ogDescription: description,
    ogImage: '/images/hero/jewelry.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })
}
