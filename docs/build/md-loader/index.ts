import type { PluginOption } from 'vite'
import mdToSfc from './md-to-sfc'

const fileRegex = /\.(md)$/

export default function mdLoader(): PluginOption {
  return {
    name: 'md-loader',
    enforce: 'pre',

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: mdToSfc(src, id),
          map: null, // 如果可行将提供 source map
        }
      }
    },
  }
}
