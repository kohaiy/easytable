import VeCheckbox from '@easytable/ve-checkbox'
import emitter from '@easytable/common/mixins/emitter'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import { clsName } from '../util'

export default defineComponent({
  name: COMPS_NAME.VE_TABLE_HEADER_CHECKBOX_CONTENT,
  mixins: [emitter()],
  props: {
    // checkbox option
    checkboxOption: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      // is selected
      isSelected: false,
      isIndeterminate: false,
    }
  },

  methods: {
    // selected change
    selectedChange(isSelected: boolean) {
      this.isSelected = isSelected

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.CHECKBOX_SELECTED_ALL_CHANGE,
        {
          isSelected,
        },
      )
    },

    // set selected all info
    setSelectedAllInfo({ isSelected, isIndeterminate }) {
      this.isSelected = isSelected
      this.isIndeterminate = isIndeterminate
    },
  },
  mounted() {
    // receive selected all info
    this.on(EMIT_EVENTS.CHECKBOX_SELECTED_ALL_INFO, (params) => {
      this.setSelectedAllInfo(params)
    })
  },
  render() {
    const { isSelected, isIndeterminate, selectedChange } = this

    const checkboxProps = {
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      isSelected,
      indeterminate: isIndeterminate,
      onOnCheckedChange: isSelectedParam =>
        selectedChange(isSelectedParam),
    }

    return <VeCheckbox {...checkboxProps} />
  },
})
