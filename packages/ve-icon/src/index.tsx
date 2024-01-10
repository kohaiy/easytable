import { defineComponent } from 'vue'
import { ICON_NAMES } from '@easytable/common/utils/constant'
import { getValByUnit } from '@easytable/common/utils'
import { COMPS_NAME } from './util/constant'

export default defineComponent({
  name: COMPS_NAME.VE_ICON,

  props: {
    // icon name
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
    size: {
      type: [Number, String],
      default: '',
    },
  },

  computed: {
    // icon style
    iconStyle() {
      const { color, size } = this

      const result = {
        color,
        'font-size': getValByUnit(size),
      }

      return result
    },

    // icon name
    iconClass() {
      const { name } = this

      if (!Object.values(ICON_NAMES).includes(name))
        console.error(`${name} is not found in ${COMPS_NAME.VE_ICON}.`)

      return `iconfont-vet icon-vet-${name}`
    },
  },

  render() {
    const { iconStyle, iconClass } = this
    return <i style={iconStyle} class={['ve-icon', iconClass]} />
  },
})
