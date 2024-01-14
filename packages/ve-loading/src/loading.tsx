/* thanks for  https://github.com/tobiasahlin/SpinKit */

import { COMPS_NAME } from './util/constant'
import { clsName } from './util'
import Plane from './plane'
import Bounce from './bounce'
import Wave from './wave'
import Pulse from './pulse'
import Flow from './flow'
import Grid from './grid'

const TYPE_MAP = {
  plane: Plane,
  bounce: Bounce,
  wave: Wave,
  pulse: Pulse,
  flow: Flow,
  grid: Grid,
} as const

export default defineComponent({
  name: COMPS_NAME.VE_LOADING,
  props: {
    name: {
      type: String as PropType<keyof typeof TYPE_MAP>,
      default: 'plane',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#1890ff',
    },
    overlayBackgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.5)',
    },
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    tip: {
      type: String,
      default: '',
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    target: {
      type: [String, Object] as PropType<string | HTMLElement>,
      default: '',
    },
    lock: {
      type: Boolean,
      default: false,
    },
    // parent “__parent__”会被忽略
    parent__: {
      type: Object as PropType<HTMLElement | null>,
      default: null,
    },
  },
  data(vm) {
    return {
      _visible: vm.visible,
    }
  },
  computed: {
    // loading class
    loadingClass() {
      const { _visible: visible, fullscreen } = this
      return {
        [clsName('overlay')]: true,
        [clsName('fixed')]: fullscreen,
        [clsName('hide')]: !visible,
      }
    },

    // loading style
    loadingStyle() {
      const { overlayBackgroundColor } = this

      return {
        'background-color': overlayBackgroundColor,
      }
    },
  },
  methods: {
    setVisible(v: boolean) {
      this._visible = v
    },
  },

  render() {
    const { width, height, color, name } = this

    const spinProps = {
      width,
      height,
      color,
    }

    const Comp = TYPE_MAP[name]

    return (
      <div
        style={this.loadingStyle}
        class={['ve-loading', this.loadingClass]}
      >
        <div class={clsName('spin-container')}>
          <div class={clsName('spin')}>
            <Comp {...spinProps}></Comp>
          </div>
          <div style={{ color }} class={clsName('spin-tip')}>
            {this.tip}
          </div>
        </div>
      </div>
    )
  },
})
