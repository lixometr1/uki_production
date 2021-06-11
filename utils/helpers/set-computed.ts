import { computed } from '@nuxtjs/composition-api'

export default function setComptued(fn: (...args: any[]) => any) {
  return computed({
    get: fn,
    set: () => {},
  })
}
