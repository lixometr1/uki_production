interface useResizeOptions {
  immediate?: boolean
}
export default function useResize(
  fn: (wWidth: number) => void,
  options?: useResizeOptions
) {
  const defaults: useResizeOptions = {
    immediate: true,
  }
  const { immediate } = Object.assign({}, defaults, options)
  if (process.client) {
    window.addEventListener('resize', (e) => {
      fn(window.innerWidth)
    })
    if (immediate) {
      fn(window.innerWidth)
    }
  }
}
