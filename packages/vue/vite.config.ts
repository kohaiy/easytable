import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'vue',
      ],
      input: resolve(__dirname, 'src/index.ts'),
      output: [
        {
          format: 'es',
          dir: 'libs/es',
          globals: {
            vue: 'Vue',
          },
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'umd',
          dir: 'libs/umd',
          globals: {
            vue: 'Vue',
          },
          name: 'EasytableVue',
          entryFileNames: 'easytable-vue.js',
          exports: 'named',
        },
        {
          format: 'cjs',
          dir: 'libs/cjs',
          globals: {
            vue: 'Vue',
          },
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },

      ],
    },
    // 这一块是不会被使用的
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'easytable_vue',
      // formats: ['cjs', 'es'],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: [resolve(__dirname, '../../packages')],
      outDir: resolve(__dirname, './libs/packages'),
    }),
    dts({
      include: [resolve(__dirname, './src/index.ts')],
      outDir: resolve(__dirname, './libs'),
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
      ],
    }),
  ],
})
