/*
element focus
*/
import type { Directive } from 'vue'

const focus: Directive = {
  beforeMount(el, { value, instance }) {
    if (value) {
      const { focus, select } = value

      instance?.$nextTick(() => {
        if (focus)
          el.focus()

        if (select)
          el.select()
      })
    }
  },
  updated(el, { value }) {
    if (value) {
      const { focus } = value
      if (focus)
        el.focus()
    }
  },
}

export default focus
