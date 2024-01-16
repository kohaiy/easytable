/*
fork from:
https://github.com/ElemeFE/element
*/
function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const name = child.$options.name

    if (name === componentName)
      child.$emit([eventName].concat(params))

    else
      broadcast.apply(child, [componentName, eventName].concat([params]))
  })
}
export default {
  inject: ['eventBus'],
  methods: {
    dispatch(componentName, eventName, params) {
      if (componentName === 'VeTable' && this.eventBus) {
        this.eventBus.emit(eventName, params)
        return
      }
      // console.log(componentName, eventName, this.eventBus)

      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent)
          name = parent.$options.name
      }
      if (parent)
        parent.$emit(...[eventName].concat(params))

      else
        console.error(`${componentName} was not found.`)
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    },
  },
}
