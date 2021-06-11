import {
  Ref,
  useAsync,
  useContext,
  WritableComputedRef,
} from '@nuxtjs/composition-api'
import { AxiosError } from 'axios'
export default function usePageFetch<
  T extends {
    exec: (...args: any) => Promise<any>
    result: WritableComputedRef<any>
    error: Ref<AxiosError>
  }
>({ api, args }: { api: T; args?: any }): T {
  const apiHooks = api
  const { error: showError } = useContext()
  useAsync(async () => {
    await apiHooks.exec(args)
    if (apiHooks.error.value) {
      showError({ statusCode: apiHooks.error.value.response?.status as number })
    }
  })
  return apiHooks
}
