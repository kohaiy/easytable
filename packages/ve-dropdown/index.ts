import type { App } from 'vue'
import VeDropdown from './src'

VeDropdown.install = function (app: App) {
  app.component(VeDropdown.name, VeDropdown)
}

export default VeDropdown
