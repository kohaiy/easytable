/// <reference types="vite/client" />

declare module '*.md' {
  import type { ComponentOptions } from 'vue'

  const Component: ComponentOptions
  export default Component
}

declare const __BASE_URL__: string
declare const __VERSIONS_BASE_URL__: string
