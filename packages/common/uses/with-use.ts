import type { App, Component, Plugin } from 'vue'

export function withUse<T>(Component: T, customInstall?: Plugin['install']) {
  const ComponentWithInstall = Component as T & Plugin
  if (customInstall) {
    ComponentWithInstall.install = customInstall
  }
  else {
    const Comp = Component as Component
    ComponentWithInstall.install = function (app: App) {
      app.component(Comp.name ?? '', Comp)
    }
  }

  return ComponentWithInstall
}
