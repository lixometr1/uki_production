class EventEmiter {
  _eventHandlers: { [key: string]: any } = []
  on(eventName: string, handler: any) {
    if (!this._eventHandlers) this._eventHandlers = {}
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = []
    }
    this._eventHandlers[eventName].push(handler)
  }

  /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName: string, handler: any) {
    const handlers = this._eventHandlers && this._eventHandlers[eventName]
    if (!handlers) return
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1)
      }
    }
  }

  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  emit(eventName: string, ...args: any[]) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return // обработчиков для этого события нет
    }

    // вызовем обработчики
    this._eventHandlers[eventName].forEach((handler: any) =>
      handler.apply(this, args),
    )
  }
}
export default function useEvent() {
  return new EventEmiter()
}
