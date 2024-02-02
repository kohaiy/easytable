import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJSX(),
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
        'vitest',
      ],
    }),
  ],
  test: {
    environment: 'jsdom',
    include: [
      // 'tests/unit/specs/ve-checkbox.spec.js',
      // 'tests/unit/specs/ve-contextmenu.spec.jsx',
      // 'tests/unit/specs/ve-dropdown.spec.jsx',
      // 'tests/unit/specs/ve-icon.spec.js',
      // 'tests/unit/specs/ve-loading.spec.jsx',
      // TODO 'tests/unit/specs/ve-locale.spec.jsx',
      // 'tests/unit/specs/ve-pagination.spec.jsx',
      // 'tests/unit/specs/ve-radio.spec.jsx',
      // 'tests/unit/specs/ve-select.spec.jsx',
      // 'tests/unit/specs/ve-table-border.spec.jsx',
      // 'tests/unit/specs/ve-table-cell-align.spec.jsx',
      // 'tests/unit/specs/ve-table-cell-custom.spec.jsx',
      // 'tests/unit/specs/ve-table-cell-edit.spec.js',
      // 'tests/unit/specs/ve-table-cell-ellipsis.spec.js',
      // 'tests/unit/specs/ve-table-cell-selection-indicator.spec.js',
      // 'tests/unit/specs/ve-table-cell-selection.spec.js',
      // 'tests/unit/specs/ve-table-cell-span.spec.jsx',
      // 'tests/unit/specs/ve-table-cell-style.spec.js',
      // 'tests/unit/specs/ve-table-column-fixed.spec.jsx',
      // 'tests/unit/specs/ve-table-column-hidden.spec.js',
      // 'tests/unit/specs/ve-table-column-width.spec.jsx',
      // 'tests/unit/specs/ve-table-common.spec.js',
      // 'tests/unit/specs/ve-table-contextmenu.spec.jsx',
      // 'tests/unit/specs/ve-table-custom-events.spec.js',
      // 'tests/unit/specs/ve-table-footer.spec.jsx',
      'tests/unit/specs/ve-table-header-filter-custom.spec.jsx',
      // 'tests/unit/specs/ve-table-header-filter.spec.js',
      // 'tests/unit/specs/ve-table-header-fixed.spec.js',
      // 'tests/unit/specs/ve-table-header-group.spec.js',
      // 'tests/unit/specs/ve-table-header-sort.spec.js',
      // 'tests/unit/specs/ve-table-instance-methods.spec.js',
      // 'tests/unit/specs/ve-table-operation-column.spec.js',
      // 'tests/unit/specs/ve-table-row-checkbox.spec.js',
      // 'tests/unit/specs/ve-table-row-expand.spec.js',
      // 'tests/unit/specs/ve-table-row-radio.spec.js',
      // 'tests/unit/specs/ve-table-row-style.spec.js',
      // 'tests/unit/specs/ve-table-virtual-scroll.spec.js',
    ],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    globals: true,
    setupFiles: ['./tests/unit/setup.js'],
    snapshotFormat: {
      printBasicPrototype: true,
    },
  },
})
