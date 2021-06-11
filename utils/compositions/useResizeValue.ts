import { ref } from '@nuxtjs/composition-api'
import useResize from './useResize'

export default function useResizeValue<T>(fn: (wWidth: number) => T) {
  const value = ref<T>()
  const exec = (wW: number) => {
    value.value = fn(wW)
  }
  useResize((wW) => {
    exec(wW)
  })
  return { value, exec }
}
