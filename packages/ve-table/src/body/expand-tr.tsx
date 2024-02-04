import emitter from '@easytable/common/mixins/emitter'
import { clsName } from '../util'
import { COMPS_NAME } from '../util/constant'

export default defineComponent({
  name: COMPS_NAME.VE_TABLE_EXPAND_TR,
  mixins: [emitter()],
  props: {
    tableViewportWidth: {
      type: Number,
      default: 0,
    },
    // expand column
    expandColumn: {
      type: Object,
      default() {
        return null
      },
    },
    colgroups: {
      type: Array,
      required: true,
    },
    // expand row option
    expandOption: {
      type: Object,
      default() {
        return null
      },
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default() {
        return []
      },
    },
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
  },
  computed: {
    // get column count
    columnCount() {
      return this.colgroups.length
    },
    // current row key
    currentRowKey() {
      return this.rowData[this.rowKeyFieldName]
    },
    // is row expanded
    isRowExpanded() {
      let result = false

      const { expandOption, expandedRowkeys, currentRowKey } = this

      // defalut expand all rows
      if (expandOption.defaultExpandAllRows)
        result = true

      // defaultExpandedRowKeys includes currentRowKey
      else if (expandedRowkeys.includes(currentRowKey))
        result = true

      return result
    },
    // expand row class
    expanRowClass() {
      const result = {
        [clsName('expand-tr')]: true,
      }
      return result
    },

    // has left fixed column
    hasLeftFixedColumn() {
      return this.colgroups.some(x => x.fixed === 'left')
    },

    // expand td content style
    expandTdContentStyle() {
      const result = {}

      const { hasLeftFixedColumn, tableViewportWidth } = this

      if (hasLeftFixedColumn) {
        // table width
        if (tableViewportWidth)
          result.width = `${tableViewportWidth}px`
      }

      return result
    },
  },
  methods: {
    // get expande row content
    getExpandRowContent() {
      const { expandOption } = this
      const result
                = expandOption.render
                && expandOption.render(
                  {
                    row: this.rowData,
                    column: this.expandColumn,
                    rowIndex: this.rowIndex,
                  },
                  h,
                )

      return result
    },
  },
  render() {
    const { isRowExpanded, columnCount, getExpandRowContent } = this

    let result = null

    if (isRowExpanded) {
      const content = getExpandRowContent()
      result = (
        <tr class={this.expanRowClass}>
          <td class={clsName('expand-td')} colSpan={columnCount}>
            <div
              class={clsName('expand-td-content')}
              style={this.expandTdContentStyle}
            >
              {content}
            </div>
          </td>
        </tr>
      )
    }

    return result
  },
})
