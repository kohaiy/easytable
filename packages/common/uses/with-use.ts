import type { App, Component, Plugin } from 'vue'

export function withUse<T extends Component>(Component: T) {
  const ComponentWithInstall = Component as T & Plugin
  ComponentWithInstall.install = function (app: App) {
    app.component(Component.name ?? '', Component)
  }

  return ComponentWithInstall
}
