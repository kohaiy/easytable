import type { App } from 'vue'
import VeContextmenu from './src/index'

VeContextmenu.install = function (app: App) {
  app.component(VeContextmenu.name, VeContextmenu)
}

export default VeContextmenu
