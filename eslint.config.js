import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'unused-imports/no-unused-vars': ['warn'],
    'no-console': ['warn'],
    'vue/no-reserved-component-names': ['warn'],
    'node/prefer-global/process': ['warn'],
    'vue/block-order': ['warn', {
      order: [['script', 'template'], 'style'],
    }],
  },
}, {
  ignores: [
    '**/font/*.js',
    '**/*.spec.js',
    '**/*.spec.jsx',
  ],
})
