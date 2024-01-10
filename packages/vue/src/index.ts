// This file is auto gererated by build/build-entry.js
import type { Plugin } from 'vue'

// import VeCheckbox from './ve-checkbox'
// import VeCheckboxGroup from './ve-checkbox-group'
// import VeContextmenu from './ve-contextmenu'
// import VeDropdown from './ve-dropdown'
import VeIcon from '@easytable/ve-icon'

// import VeLoading from './ve-loading'
// import VeLocale from './ve-locale'
// import VePagination from './ve-pagination'
// import VeRadio from './ve-radio'
// import VeSelect from './ve-select'
import VeTable from '@easytable/ve-table/src'

const version = '0.0.1'
const components = [
  //   VeCheckbox,
  //   VeCheckboxGroup,
  //   VeContextmenu,
  //   VeDropdown,
  VeIcon,
  //   VeLoading,
  //   VeLocale,
  //   VePagination,
  //   VeRadio,
  //   VeSelect,
  VeTable,
]

const useVeTable = function (): Plugin {
  return {
    install(app) {
      components.forEach((Component) => {
        app.use(Component)
      })
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
  //   VeCheckbox,
  //   VeCheckboxGroup,
  //   VeContextmenu,
  //   VeDropdown,
  VeIcon,
  //   VeLoading,
  //   VeLocale,
  //   VePagination,
  //   VeRadio,
  //   VeSelect,
  VeTable,
}

export default {
  useVeTable,
  version,
  //   VeCheckbox,
  //   VeCheckboxGroup,
  //   VeContextmenu,
  //   VeDropdown,
  //   VeIcon,
  //   VeLoading,
  //   VeLocale,
  //   VePagination,
  //   VeRadio,
  //   VeSelect,
  VeTable,
}
