import { defineComponent } from 'vue'
import {
  addResizeListener,
  removeResizeListener,
} from '../../../utils/resize-event'

export default defineComponent({
  name: 'VueDomResizeObserver',
  props: {
    tagName: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      default: null,
    },
  },
  mounted() {
    addResizeListener(this.$el, this.resizeListener)
  },
  unmounted() {
    removeResizeListener(this.$el, this.resizeListener)
  },
  methods: {
    resizeListener(contentRect: DOMRect) {
      const { left, top, width, height } = contentRect
      this.$emit('on-dom-resize-change', {
        key: this.id,
        left,
        top,
        width,
        height,
      })
    },
  },
  render() {
    return <this.tagName>{this.$slots.default?.()}</this.tagName>
  },
})
