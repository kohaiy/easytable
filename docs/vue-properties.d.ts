import type { VeLoading } from '../packages/vue/src/index'

export {}

declare module 'vue' {

  interface ComponentCustomProperties {

    $veLoading: typeof VeLoading
  }
}
