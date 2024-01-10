/*
events outside
desc:绑定元素触发的事件不在指定事件中，将会触发。此指令可替代 clickoutside

--------------------vue 模板用法如下：-----------------------------------
```vue
<tempate>
    <button v-events-outside="{
        events:["mousedown","mouseover"],
        callback:(e)=>{} //
    }">删除</button>
</tempate>
```

--------------------vue jsx 用法如下：-----------------------------------
<script>
    export default{
        render(){
                const props = {
                        directives: [
                                        {
                                            name: "events-outside",
                                            value: {
                                                events: ["mousedown","mouseover"],
                                                callback: (e) => {
                                                    //
                                                },
                                            },
                                        }
                                    ]
                    };

            return (
                <div>
                    <button {...props}>删除</button>
                </div>
            )
        }
    }
</script>

*/
import type { Directive } from 'vue'

const eventsOutside: Directive = {
  beforeMount(el, binding) {
    const { events, callback } = binding.value

    if (
      Array.isArray(events)
      && events.length
      && typeof callback === 'function'
    ) {
      const handler = (e: MouseEvent) => {
        if (!el.contains(e.target) && el !== e.target)
          callback(e)
        else
          return false
      }

      el.__eventsOutside__ = handler

      events.forEach((eventName) => {
        document.addEventListener(eventName, handler, true)
      })
    }
    else {
      const compName = binding.instance?.$options.name
      console.error(
        `[events-outside] Please provided 'events' and 'callback' in ${compName}`,
      )
    }
  },

  beforeUnmount(el, binding) {
    const { events } = binding.value
    events.forEach((eventName: string) => {
      document.removeEventListener(eventName, el.__eventsOutside__, true)
    })
    el.__eventsOutside__ = null
  },
}

export default eventsOutside
