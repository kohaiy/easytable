import { injectCheckboxGroup } from '@easytable/ve-checkbox-group'
import { clsName } from './util'
import { COMPS_NAME, EMIT_EVENTS } from './util/constant'

export default defineComponent({
  name: COMPS_NAME.VE_CHECKBOX,
  props: {
    // 当前checkbox 选中状态,实现 v-model
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    label: {
      type: [String],
      default: null,
    },
    // is disabled checked
    disabled: Boolean,
    // partial selection effect
    indeterminate: Boolean,
    // 是否是可控组件
    isControlled: {
      type: Boolean,
      default: false,
    },
    // isControlled 为true 时生效
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    const { onCheckboxGroupUpdate, updateCheckboxGroup, inCheckboxGroup, isVerticalShow, groupModelValue } = injectCheckboxGroup()
    onCheckboxGroupUpdate(updateModelByGroup)

    // 当前checkbox 选中状态
    const model = ref(props.modelValue)

    // 是否横向显示还是纵向显示
    const checkboxStyle = computed(() => {
      return {
        display: isVerticalShow.value
          ? 'block'
          : 'inline-block',
      }
    })
    // 是否选中
    const internalIsSelected = computed(() => {
      return props.isControlled ? props.isSelected : model.value
    })

    const checkboxClass = computed(() => {
      return [
        clsName('content'),
        {
          [clsName('checked')]: internalIsSelected.value,
          [clsName('disabled')]: props.disabled,
          [clsName('indeterminate')]: props.indeterminate,
        },
      ]
    })

    watch(() => props.modelValue, () => {
      updateModelBySingle()
    })

    // checkbox change
    function checkboxChange(event: Event) {
      if (props.disabled)
        return

      const target = event.target as HTMLInputElement
      const isChecked = target.checked

      if (!props.isControlled)
        emit('update:modelValue', isChecked)

      emit(EMIT_EVENTS.ON_CHECKED_CHANGE, isChecked)

      if (isCheckBoxGroup()) {
        // update parent comp:checkbox-group
        updateCheckboxGroup(props.label, isChecked)
      }
    }

    // is checkbox group
    function isCheckBoxGroup() {
      return inCheckboxGroup
    }

    // get label content
    function getLabelContent() {
      return props.label || slots.default?.()
    }

    function initModel() {
      if (isCheckBoxGroup()) {
        if (
          Array.isArray(groupModelValue.value)
          && groupModelValue.value.length > 0
        ) {
          if (groupModelValue.value.includes(props.label))
            model.value = true
        }
      }
      else {
        model.value = props.modelValue
      }
    }

    // 通过单选更新 model
    function updateModelBySingle() {
      if (!props.disabled)
        model.value = props.modelValue
    }

    // 父组件调用更新 model
    function updateModelByGroup(checkBoxGroup: string[]) {
      if (checkBoxGroup.includes(props.label)) {
        if (!props.disabled)
          model.value = true
      }
      else {
        if (!props.disabled)
          model.value = false
      }
    }

    initModel()

    return () => (
      <label class="ve-checkbox" style={checkboxStyle.value}>
        <span class={checkboxClass.value}>
          <input
            checked={!!internalIsSelected.value}
            class={clsName('input')}
            type="checkbox"
            value={props.label}
            onChange={checkboxChange}
          />
          <span class={clsName('inner')}></span>
        </span>
        <span class={clsName('label')}>{getLabelContent()}</span>
      </label>
    )
  },
})
