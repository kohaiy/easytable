<script>
import FooterSummary from '../footer-summary/virtual-scroll.md'
import API from '../api/virtual-scroll-option-props.vue'
import Explain from './explain.md'
import Base from './base.md'
import AutoHeight from './auto-height.md'
import RowCheckbox from './row-checkbox.md'
import RowRadio from './row-radio.md'
import RowExpand from './row-expand.md'
import RowExpandTable from './row-expand-table.md'
import ColumnFixed from './column-fixed.md'
import RowIndex from './row-index.md'
import CombineLazyLoad from './combine-lazy-load.md'
import DynamicEnable from './dynamic-enable.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Base,
    AutoHeight,
    RowCheckbox,
    RowRadio,
    RowExpand,
    RowExpandTable,
    ColumnFixed,
    FooterSummary,
    RowIndex,
    CombineLazyLoad,
    DynamicEnable,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Virtual Scroll</h2>
    <Explain />
    <Base />
    <AutoHeight />
    <RowIndex />
    <RowCheckbox />
    <RowRadio />
    <RowExpand />
    <RowExpandTable />
    <ColumnFixed />
    <FooterSummary />
    <CombineLazyLoad />
    <DynamicEnable />
    <API title="API" anchor="API" desc="virtualScrollOption option" />
  </div>
</template>
