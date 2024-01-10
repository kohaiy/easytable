import { computed, defineComponent } from 'vue'
import emitter from '@easytable/common/mixins/emitter'
import VueDomResizeObserver from '@easytable/common/comps/resize-observer'
import { isEmptyValue } from '@easytable/common/utils'
import { clsName } from '../util'
import { COMPS_CUSTOM_ATTRS, COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import BodyTd from './body-td'

export default defineComponent({
  name: COMPS_NAME.VE_TABLE_BODY_TR,
  mixins: [emitter],
  props: {
    rowData: {
      type: Object,
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
    columnCollection: {
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
    // expand row change
    expandRowChange: {
      type: Function,
      default: null,
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
    // is virtual scroll
    isVirtualScroll: {
      type: Boolean,
      default: false,
    },
    // cell style option
    cellStyleOption: {
      type: Object,
      default() {
        return null
      },
    },
    // highlight row key
    highlightRowKey: {
      type: [String, Number],
      default: null,
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

  setup(props) {
    const {
      colgroups,
      expandOption,
      expandRowChange,
      isExpandRow,
      expandedRowkeys,
      checkboxOption,
      rowKeyFieldName,
      rowIndex,
      rowData,
      internalCheckboxSelectedRowKeys,
      internalRadioSelectedRowKey,
      radioOption,
      cellStyleOption,
      eventCustomOption,
    } = props

    // current row key
    const currentRowKey = computed(() => {
      const { rowKeyFieldName } = props
      return rowKeyFieldName ? this.rowData[rowKeyFieldName] : null
    })
    // tr class
    const trClass = computed(() => {
      let result = null

      const { highlightRowKey } = props

      let isHighlight = false

      if (!isEmptyValue(highlightRowKey)) {
        if (highlightRowKey === currentRowKey.value)
          isHighlight = true
      }

      result = {
        [clsName('body-tr')]: true,
        [clsName('tr-highlight')]: isHighlight,
      }

      return result
    })

    // get td content
    const getTdContent = () => {
      return colgroups.map((column) => {
        const tdProps = {
          key: column.key,
          rowIndex,
          rowData,
          column,
          columnCollection: props.columnCollection,
          colgroups,
          expandOption,
          expandedRowkeys,
          checkboxOption,
          rowKeyFieldName,
          allRowKeys: props.allRowKeys,
          isExpandRow,
          internalCheckboxSelectedRowKeys,
          internalRadioSelectedRowKey,
          radioOption,
          cellStyleOption,
          cellSpanOption: props.cellSpanOption,
          eventCustomOption,
          cellSelectionData: props.cellSelectionData,
          cellSelectionRangeData: props.cellSelectionRangeData,
          bodyIndicatorRowKeys: props.bodyIndicatorRowKeys,
          editOption: props.editOption,
          on: {
            [EMIT_EVENTS.EXPAND_ROW_CHANGE]: () =>
              expandRowChange(rowData, rowIndex),
          },
        }
        return <BodyTd {...tdProps} />
      })
    }

    let result = null

    // custom on row event
    let customEvents = {}
    if (eventCustomOption) {
      const { bodyRowEvents } = eventCustomOption
      customEvents = bodyRowEvents
        ? bodyRowEvents({ row: rowData, rowIndex })
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
      click: (e) => {
        this.rowClick(e, click)
      },
      dblclick: (e) => {
        this.rowDblclick(e, dblclick)
      },
      contextmenu: (e) => {
        this.rowContextmenu(e, contextmenu)
      },
      mouseenter: (e) => {
        this.rowMouseenter(e, mouseenter)
      },
      mouseleave: (e) => {
        this.rowMouseleave(e, mouseleave)
      },
      mousemove: (e) => {
        this.rowMousemove(e, mousemove)
      },
      mouseover: (e) => {
        this.rowMouseover(e, mouseover)
      },
      mousedown: (e) => {
        this.rowMousedown(e, mousedown)
      },
      mouseup: (e) => {
        this.rowMouseup(e, mouseup)
      },
    }

    if (props.isVirtualScroll) {
      const props = {
        class: trClass.value,
        tagName: 'tr',
        id: currentRowKey.value,
        attrs: {
          [COMPS_CUSTOM_ATTRS.BODY_ROW_KEY]: currentRowKey.value,
        },
        onOnDomResizeChange: ({ key, height }) => {
          this.dispatch(
            COMPS_NAME.VE_TABLE,
            EMIT_EVENTS.BODY_ROW_HEIGHT_CHANGE,
            {
              rowKey: key,
              height,
            },
          )
        },
        nativeOn: events,
      }

      result = (
        <VueDomResizeObserver {...props}>
          {getTdContent()}
        </VueDomResizeObserver>
      )
    }
    else {
      const props = {
        class: trClass.value,
        attrs: {
          [COMPS_CUSTOM_ATTRS.BODY_ROW_KEY]: currentRowKey.value,
        },
        on: events,
      }

      result = <tr {...props}>{getTdContent()}</tr>
    }

    return () => result
  },

  methods: {
    // click
    rowClick(e, fn) {
      fn && fn(e)

      const { rowData, rowIndex } = this

      this.dispatch(
        COMPS_NAME.VE_TABLE_BODY,
        EMIT_EVENTS.BODY_ROW_CLICK,
        {
          rowData,
          rowIndex,
        },
      )
    },
    // dblclick
    rowDblclick(e, fn) {
      fn && fn(e)
    },
    // contextmenu
    rowContextmenu(e, fn) {
      fn && fn(e)
    },
    // mouseenter
    rowMouseenter(e, fn) {
      fn && fn(e)
    },
    // mouseleave
    rowMouseleave(e, fn) {
      fn && fn(e)
    },
    // mousemove
    rowMousemove(e, fn) {
      fn && fn(e)
    },
    // mouseover
    rowMouseover(e, fn) {
      fn && fn(e)
    },
    // mousedown
    rowMousedown(e, fn) {
      fn && fn(e)
    },
    // mouseup
    rowMouseup(e, fn) {
      fn && fn(e)
    },
  },
})
