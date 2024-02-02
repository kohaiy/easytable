/*
fork from:
https://github.com/ElemeFE/element
*/
// function broadcast(componentName, eventName, params) {
//   this.$children.forEach((child) => {
//     const name = child.$options.name

//     if (name === componentName)
//       child.$emit([eventName].concat(params))

//     else
//       broadcast.apply(child, [componentName, eventName].concat([params]))
//   })
// }
import type { Emitter, EventType } from 'mitt'

type EventBus = Emitter< Record<EventType, unknown>>

export default (eventBusKey?: string) => defineComponent({
  provide() {
    return eventBusKey ? { eventBus: (this as any)[eventBusKey] } : {}
  },
  inject: eventBusKey ? [] : ['eventBus'],
  methods: {
    dispatch(componentName: string, eventName: string, params: any) {
      const bus = ((eventBusKey && (this as any)[eventBusKey]) || this.eventBus) as EventBus
      bus.emit([componentName, eventName].join(), params)
    },
    on(eventName: string, callback: (params: any) => void) {
      const bus = ((eventBusKey && (this as any)[eventBusKey]) || this.eventBus) as EventBus
      bus.on([this.$options.name, eventName].join(), callback.bind(this))
    },
  },
})
