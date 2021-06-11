import ConfigModule from '@/store/config'
import UserModule from '@/store/user'
import { useContext } from '@nuxtjs/composition-api'
export default function useAxios() {
  const baseURL = ConfigModule.baseApiUrl
  const $axios = useContext().$axios.create({
    baseURL,
    withCredentials: false,
    maxRedirects: 0,
  })
  $axios.interceptors.request.use((config) => {
    const token = UserModule.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // const csrf = cookie.get('XSRF-TOKEN')
    // console.log(csrf)
    // if(csrf) {
    //     config.headers['X-CSRF-TOKEN'] = csrf
    // }
    return config
  })
  return $axios
}
