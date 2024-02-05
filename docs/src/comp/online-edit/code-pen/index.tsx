export default defineComponent({
  props: {
    // vue-easytable version
    version: {
      type: String,
      required: true,
    },
    // vue tpl
    exampleTpl: {
      type: String,
      required: true,
    },
    // scripts
    exampleScript: {
      type: String,
      default: '',
    },
    // style
    exampleStyle: {
      type: String,
      required: true,
    },
  },
  methods: {
    goCodepen() {
      const { version, exampleScript, exampleTpl, exampleStyle } = this
      const resourcesTpl
                = '<scr'
                + 'ipt src="//unpkg.com/vue@3/dist/vue.global.js"></scr'
                + 'ipt>'
                + '\n<scr'
                + `ipt src="//unpkg.com/@easytable/vue@${version}/libs/umd/easytable-vue.js"></scr`
                + 'ipt>'
      let jsTpl = (exampleScript || '')
        .replace(/export default/, 'var Main =')
        .trim()
      const htmlTpl = `${resourcesTpl}\n<div id="app">\n${exampleTpl.replace('<template>', '').replace('</template>', '').trim()}\n</div>`
      const cssTpl = `@import url("//unpkg.com/@easytable/vue@${version}/libs/theme-default/index.css");\n${(
                exampleStyle || ''
            ).trim()}\n`
      jsTpl = jsTpl
        ? `${jsTpl
                  }\nVue.createApp(Main).use(EasytableVue.useVeTable()).mount(\'#app\')`
        : 'Vue.createApp().use(EasytableVue.useVeTable()).mount(\'#app\')'
      const data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl,
      }
      const form
                = document.getElementById('fiddle-form')
                || document.createElement('form')
      while (form.firstChild)
        form.removeChild(form.firstChild)

      form.method = 'POST'
      form.action = 'https://codepen.io/pen/define/'
      form.target = '_blank'
      form.style.display = 'none'

      const input = document.createElement('input')
      input.setAttribute('name', 'data')
      input.setAttribute('type', 'hidden')
      input.setAttribute('value', JSON.stringify(data))

      form.appendChild(input)
      document.body.appendChild(form)

      form.submit()
    },
  },

  render() {
    return <div onClick={this.goCodepen}>open in codepen</div>
  },
})
