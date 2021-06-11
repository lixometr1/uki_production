import Vue from 'vue'
import { ModalComponents, ModalName } from '@/types/modal.enum'
import useEvent from './useEvent'
class ModalApi {
  public event
  constructor() {
    this.event = useEvent()
  }

  open(opts: any) {
    this.event.emit('modal-open', opts)
  }

  close(name: string) {
    this.event.emit('modal-close', name)
  }

  on(event: string, listener: (...values: any[]) => any) {
    this.event.on('modal-' + event, listener)
  }
}
interface ModalShowProps {
  on?: {
    [key: string]: Function
  }
  props?: {
    [key: string]: any
  }
  name?: string
  transition?: string
}
export default (function () {
  return function useModal() {
    const getComponentByName = (name: ModalName): Promise<any> | null =>
      ModalComponents[name] ? ModalComponents[name]() : null
    const api = new ModalApi()
    const showByName = async (
      name: ModalName,
      opts?: ModalShowProps
    ): Promise<any> => {
      const component = await getComponentByName(name)
      if (!component) {
        console.log('Modal not found')
        return false
      }
      if (!opts) opts = {}
      return api.open({ component: component.default, ...opts })
    }
    const show = (...args: any) => {
      Vue.prototype.$modal.show(...args)
    }
    const hide = (name: string) => {
      Vue.prototype.$modal.hide(name)
    }
    const hideAll = () => {
      Vue.prototype.$modal.hideAll()
    }
    return { show, hide, hideAll, showByName, api }
  }
})()
