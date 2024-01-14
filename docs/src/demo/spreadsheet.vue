<script lang="tsx" setup>
import { computed, reactive } from 'vue'
import locale from '../comp/locale'
import useI18n from '../comp/mixins/i18n-mixins'

const COLUMN_KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const { currentDocLang } = useI18n()

const state = reactive({
  // start row index
  startRowIndex: 0,
  columnWidthResizeOption: {
    enable: true,
  },
  virtualScrollOption: {
    // 是否开启
    enable: true,
    scrolling,
  },
  cellAutofillOption: {
    directionX: true,
    directionY: true,
    beforeAutofill: ({
      direction,
      sourceSelectionRangeIndexes,
      targetSelectionRangeIndexes,
      sourceSelectionData,
      targetSelectionData,
    }) => {},
    afterAutofill: ({
      direction,
      sourceSelectionRangeIndexes,
      targetSelectionRangeIndexes,
      sourceSelectionData,
      targetSelectionData,
    }) => {},
  },
  // edit option 可控单元格编辑
  editOption: {
    beforeCellValueChange: ({ row, column, changeValue }) => {},
    afterCellValueChange: ({ row, column, changeValue }) => {},
  },
  // contextmenu header option
  contextmenuHeaderOption: {
    /*
                    before contextmenu show.
                    In this function,You can change the `contextmenu` options
                    */
    beforeShow: ({
      isWholeColSelection,
      selectionRangeKeys,
      selectionRangeIndexes,
    }) => {
      //
    },
    // after menu click
    afterMenuClick: ({
      type,
      selectionRangeKeys,
      selectionRangeIndexes,
    }) => {
      //
    },

    // contextmenus
    contextmenus: [
      {
        type: 'CUT',
      },
      {
        type: 'COPY',
      },
      {
        type: 'SEPARATOR',
      },
      {
        type: 'EMPTY_COLUMN',
      },
      {
        type: 'SEPARATOR',
      },
      {
        type: 'LEFT_FIXED_COLUMN_TO',
      },
      {
        type: 'CANCEL_LEFT_FIXED_COLUMN_TO',
      },
      {
        type: 'RIGHT_FIXED_COLUMN_TO',
      },
      {
        type: 'CANCEL_RIGHT_FIXED_COLUMN_TO',
      },
    ],
  },

  // contextmenu body option
  contextmenuBodyOption: {
    /*
                    before contextmenu show.
                    In this function,You can change the `contextmenu` options
                    */
    beforeShow: ({
      isWholeRowSelection,
      selectionRangeKeys,
      selectionRangeIndexes,
    }) => {
      console.log('---contextmenu body beforeShow--')
      console.log('isWholeRowSelection::', isWholeRowSelection)
      console.log('selectionRangeKeys::', selectionRangeKeys)
      console.log(
        'selectionRangeIndexes::',
        selectionRangeIndexes,
      )
    },
    // after menu click
    afterMenuClick: ({
      type,
      selectionRangeKeys,
      selectionRangeIndexes,
    }) => {
      console.log('---contextmenu body afterMenuClick--')
      console.log('type::', type)
      console.log('selectionRangeKeys::', selectionRangeKeys)
      console.log(
        'selectionRangeIndexes::',
        selectionRangeIndexes,
      )
    },

    // contextmenus
    contextmenus: [
      {
        type: 'CUT',
      },
      {
        type: 'COPY',
      },
      {
        type: 'SEPARATOR',
      },
      {
        type: 'INSERT_ROW_ABOVE',
      },
      {
        type: 'INSERT_ROW_BELOW',
      },
      {
        type: 'SEPARATOR',
      },
      {
        type: 'REMOVE_ROW',
      },
      {
        type: 'EMPTY_ROW',
      },
      {
        type: 'EMPTY_CELL',
      },
    ],
  },
  rowStyleOption: {
    clickHighlight: false,
    hoverHighlight: false,
  },
  tableData: [] as any[],
})

// current local
const currentLocal = computed(() => {
  return locale[currentDocLang.value].completeDemo.demo2
})
const columns = computed(() => {
  const columns = [
    {
      field: 'index',
      key: 'index',
      // is operation column
      operationColumn: true,
      title: '',
      width: 55,
      fixed: 'left',
      renderBodyCell: renderRowIndex,
    },
    ...COLUMN_KEYS.map((keyValue) => {
      return {
        title: keyValue,
        field: keyValue,
        key: keyValue,
        width: 90,
        edit: true,
      }
    }),
  ]

  return columns
})
initTableData()
// render row index
function renderRowIndex({ row, column, rowIndex }) {
  return <span>{rowIndex + state.startRowIndex + 1}</span>
}
function scrolling({
  startRowIndex,
  visibleStartIndex,
  visibleEndIndex,
  visibleAboveCount,
  visibleBelowCount,
}) {
  state.startRowIndex = startRowIndex
}
function initTableData() {
  const tableData: Record<string, string | number>[] = []
  for (let i = 0; i < 5000; i++) {
    const dataItem: Record<string, string | number> = {
      rowKey: i,
    }

    COLUMN_KEYS.forEach((keyValue) => {
      dataItem[keyValue] = ''
    })

    if (i === 1 || i === 3) {
      dataItem.C = 'YOU'
      dataItem.D = 'CAN'
      dataItem.E = 'TRY'
      dataItem.F = 'ENTER'
      dataItem.G = 'SOME'
      dataItem.H = 'WORDS'
      dataItem.I = '!!!'
    }

    tableData.push(dataItem)
  }

  state.tableData = tableData
}
</script>

<template>
  <div class="spreadsheet">
    <div>
      {{ currentLocal.description }}
      <br>
      <br>
    </div>
    <ve-table
      style="word-break: break-word"
      fixed-header
      :scroll-width="0"
      :max-height="500"
      border-y
      :columns="columns"
      :table-data="state.tableData"
      row-key-field-name="rowKey"
      :virtual-scroll-option="state.virtualScrollOption"
      :cell-autofill-option="state.cellAutofillOption"
      :edit-option="state.editOption"
      :contextmenu-body-option="state.contextmenuBodyOption"
      :contextmenu-header-option="state.contextmenuHeaderOption"
      :row-style-option="state.rowStyleOption"
      :column-width-resize-option="state.columnWidthResizeOption"
    />
  </div>
</template>

<style lang="less">
.spreadsheet {
    padding: 0 100px;
    margin: 30px 0;
}
</style>
