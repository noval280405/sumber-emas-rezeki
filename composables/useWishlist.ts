export const useWishlist = () => {
  const ids = useState<number[]>('wishlist', () => [])
  const loaded = useState('wishlist-loaded', () => false)
  onMounted(() => {
    if (loaded.value) return
    try {
      const saved: unknown = JSON.parse(localStorage.getItem('ser-wishlist') || '[]')
      if (Array.isArray(saved))
        ids.value = saved.filter(
          (id): id is number => typeof id === 'number' && Number.isInteger(id),
        )
    } catch {
      ids.value = []
    }
    loaded.value = true
  })
  const save = () => {
    if (import.meta.client) {
      try {
        localStorage.setItem('ser-wishlist', JSON.stringify(ids.value))
      } catch {
        /* Browsers may disable storage. Keep session state. */
      }
    }
  }
  const addWishlist = (id: number) => {
    if (!ids.value.includes(id)) {
      ids.value = [...ids.value, id]
      save()
    }
  }
  const removeWishlist = (id: number) => {
    ids.value = ids.value.filter((item) => item !== id)
    save()
  }
  const isWishlisted = (id: number) => ids.value.includes(id)
  const toggleWishlist = (id: number) => (isWishlisted(id) ? removeWishlist(id) : addWishlist(id))
  return {
    ids,
    addWishlist,
    removeWishlist,
    toggleWishlist,
    isWishlisted,
    wishlistCount: computed(() => ids.value.length),
  }
}
