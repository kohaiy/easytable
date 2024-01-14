import { getValByUnit } from '@easytable/common/utils'
import { clsName } from './util'
import { COMPS_NAME } from './util/constant'

export default defineComponent({
  name: COMPS_NAME.VE_LOADING_FLOW,
  props: {
    color: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    // spin style
    spinStyle() {
      const { width, height } = this

      const result = {
        width: getValByUnit(width),
        height: getValByUnit(height),
      }

      return result
    },
    itemStyle() {
      const { color } = this

      return {
        'background-color': color,
      }
    },
  },
  render() {
    const { spinStyle, itemStyle } = this
    return (
      <div style={spinStyle} class={clsName('flow')}>
        <div style={itemStyle} class={clsName('flow-dot')}></div>
        <div style={itemStyle} class={clsName('flow-dot')}></div>
        <div style={itemStyle} class={clsName('flow-dot')}></div>
      </div>
    )
  },
})
