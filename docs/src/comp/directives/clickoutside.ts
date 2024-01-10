import type { Directive } from 'vue'

const clickoutside: Directive = {
  beforeMount(el, binding) {
    if (typeof binding.value !== 'function') {
      let msg = `in [clickoutside] directives, provided expression '${binding.value}' is not a function `

      const compName = binding.instance?.$options.name

      if (compName)
        msg += `in ${compName}`

      console.error(msg)
    }

    const handler = (e: MouseEvent) => {
      if (!el.contains(e.target) && el !== e.target)
        binding.value(e)
      else
        return false
    }

    el.__clickOutSide__ = handler

    document.addEventListener('click', handler, true)
  },

  unmounted(el) {
    document.removeEventListener('click', el.__clickOutSide__, true)
    el.__clickOutSide__ = null
  },
}

export default clickoutside
