import { Module, VuexModule, getModule } from 'vuex-module-decorators'
import { store } from '@/store'
@Module({ dynamic: true, store, name: 'config' })
class ConfigModule extends VuexModule {
  get baseApiUrl() {
    return 'http://localhost'
  }
}
export default getModule(ConfigModule)
