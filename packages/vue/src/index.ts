// This file is auto gererated by build/build-entry.js
import type { Plugin } from 'vue'

import VeCheckbox from '@easytable/ve-checkbox'
import VeCheckboxGroup from '@easytable/ve-checkbox-group'
import VeContextmenu from '@easytable/ve-contextmenu'
import VeDropdown from '@easytable/ve-dropdown'
import VeIcon from '@easytable/ve-icon'
import VeLoading from '@easytable/ve-loading'
import VeLocale from '@easytable/ve-locale'
import VePagination from '@easytable/ve-pagination'
import VeRadio from '@easytable/ve-radio'
import VeSelect from '@easytable/ve-select'
import VeTable from '@easytable/ve-table/src'
import type { LocaleMessage } from '@easytable/common/locale/types'

const version = '0.0.5'
const components = [
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable,
]

const useVeTable = function (options?: { locale?: LocaleMessage }): Plugin {
  return {
    install(app) {
      components.forEach((Component) => {
        app.use(Component)
      })
      if (options?.locale)
        VeLocale.use(options.locale)
    },
  }
}
// const install = (app: Vue) => {
//   components.forEach((Component) => {
//     app.use(Component)
//   })

//   Vue.prototype.$veLoading = VeLoading
//   Vue.prototype.$veLocale = VeLocale
// }

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue)
//   install(window.Vue)

export {
  useVeTable,
  version,
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable,
}

// export default {
//   useVeTable,
//   version,
//   VeCheckbox,
//   VeCheckboxGroup,
//   VeContextmenu,
//   VeDropdown,
//   VeIcon,
//   VeLoading,
//   //   VeLocale,
//   VePagination,
//   VeRadio,
//   VeSelect,
//   VeTable,
// }
