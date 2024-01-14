import VeDropdown from '@easytable/ve-dropdown'
import VeIcon from '@easytable/ve-icon'
import { ICON_NAMES } from '@easytable/common/utils/constant'
import type { VeDropdownItem } from 'packages/ve-dropdown/src/type'
import { COMPS_NAME, EMIT_EVENTS } from './util/constant'
import { clsName } from './util/index'

export default defineComponent({
  name: COMPS_NAME.VE_SELECT,
  props: {
    width: {
      type: Number,
      default: 90,
    },

    // select的最大宽度(超出隐藏)
    maxWidth: {
      type: Number,
      default: 0,
    },

    // 如果为true 会包含 checkbox
    isMultiple: {
      type: Boolean,
      default: false,
    },

    // 用户传入v-model 的值 [{value/label/selected}]
    modelValue: {
      type: Array as PropType<VeDropdownItem[]>,
      default: null,
    },

    // 占位符
    placeholder: {
      type: String,
      default: '请选择',
      validator(value: string) {
        return value.length > 0
      },
    },

    // 文本居中方式 left|center|right
    textAlign: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'left',
    },

    // 是否支持输入input
    isInput: {
      type: Boolean,
      default: false,
    },
    // popper append to element
    popperAppendTo: {
      type: [String, HTMLElement],
      default() {
        return document.body
      },
    },
  },
  data() {
    return {
      visible: false,

      internalOptions: [] as VeDropdownItem[],

      inputValue: '',
      // dorpdown visible
      dropdownVisible: false,
    }
  },
  computed: {
    // icon class
    iconClass() {
      return {
        [clsName('show')]: this.dropdownVisible,
        [clsName('toggle-icon')]: true,
      }
    },
  },
  watch: {
    modelValue() {
      this.init()
    },
  },
  methods: {
    // 初始化
    init() {
      this.internalOptions = Object.assign([], this.modelValue)
    },

    // 显示选中的信息
    showSelectInfo() {
      let result

      const labels = this.selectedLabels()
      if (Array.isArray(labels) && labels.length > 0)
        result = labels.join()
      else
        result = this.placeholder

      return result
    },

    // 当前选中项的label
    selectedLabels() {
      return this.internalOptions
        .filter(x => x.selected)
        .map((x) => {
          if (x.selected)
            return x.label
          return undefined
        })
    },

    // dropdown change event
    dropdownChange() {
      // 使用户传入的v-model 生效
      this.$emit('update:modelValue', this.internalOptions)
      this.$emit(EMIT_EVENTS.SELECT_CHANGE, this.internalOptions)
    },
  },

  created() {
    this.init()
  },
  render() {
    const { isInput } = this

    const props = {
      'class': 've-select',
      'isSelect': true,
      'width': this.width,
      'maxWidth': this.maxWidth,
      'isMultiple': this.isMultiple,
      'textAlign': this.textAlign,
      'isInput': this.isInput,
      // v-model
      'modelValue': this.internalOptions,
      'hideByItemClick': true,
      'popperAppendTo': this.popperAppendTo,
      'style': {
        width: this.width,
      },
      // change: this.dropdownChange,
      // v-model
      'onUpdate:modelValue': (val: VeDropdownItem[]) => {
        this.internalOptions = val
        this.dropdownChange()
      },
      // dropdown visible change
      'onDropdownVisibleChange': (visible: boolean) => {
        this.dropdownVisible = visible
      },
    }

    let content: JSX.Element
    if (isInput) {
      content = (
        <input
          class={clsName('input')}
          placeholder={this.placeholder}
          type="text"
          v-model={this.inputValue}
        />
      )
    }
    else {
      content = (
        <span class={clsName('selected-span')}>
          {this.showSelectInfo()}
        </span>
      )
    }

    return (
      <VeDropdown {...props}>
        <span>
          {content}
          <VeIcon
            name={ICON_NAMES.BOTTOM_ARROW}
            class={this.iconClass}
          />
          {/* <i class={[this.iconClass]}></i> */}
        </span>
      </VeDropdown>
    )
  },
})
