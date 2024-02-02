// import './assets/main.css'

import { createApp } from 'vue'
import hljs from 'highlight.js'

import 'highlight.js/styles/color-brewer.css'

import '@/css/index.less'
import '@/css/custom.less'
import '@/comp/app.less'

// import 'md-powerpack'
import { ElDatePicker, ElIcon, ElInputNumber, ElRadio, ElRadioGroup, ElSelect } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import {
  // VeCheckbox,
  // VeCheckboxGroup,
  // VeContextmenu,
  // VeDropdown,
  // VeIcon,
  // VeLoading,
  // VeLocale,
  // VePagination,
  // VeRadio,
  // VeSelect,
  // VeTable,
  useVeTable,
} from '../../packages/vue/src/index'
import '../../packages/theme-default/index.less'
import App from './App.vue'
import router from './router'
import DemoBlock from '@/comp/demo-block.vue'
import Anchor from '@/comp/anchor.vue'

// console.log(VeTable);
const app = createApp(App)
app.use(ElDatePicker)
app.use(ElInputNumber)
app.use(ElIcon)
app.use(ElSelect)
app.use(ElRadio)
app.use(ElRadioGroup)
// app.use(VeTable)
// app.use(VeIcon)
// app.use(VeLoading)
app.use(useVeTable())
app.use(router)

router.afterEach(() => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)

    window.scroll(0, 0)
  })
})

app.component('anchor', Anchor)
app.component('demo-block', DemoBlock)

app.mount('#app')
