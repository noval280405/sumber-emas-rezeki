import { test, expect, type Page } from '@playwright/test'
import { products } from '../data/products'
import { categories } from '../data/categories'
const staticRoutes = [
  '/',
  '/koleksi',
  '/harga-emas',
  '/kalkulator',
  '/ukuran-cincin',
  '/wishlist',
  '/buyback',
  '/wedding',
  '/galeri',
  '/tentang',
  '/faq',
  '/kontak',
  '/lokasi',
]
const routes = [
  ...staticRoutes,
  ...categories.map((c) => `/kategori/${c.slug}`),
  ...products.map((p) => `/produk/${p.slug}`),
]
const open = async (page: Page, path: string) => {
  await page.goto(path)
  await page.locator('h1').waitFor()
  await page.waitForFunction(() => !!document.querySelector('#__nuxt')?.hasChildNodes())
}
test('all 37 routes render with SEO, no broken images or browser errors', async ({ page }) => {
  test.setTimeout(120000)
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (
      message.type() === 'error' ||
      (message.type() === 'warning' && /Vue|hydration/.test(message.text()))
    )
      errors.push(message.text())
  })
  for (const path of routes) {
    const response = await page.goto(path, { waitUntil: 'networkidle' })
    expect(response?.status(), path).toBe(200)
    await expect(page.locator('h1'), path).toHaveCount(1)
    expect(await page.title()).toContain('Sumber Emas Rezeki')
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /images/)
    const bad = await page.locator('img').evaluateAll(async (elements) => {
      const images = elements as HTMLImageElement[]
      await Promise.all(
        images.map((img) => {
          img.loading = 'eager'
          return img.decode().catch(() => undefined)
        }),
      )
      return images.filter((img) => !img.naturalWidth || !img.alt).map((img) => img.src)
    })
    expect(bad, path).toEqual([])
    expect(await page.locator('body').innerText(), path).not.toMatch(/NaN|undefined/)
  }
  expect(errors).toEqual([])
})
test('responsive layouts at all six required widths have no horizontal overflow', async ({
  page,
}) => {
  test.setTimeout(120000)
  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of staticRoutes.concat('/produk/cincin-aurora-18k', '/kategori/cincin')) {
      await open(page, path)
      const sizes = await page.evaluate(() => ({
        document: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
      }))
      expect(sizes.document, `${path} at ${width}`).toBeLessThanOrEqual(sizes.viewport)
    }
  }
  await open(page, '/')
  await page.screenshot({ path: '/tmp/ser-desktop.png', fullPage: true })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.screenshot({ path: '/tmp/ser-mobile.png', fullPage: true })
})
test('mega menu, search modal, keyboard close, and category navigation', async ({ page }) => {
  await open(page, '/')
  await page.getByRole('button', { name: 'Buka mega menu koleksi' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.mega-menu')).toBeVisible()
  await page.locator('.mega-menu').getByRole('link', { name: 'Emas 18K', exact: true }).click()
  await expect(page).toHaveURL(/karat=18K/)
  await expect(page.locator('.product-card')).toHaveCount(7)
  await page.getByRole('button', { name: 'Cari produk', exact: true }).click()
  await page.getByRole('textbox', { name: 'Cari produk', exact: true }).fill('aurora')
  await expect(page.locator('.search-result')).toHaveCount(1)
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.getByRole('button', { name: 'Cari produk', exact: true }).click()
  await page.getByRole('textbox', { name: 'Cari produk', exact: true }).fill('Wedding Ring')
  await expect(page.locator('.search-result')).toHaveCount(1)
  await page.locator('.search-result').click()
  await expect(page.locator('h1')).toHaveText('Wedding Ring Classic')
})
test('catalogue search, all filter types, reset, and all sorts', async ({ page }) => {
  await open(page, '/koleksi')
  const cards = page.locator('.product-card')
  const filter = page.locator('.desktop-filters')
  await expect(cards).toHaveCount(16)
  await page.getByRole('textbox', { name: 'Cari koleksi' }).fill('aurora')
  await expect(cards).toHaveCount(1)
  await page.getByRole('textbox', { name: 'Cari koleksi' }).fill('xyz-not-found')
  await expect(cards).toHaveCount(0)
  await filter.getByRole('button', { name: 'Reset', exact: true }).click()
  await filter.getByLabel('Cincin', { exact: true }).check()
  await expect(cards).toHaveCount(3)
  await filter.getByLabel('18K', { exact: true }).check()
  await expect(cards).toHaveCount(3)
  await filter.getByLabel('Harga', { exact: true }).selectOption('2000000-5000000')
  await expect(cards).toHaveCount(2)
  await filter.getByRole('button', { name: 'Filter lainnya' }).click()
  await filter.getByLabel('Berat', { exact: true }).selectOption('2-5')
  await expect(cards).toHaveCount(2)
  await filter.getByLabel('Gender', { exact: true }).selectOption('Wanita')
  await expect(cards).toHaveCount(2)
  await filter.getByLabel('Warna Emas', { exact: true }).selectOption('Rose Gold')
  await expect(cards).toHaveCount(2)
  await filter.getByLabel('Availability', { exact: true }).selectOption('Tersedia')
  await expect(cards).toHaveCount(2)
  await filter.getByRole('button', { name: 'Reset', exact: true }).click()
  await expect(cards).toHaveCount(16)
  for (const [sort, expected] of [
    ['price-asc', 'Anting Mini Flora 14K'],
    ['price-desc', 'Gelang Atlas Pria'],
    ['weight-asc', 'Anting Mini Flora 14K'],
    ['weight-desc', 'Gelang Atlas Pria'],
    ['new', 'Cincin Rosée 18K'],
  ]) {
    await page.getByLabel('Urutkan produk').selectOption(sort!)
    await expect(cards.first().locator('h3')).toHaveText(expected!)
  }
  await page.getByLabel('Urutkan produk').selectOption('best')
  await expect(cards.first().locator('h3')).toHaveText('Cincin Aurora 18K')
})
test('product variants update price and encoded WhatsApp inquiry, tabs and gallery', async ({
  page,
}) => {
  await open(page, '/produk/cincin-aurora-18k')
  await expect(page.getByTestId('variant-price')).toContainText('4.850.000')
  await page.getByRole('button', { name: '12', exact: true }).click()
  await page.getByRole('button', { name: 'Rose Gold', exact: true }).click()
  await expect(page.getByTestId('variant-price')).toContainText('5.050.000')
  const href = await page
    .getByRole('link', { name: 'Pesan via WhatsApp', exact: true })
    .getAttribute('href')
  const text = new URL(href!).searchParams.get('text')!
  for (const value of [
    'Cincin Aurora 18K',
    '18K / 75%',
    '3.8 gram',
    'Ukuran: 12',
    'Rose Gold',
    '5.050.000',
  ])
    expect(text).toContain(value)
  for (const name of [
    'Spesifikasi',
    'Panduan Ukuran',
    'Perawatan',
    'Buyback',
    'Informasi Produk',
    'Deskripsi',
  ]) {
    await page.getByRole('tab', { name, exact: true }).click()
    await expect(page.getByRole('tabpanel')).not.toBeEmpty()
  }
  await page.getByRole('button', { name: 'Tampilkan foto 2' }).click()
  await expect(page.locator('.gallery-main img')).toHaveAttribute('src', '/images/hero/jewelry.jpg')
  await page.getByRole('button', { name: 'Perbesar foto produk' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})
test('wishlist persists on refresh and can be removed', async ({ page }) => {
  await open(page, '/produk/cincin-aurora-18k')
  await page.locator('.product-info > .wishlist-button').click()
  await page.goto('/wishlist')
  await expect(page.locator('.product-card')).toHaveCount(1)
  await page.reload()
  await expect(page.locator('.product-card')).toHaveCount(1)
  await page.getByRole('button', { name: 'Hapus dari wishlist', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Wishlist masih kosong.' })).toBeVisible()
})
test('gold calculator validates inputs and computes expected totals', async ({ page }) => {
  await open(page, '/kalkulator')
  await expect(page.getByTestId('gold-total')).toContainText('4.490.000')
  await page.getByLabel('Biaya Tambahan (Rp)', { exact: true }).fill('100000')
  await expect(page.getByTestId('gold-total')).toContainText('4.590.000')
  await page.getByLabel('Kadar Emas', { exact: true }).selectOption('24K')
  await expect(page.getByLabel('Harga Emas / Gram (Rp)')).toHaveValue('1500000')
  await expect(page.getByTestId('gold-total')).toContainText('6.900.000')
  await page.getByLabel('Berat (gram)', { exact: true }).fill('-3')
  await expect(page.getByTestId('gold-total')).toHaveText('—')
  await expect(page.locator('.calculator-inputs').getByRole('alert')).toBeVisible()
  await page.getByLabel('Berat (gram)', { exact: true }).fill('')
  await expect(page.getByTestId('gold-total')).toHaveText('—')
})
test('buyback and ring calculators use demo rates and reject invalid inputs', async ({ page }) => {
  await open(page, '/buyback')
  await expect(page.getByTestId('buyback-total')).toContainText('4.275.000')
  await page.getByLabel('Kondisi', { exact: true }).selectOption('Rusak')
  await expect(page.getByTestId('buyback-total')).toContainText('3.975.750')
  await page.getByLabel('Berat (gram)', { exact: true }).fill('0')
  await expect(page.getByTestId('buyback-total')).toHaveText('—')
  await open(page, '/ukuran-cincin')
  await expect(page.getByTestId('ring-result')).toHaveText('Size 12')
  await page.getByLabel('Metode Pengukuran').selectOption('circumference')
  await expect(page.getByTestId('ring-result')).toHaveText('Size 12')
  await page.getByLabel('Keliling (mm)', { exact: true }).fill('999')
  await expect(page.getByTestId('ring-result')).toHaveText('—')
})
test('gallery filtering and lightbox, contact generates WhatsApp without sending', async ({
  page,
}) => {
  await open(page, '/galeri')
  await page
    .locator('.gallery-filters')
    .getByRole('button', { name: 'Anting', exact: true })
    .click()
  await expect(page.locator('.masonry > button')).toHaveCount(1)
  await page.locator('.masonry > button').click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await open(page, '/kontak')
  await page.getByLabel('Nama', { exact: true }).fill('Tes Pengunjung')
  await page.getByLabel('Nomor WhatsApp', { exact: true }).fill('081234567890')
  await page.getByLabel('Email (opsional)').fill('demo@example.com')
  await page
    .getByLabel('Pesan', { exact: true })
    .fill('Ingin bertanya mengenai cincin & ukuran 12.')
  await page.getByRole('button', { name: 'Siapkan Pesan WhatsApp' }).click()
  const href = await page.getByRole('link', { name: 'Lanjut ke WhatsApp' }).getAttribute('href')
  expect(new URL(href!).searchParams.get('text')).toContain('cincin & ukuran 12.')
  await open(page, '/lokasi')
  await expect(page.getByRole('button', { name: /Buka di Google Maps/ })).toBeDisabled()
})
test('mobile navigation, filter drawer, and product sticky bar', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 })
  await open(page, '/')
  await page.getByRole('button', { name: 'Buka menu navigasi' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByRole('dialog').getByRole('link', { name: 'Koleksi', exact: true }).click()
  await expect(page).toHaveURL(/koleksi/)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.getByRole('button', { name: 'Filter', exact: true }).click()
  await page.getByRole('dialog').getByLabel('Cincin', { exact: true }).check()
  await page.getByRole('button', { name: 'Lihat 3 produk' }).click()
  await expect(page.locator('.product-card')).toHaveCount(3)
  await open(page, '/produk/cincin-aurora-18k')
  await expect(page.locator('.mobile-product-cta')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Chat Produk', exact: true })).toBeVisible()
})
test('unknown categories and products return 404', async ({ page }) => {
  for (const path of ['/produk/does-not-exist', '/kategori/does-not-exist']) {
    const response = await page.goto(path)
    expect(response?.status()).toBe(404)
    await expect(page.getByRole('heading', { name: 'Halaman belum ditemukan.' })).toBeVisible()
  }
})
