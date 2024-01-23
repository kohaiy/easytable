import { VueWrapper } from '@vue/test-utils'
import vueSnapshotSerializer from 'jest-serializer-vue'

expect.addSnapshotSerializer(vueSnapshotSerializer)

// add Wrapper prototype
Object.assign(VueWrapper.prototype, {
  findResizeObserver() {
    return this.findComponent({ name: 'vue-dom-resize-observer' })
  },
  triggerResizeObserver({ width = 0, height = 0 }) {
    const ob = this.findResizeObserver()
    ob.vm.resizeListener({ width, height })
  },
})
