// import Vue from 'vue'
import { cloneDeep, merge } from 'lodash'
import defaultLang from '@easytable/common/locale/lang/en-US'

// const { defineReactive } = Vue.util
// const proto = Vue.prototype

// proto.$veTableMessages = proto.$veTableMessages || {}

// defineReactive(
//   proto,
//   '$veTableMessages',
//   cloneDeep({
//     lang: defaultLang,
//   }),
// )

const currentLang = cloneDeep(defaultLang)

export default {
  getMessage() {
    return currentLang
    // return proto.$veTableMessages.lang
  },
  use(lang: typeof defaultLang) {
    this.update(lang)
  },
  update(lang = {}) {
    merge(currentLang, lang)
    // merge(proto.$veTableMessages.lang, lang)
  },
}
