import { ref } from '@nuxtjs/composition-api'

export default function useCatalogFilters(defOpen = false) {
  const isOpen = ref(defOpen)
  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }
  return { open, close, isOpen, toggle }
}
