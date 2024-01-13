<script>
import API from '../api/column-hidden-option-props.vue'
import Explain from './explain.md'
import DefaultHiddenColumnKeys from './default-hidden-column.md'
import InstanceMethods from './instance-methods.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    DefaultHiddenColumnKeys,
    InstanceMethods,
    API,
  },
}
</script>

<template>
  <div>
    <h2>列隐藏</h2>
    <Explain />
    <DefaultHiddenColumnKeys />
    <InstanceMethods />
    <API title="API" anchor="API" desc="columnHidden 列隐藏配置" />
  </div>
</template>
