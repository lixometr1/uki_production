import { Module, VuexModule, getModule } from 'vuex-module-decorators'
import { store } from '@/store'
@Module({ dynamic: true, store, name: 'user' })
class UserModule extends VuexModule {
  get token() {
    return null
  }

  get isAuth() {
    return true
  }
}
export default getModule(UserModule)
