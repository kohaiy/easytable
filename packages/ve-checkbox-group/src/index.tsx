import { COMPS_NAME, EMIT_EVENTS } from './util/constant'
import { provideCheckboxGroup } from './uses'

export default defineComponent({
  name: COMPS_NAME.VE_CHECKBOX_GROUP,
  provide() {
    return {
      aaa: () => {},
    }
  },
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default() {
        return []
      },
    },
    // 是否垂直排列显示（当时checkbox组时生效）
    isVerticalShow: {
      type: Boolean,
      default: false,
    },
  },
  expose: ['modelValue', 'updateModel'],
  setup(props, { slots, emit }) {
    const { updateCheckbox } = provideCheckboxGroup({
      onCheckboxUpdate(label, checked) {
        const newValue = [...props.modelValue]
        const index = newValue.indexOf(label)
        if (index > -1) {
          if (!checked)
            newValue.splice(index, 1)
        }
        else {
          if (checked)
            newValue.push(label)
        }

        emit('update:modelValue', newValue)
        emit(EMIT_EVENTS.ON_CHECKED_CHANGE, newValue)
      },
      isVerticalShow: toRef(() => props.isVerticalShow),
      groupModelValue: toRef(() => props.modelValue),
    })
    // 更新子组件选中状态
    watch(() => props.modelValue, (newVal: string[]) => {
      updateCheckbox(newVal)
    })

    return () => (
      <div class="ve-checkbox-group">
        {slots.default?.()}
      </div>
    )
  },
})
