<script>
import { db } from './db'
import TableProps from './table-props.vue'
import ColumnProps from './column-props/index.vue'
import InstanceMethods from './instance-methods.vue'
import ExpandOption from './expand-option-props.vue'
import CheckboxOption from './checkbox-option-props.vue'
import RadioOption from './radio-option-props.vue'
import VirtualScrollOption from './virtual-scroll-option-props.vue'
import SortOption from './sort-option-props.vue'
import CellSpanOption from './cell-span-option-props.vue'
import EventCustomOption from './event-custom-option-props.vue'
import ColumnHiddenOption from './column-hidden-option-props.vue'
import CellStyleOption from './cell-style-option-props.vue'
import RowStyleOption from './row-style-option-props.vue'
import CellSelectionOption from './cell-selection-option-props.vue'
import EditOption from './edit-option-props.vue'
import contextmenuHeaderOption from './contextmenu-header-option-props.vue'
import contextmenuBodyOption from './contextmenu-body-option-props.vue'
import cellAutofillOption from './cell-autofill-option-props.vue'
import clipboardOption from './clipboard-option-props.vue'
import columnWidthResizeOption from './column-width-resize-option-props.vue'

export default {
  components: {
    TableProps,
    ColumnProps,
    InstanceMethods,
    CellSpanOption,
    EventCustomOption,
    ColumnHiddenOption,
    CellStyleOption,
    RowStyleOption,
    ExpandOption,
    CheckboxOption,
    RadioOption,
    VirtualScrollOption,
    SortOption,
    CellSelectionOption,
    EditOption,
    ContextmenuHeaderOption: contextmenuHeaderOption,
    ContextmenuBodyOption: contextmenuBodyOption,
    CellAutofillOption: cellAutofillOption,
    ClipboardOption: clipboardOption,
    ColumnWidthResizeOption: columnWidthResizeOption,
  },
  data() {
    return {
      db,
    }
  },
}
</script>

<template>
  <div class="mb100">
    <h2>API</h2>
    <!-- table props -->
    <TableProps />
    <!-- columns -->
    <ColumnProps />
    <!-- instance methods -->
    <InstanceMethods />
    <!-- cell Span Option -->
    <CellSpanOption />
    <!-- column hidden Option -->
    <ColumnHiddenOption />
    <!-- cell Style Option -->
    <CellStyleOption />
    <!-- Row Style Option -->
    <RowStyleOption />
    <!-- expand Option -->
    <ExpandOption />
    <!-- checkbox Option -->
    <CheckboxOption />
    <!-- radio Option -->
    <RadioOption />
    <!-- virtual Scroll Option -->
    <VirtualScrollOption />
    <!-- sort Option -->
    <SortOption />
    <!-- Cell Selection Option -->
    <CellSelectionOption />
    <!-- edit Option -->
    <EditOption />
    <!-- contextmenu header option -->
    <ContextmenuHeaderOption />
    <!-- contextmenu body option -->
    <ContextmenuBodyOption />
    <!-- Event Custom Option -->
    <EventCustomOption />
    <!-- Cell Autofill Option -->
    <CellAutofillOption />
    <!-- Clipboard Option -->
    <ClipboardOption />
    <!-- Clipboard Option -->
    <ColumnWidthResizeOption />
  </div>
</template>
