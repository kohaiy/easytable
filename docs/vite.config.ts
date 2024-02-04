import { URL, fileURLToPath } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { version } from '../packages/vue/package.json'
import mdLoader from './build/md-loader'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line node/prefer-global/process
  const env = loadEnv(mode, process.cwd())
  let base = env.VITE_BASE_URL
  if (mode === 'gh-pages-ver')
    // eslint-disable-next-line node/prefer-global/process
    base = `${loadEnv('gh-pages', process.cwd()).VITE_BASE_URL}/${version}`

  return {
    base,
    build: {
      outDir: mode === 'gh-pages-ver' ? `dist/${version}` : 'dist',
    },
    plugins: [
      mdLoader(),
      vue({
        include: [/\.vue$/, /\.md$/], // <--
      }),
      vueJsx(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],

        // global imports to register
        imports: [
        // presets
          'vue',
          'vue-router',
        ],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
