<script>
import API from '../api/checkbox-option-props.vue'
import Explain from './explain.md'
import Base from './base.md'
import SelectedDefault from './selected-default.md'
import SelectedColumn from './selected-column.md'
import SelectedDisable from './selected-disable.md'
import SelectedControl from './selected-control.md'
import SelectedRowClick from './selected-row-click.md'
import SelectedAllHide from './selected-all-hide.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Base,
    SelectedDefault,
    SelectedColumn,
    SelectedDisable,
    SelectedControl,
    SelectedRowClick,
    SelectedAllHide,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Row Checkbox</h2>
    <Explain />
    <Base />
    <SelectedColumn />
    <SelectedDefault />
    <SelectedDisable />
    <SelectedControl />
    <SelectedRowClick />
    <SelectedAllHide />
    <API title="API" anchor="API" desc="checkboxOption option" />
  </div>
</template>
