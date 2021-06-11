import useApi, { UseApiOptions } from '@/utils/compositions/useApi'
export const useApiTest = (opts: UseApiOptions) =>
  useApi(
    () => ({
      method: 'GET',
      url: '/test',
    }),
    opts
  )
