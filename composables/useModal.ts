export const useModal = (open: Ref<boolean>, close: () => void) => {
  let previousFocus: HTMLElement | null = null
  const handleKey = (event: KeyboardEvent) => {
    if (!open.value) return
    if (event.key === 'Escape') {
      event.preventDefault()
      close()
    }
    if (event.key === 'Tab') {
      const dialog = document.querySelector<HTMLElement>('[aria-modal="true"]')
      const nodes = Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]',
        ) || [],
      ).filter((el) => el.getClientRects().length)
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (!first) {
        event.preventDefault()
        return
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
  }
  watch(open, async (value) => {
    if (!import.meta.client) return
    if (value) {
      previousFocus = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      await nextTick()
      document
        .querySelector<HTMLElement>('[aria-modal="true"] input, [aria-modal="true"] button')
        ?.focus()
    } else {
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  })
  onMounted(() => document.addEventListener('keydown', handleKey))
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKey)
    document.body.style.overflow = ''
  })
}
