// import Vue from 'vue'
import { cloneDeep, merge } from 'lodash'
import defaultLang from '@easytable/common/locale/lang/en-US'
import type { InjectionKey, Ref } from 'vue'
import { Plugin, inject, provide, ref } from 'vue'
import type { LocaleMessage } from '@easytable/common/locale/types'
import { withUse } from '@easytable/common/uses/with-use'

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

const currentLang = ref(cloneDeep(defaultLang))

const VeLocale = {
  getMessage() {
    return currentLang.value
    // return proto.$veTableMessages.lang
  },
  use(lang: typeof defaultLang) {
    this.update(lang)
  },
  update(lang = {}) {
    merge(currentLang.value, lang)
    // merge(proto.$veTableMessages.lang, lang)
  },
}

export default withUse(VeLocale, (app) => {
  app.config.globalProperties.$veLocale = VeLocale
})

const LocaleInjectionKey: InjectionKey<Ref<LocaleMessage | undefined>> = Symbol('VE_LOCALE')

export function provideLocale(lang: Ref<LocaleMessage | undefined>) {
  provide(LocaleInjectionKey, lang)
}

export function useLocale() {
  const lang = inject(LocaleInjectionKey, ref())

  lang.value = lang.value ?? cloneDeep(defaultLang)

  return {
    getMessage() {
      return lang.value
    },
    update(newLang = {}) {
      merge(lang.value, newLang)
    },
  }
}
