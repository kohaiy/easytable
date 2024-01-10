import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'unused-imports/no-unused-vars': ['warn'],
    'no-console': ['warn'],
    'vue/no-reserved-component-names': ['warn'],
    'node/prefer-global/process': ['warn'],
  },
  ignores: [
    '**/font/*.js',
  ],
}, {
  ignores: [
    '**/font/*.js',
  ],
})
