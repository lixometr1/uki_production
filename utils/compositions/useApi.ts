import useAxios from '@/utils/compositions/useAxios'
import { AxiosRequestConfig } from 'axios'
// import useGlobalLoading from './useGlobalLoading'
import {
  ssrRef,
  Ref,
  ref,
  computed,
  WritableComputedRef,
} from '@nuxtjs/composition-api'
// import useToast from './useToast'
export interface ToastMessages {
  error?: (err: any) => string
  success?: (result: any) => string
}
export interface UseApiOptions {
  toast?: boolean | ToastMessages
  loading?: boolean
}
export default function useApi<T, R extends any>(
  factory: (opts: T) => AxiosRequestConfig,
  options: UseApiOptions = { toast: false, loading: false },
  handleResult = (data: R): R => data,
  handleResponse = (data: any): R => data.data
) {
  const axios = useAxios()

  const isLoading = ref(false)
  const _result: Ref<any> = ssrRef(null)
  const result: WritableComputedRef<R | null> = computed({
    get: () => handleResult(_result.value),
    set: () => {},
  })

  const error: Ref<any> = ssrRef(null)
  const exec = async (args: T) => {
    const request = factory(args)
    isLoading.value = true
    error.value = null
    try {
      const response = await axios(request)
      const valueResponse: R = handleResponse(response)
      _result.value = valueResponse
      return valueResponse
    } catch (e: any) {
      if (e.isAxiosError === true) {
        error.value = e
      } else {
        console.log('strange error ', e)
        error.value = e
      }
      _result.value = null
    } finally {
      isLoading.value = false
    }
  }
  //   if (options.loading) {
  //     const globalLoading = useGlobalLoading()
  //     watch(isLoading, (value) => {
  //       if (value) {
  //         globalLoading.show()
  //       } else {
  //         globalLoading.hide()
  //       }
  //     })
  //   }
  // if (options.toast) {
  //   const toast = useToast()

  //   const defaultSerializers = {
  //     success: (data: any) => data,
  //     error: errorHandler(),
  //   }
  //   let messageSerializers = defaultSerializers
  //   if (typeof options.toast === 'object') {
  //     messageSerializers = Object.assign({}, defaultSerializers, options.toast)
  //   }
  //   watch(error, (value: AxiosError) => {
  //     if (value) {
  //       if (
  //         (typeof options.toast === 'object' && options.toast.error) ||
  //         (typeof options.toast === 'boolean' && options.toast === true)
  //       ) {
  //         toast.error(messageSerializers.error(value))
  //       }
  //     }
  //   })
  //   watch(result as any, (value: R) => {
  //     if (value) {
  //       if (
  //         (typeof options.toast === 'object' && options.toast.success) ||
  //         (typeof options.toast === 'boolean' && options.toast === true)
  //       ) {
  //         toast.success(messageSerializers.success(value))
  //       }
  //     }
  //   })
  // }
  return {
    isLoading,
    result,
    error,
    exec,
  }
}
