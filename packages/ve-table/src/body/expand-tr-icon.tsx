import { ICON_NAMES } from '@easytable/common/utils/constant'
import { computed, defineComponent } from 'vue'
import VeIcon from '@easytable/ve-icon'
import { clsName } from '../util'
import { COLUMN_TYPES, COMPS_NAME } from '../util/constant'

export default defineComponent({
  name: COMPS_NAME.VE_TABLE_EXPAND_TR_ICON,
  props: {
    column: {
      type: Object,
      required: true,
    },
    // expand row option
    expandOption: {
      type: Object,
      default() {
        return null
      },
    },
    rowData: {
      type: Object,
      required: true,
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default() {
        return []
      },
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
    // row expand click event
    cellClick: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    // is row expanded
    const isExpanded = computed((): boolean => {
      let result = false

      const { column, rowData, expandedRowkeys, rowKeyFieldName } = props

      if (column.type === COLUMN_TYPES.EXPAND) {
        const rowKey = rowData[rowKeyFieldName]
        result = expandedRowkeys.includes(rowKey)
      }

      return result
    })
    // expand row icon class
    const expandRowIconContainerClass = computed(() => {
      return {
        [clsName('row-expand-icon')]: true,
        [clsName('expand-icon-collapsed')]: isExpanded.value,
      }
    })

    return () => {
      if (props.column.type === COLUMN_TYPES.EXPAND) {
        return (
          <span
            onClick={e => props.cellClick(e)}
            class={expandRowIconContainerClass.value}
          >
            <VeIcon name={ICON_NAMES.RIGHT_ARROW} />
          </span>
        )
      }
      return null
    }
  },
})
