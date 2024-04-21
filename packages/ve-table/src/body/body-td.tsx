import { getTextContentOfVNode, isBoolean, isEmptyValue, isNumber } from '@easytable/common/utils/index'
import emitter from '@easytable/common/mixins/emitter'
import { clsName, getRowKeysByRangeRowKeys } from '../util'

import {
  COLUMN_TYPES,
  COMPS_CUSTOM_ATTRS,
  COMPS_NAME,
  EMIT_EVENTS,
  EXPAND_TRIGGER_TYPES,
} from '../util/constant'
import ExpandTrIcon from './expand-tr-icon'
import BodyRadioContent from './body-radio-content'
import BodyCheckboxContent from './body-checkbox-content'

export default defineComponent({
  name: COMPS_NAME.VE_TABLE_BODY_TD,
  mixins: [emitter()],
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    column: {
      type: Object,
      required: true,
    },
    columnCollection: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
    allRowKeys: {
      type: Array,
      required: true,
    },
    /*
        expand
        */
    // expand row option
    expandOption: {
      type: Object,
      default() {
        return null
      },
    },
    // is expand row
    isExpandRow: {
      type: Boolean,
      required: true,
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default() {
        return []
      },
    },

    /*
        checkbox
        */
    // checkbox option
    checkboxOption: {
      type: Object,
      default() {
        return null
      },
    },
    internalCheckboxSelectedRowKeys: {
      type: Array,
      default() {
        return null
      },
    },

    /*
        radio
        */
    radioOption: {
      type: Object,
      default() {
        return null
      },
    },
    internalRadioSelectedRowKey: {
      type: [String, Number],
      default: null,
    },
    // cell style option
    cellStyleOption: {
      type: Object,
      default() {
        return null
      },
    },
    // event custom option
    eventCustomOption: {
      type: Object,
      default() {
        return null
      },
    },
    // cell selection data
    cellSelectionData: {
      type: Object,
      default() {
        return null
      },
    },
    // cell selection range data
    cellSelectionRangeData: {
      type: Object,
      default() {
        return null
      },
    },
    bodyIndicatorRowKeys: {
      type: Object,
      default() {
        return null
      },
    },
    // cell span option
    cellSpanOption: {
      type: Object,
      default() {
        return null
      },
    },
    // edit opttion
    editOption: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      // 原始单元格数据
      rawCellValue: '',
    }
  },
  computed: {
    /*
        current column collection item
        1、Cache the style、class of each column
        */
    currentColumnCollectionItem() {
      const { columnCollection, column } = this
      return columnCollection?.find(x => x.colKey === column.key)
    },

    // current row key
    currentRowKey() {
      const { rowData, rowKeyFieldName } = this
      return rowData[rowKeyFieldName]
    },
  },
  watch: {
    // watch row data
    rowData: {
      handler(rowData) {
        const column = this.column
        if (column)
          this.rawCellValue = rowData[column.field]
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    /*
         * @bodyTdStyle
         * @desc body td style
         */
    bodyTdStyle() {
      const { currentColumnCollectionItem } = this

      let result = {}

      if (currentColumnCollectionItem) {
        result = Object.assign(
          result,
          currentColumnCollectionItem.style,
        )
      }

      return result
    },

    /*
         * @bodyTdClass
         * @desc body td class
         */
    bodyTdClass() {
      const { currentColumnCollectionItem } = this

      const { fixed, operationColumn } = this.column

      let result = {
        [clsName('body-td')]: true,
      }

      const {
        cellStyleOption,
        rowData,
        column,
        rowIndex,
        allRowKeys,
        cellSelectionData,
        cellSelectionRangeData,
        bodyIndicatorRowKeys,
        currentRowKey,
      } = this

      // column fixed
      if (fixed) {
        result[clsName('fixed-left')] = fixed === 'left'
        result[clsName('fixed-right')] = fixed === 'right'
      }

      // operation column
      if (operationColumn)
        result[clsName('operation-col')] = true

      // cell style option
      if (
        cellStyleOption
        && typeof cellStyleOption.bodyCellClass === 'function'
      ) {
        const customClass = cellStyleOption.bodyCellClass({
          row: rowData,
          column,
          rowIndex,
        })
        if (customClass)
          result[customClass] = true
      }

      if (cellSelectionData) {
        const { rowKey, colKey } = cellSelectionData.currentCell

        if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
          if (currentRowKey === rowKey) {
            // cell selection
            if (column.key === colKey)
              result[clsName('cell-selection')] = true
          }

          if (operationColumn) {
            const { topRowKey, bottomRowKey }
                            = cellSelectionRangeData
            const { startRowKeyIndex } = bodyIndicatorRowKeys
            const isIndicatorActive = startRowKeyIndex > -1

            let indicatorRowKeys = []
            if (topRowKey === bottomRowKey) {
              indicatorRowKeys = [topRowKey]
            }
            else {
              indicatorRowKeys = getRowKeysByRangeRowKeys({
                topRowKey,
                bottomRowKey,
                allRowKeys,
              })
            }

            //  cell indicator (operation column)
            if (indicatorRowKeys.includes(currentRowKey)) {
              if (isIndicatorActive)
                result[clsName('cell-indicator-active')] = true

              else
                result[clsName('cell-indicator')] = true
            }
          }
        }
      }

      if (currentColumnCollectionItem) {
        result = Object.assign(
          result,
          currentColumnCollectionItem.class,
        )
      }

      return result
    },

    // get ellipsis content style
    getEllipsisContentStyle() {
      const result = {}

      const { ellipsis } = this.column

      if (ellipsis) {
        const { lineClamp } = ellipsis

        const _lineClamp = isNumber(lineClamp) ? lineClamp : 1
        result['-webkit-line-clamp'] = _lineClamp
      }

      return result
    },

    // get render content
    getRenderContent(h) {
      let content = null

      const { column, rowData, rowIndex, rawCellValue } = this

      // has render function
      if (typeof column.renderBodyCell === 'function') {
        const renderResult = column.renderBodyCell(
          {
            row: rowData,
            column,
            rowIndex,
          },
          h,
        )

        content = renderResult
      }
      else {
        content = rawCellValue
      }

      // ellipisis
      if (column.ellipsis) {
        const { showTitle } = column.ellipsis

        // default true
        const isShowTitle = isBoolean(showTitle) ? showTitle : true

        content = (
          <span
            title={isShowTitle ? getTextContentOfVNode(content) : ''}
            style={this.getEllipsisContentStyle()}
            class={clsName('body-td-span-ellipsis')}
          >
            {content}
          </span>
        )
      }

      return content
    },

    // get chcekbox content
    getCheckboxContent() {
      if (this.column.type === COLUMN_TYPES.CHECKBOX) {
        // checkbox content props
        const checkboxProps = {
          column: this.column,
          checkboxOption: this.checkboxOption,
          rowKey: this.rowData[this.rowKeyFieldName],
          internalCheckboxSelectedRowKeys:
                            this.internalCheckboxSelectedRowKeys,
        }

        return <BodyCheckboxContent {...checkboxProps} />
      }
      return null
    },

    // get radio content
    getRadioContent() {
      if (this.column.type === COLUMN_TYPES.RADIO) {
        // radio props
        const radioProps = {
          column: this.column,
          radioOption: this.radioOption,
          rowKey: this.rowData[this.rowKeyFieldName],
          internalRadioSelectedRowKey:
                            this.internalRadioSelectedRowKey,
        }

        return <BodyRadioContent {...radioProps} />
      }
      return null
    },

    // get cell span
    getCellSpan() {
      const { cellSpanOption, rowData, column, rowIndex } = this
      let rowspan = 1
      let colspan = 1

      if (cellSpanOption) {
        const { bodyCellSpan } = cellSpanOption

        if (typeof bodyCellSpan === 'function') {
          const result = bodyCellSpan({
            row: rowData,
            column,
            rowIndex,
          })

          if (typeof result === 'object') {
            rowspan = result.rowspan
            colspan = result.colspan
          }
        }
      }

      return { rowspan, colspan }
    },
    // cell click
    cellClick(e, fn) {
      fn && fn(e)

      const { column, expandOption, rowData } = this

      this.dispatch(COMPS_NAME.VE_TABLE, EMIT_EVENTS.BODY_CELL_CLICK, {
        event: e,
        rowData,
        column,
      })

      if (column.type !== COLUMN_TYPES.EXPAND)
        return false

      if (expandOption) {
        const eventTargetName = e.target.nodeName

        const trigger = expandOption.trigger

        // expand row by click icon
        if (!trigger || trigger === EXPAND_TRIGGER_TYPES.ICON) {
          if (eventTargetName !== 'TD') {
            e.stopPropagation()
            this.$emit(EMIT_EVENTS.EXPAND_ROW_CHANGE)
          }
        }
        // expand row by click cell(td)
        else if (trigger === EXPAND_TRIGGER_TYPES.CELL) {
          e.stopPropagation()
          this.$emit(EMIT_EVENTS.EXPAND_ROW_CHANGE)
        }
      }
    },
    // dblclick
    cellDblclick(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.BODY_CELL_DOUBLE_CLICK,
        {
          event: e,
          rowData,
          column,
        },
      )
    },
    // contextmenu
    cellContextmenu(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.BODY_CELL_CONTEXTMENU,
        {
          event: e,
          rowData,
          column,
        },
      )
    },
    // mouseenter
    cellMouseenter(e, fn) {
      fn && fn(e)
    },
    // mouseleave
    cellMouseleave(e, fn) {
      fn && fn(e)
    },
    // mousemove
    cellMousemove(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.BODY_CELL_MOUSEMOVE,
        {
          event: e,
          rowData,
          column,
        },
      )
    },
    // mouseover
    cellMouseover(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.BODY_CELL_MOUSEOVER,
        {
          event: e,
          rowData,
          column,
        },
      )
    },
    // mousedown
    cellMousedown(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.BODY_CELL_MOUSEDOWN,
        {
          event: e,
          rowData,
          column,
        },
      )
    },
    // mouseup
    cellMouseup(e, fn) {
      fn && fn(e)

      const { column, rowData } = this

      this.dispatch(COMPS_NAME.VE_TABLE, EMIT_EVENTS.BODY_CELL_MOUSEUP, {
        event: e,
        rowData,
        column,
      })
    },
  },
  render(h) {
    const {
      column,
      cellClick,
      rowData,
      isExpandRow,
      expandOption,
      expandedRowkeys,
      rowKeyFieldName,
      eventCustomOption,
      rowIndex,
    } = this

    // expand icon props
    const expandIconProps = {
      rowData,
      column,
      expandOption,
      expandedRowkeys,
      rowKeyFieldName,
      cellClick,
    }

    const { rowspan, colspan } = this.getCellSpan()
    if (!rowspan || !colspan)
      return null

    // custom on cell event
    let customEvents: Record<string, any> = {}
    if (eventCustomOption) {
      const { bodyCellEvents } = eventCustomOption

      customEvents = bodyCellEvents
        ? bodyCellEvents({ row: rowData, column, rowIndex })
        : {}
    }

    const {
      click,
      dblclick,
      contextmenu,
      mouseenter,
      mouseleave,
      mousemove,
      mouseover,
      mousedown,
      mouseup,
    } = customEvents

    const events = {
      onClick: (e) => {
        this.cellClick(e, click)
      },
      onDblclick: (e) => {
        this.cellDblclick(e, dblclick)
      },
      onContextmenu: (e) => {
        this.cellContextmenu(e, contextmenu)
      },
      onMouseenter: (e) => {
        this.cellMouseenter(e, mouseenter)
      },
      onMouseleave: (e) => {
        this.cellMouseleave(e, mouseleave)
      },
      onMousemove: (e) => {
        this.cellMousemove(e, mousemove)
      },
      onMouseover: (e) => {
        this.cellMouseover(e, mouseover)
      },
      onMousedown: (e) => {
        this.cellMousedown(e, mousedown)
      },
      onMouseup: (e) => {
        this.cellMouseup(e, mouseup)
      },
    }

    // td props
    const tdProps = {
      class: this.bodyTdClass(),
      style: this.bodyTdStyle(),
      rowspan,
      colspan,
      [COMPS_CUSTOM_ATTRS.BODY_COLUMN_KEY]: column.key,
      ...events,
    }

    return (
      <td {...tdProps}>
        {/* expadn tr icon */}
        {isExpandRow && <ExpandTrIcon {...expandIconProps} />}
        {/* checkbox content */}
        {this.getCheckboxContent()}
        {/* radio content */}
        {this.getRadioContent()}
        {/* other cell content */}
        {this.getRenderContent(h)}
      </td>
    )
  },
})
