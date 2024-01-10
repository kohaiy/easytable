<script lang="ts" setup>
import API from '../api/column-props/ellipsis-props.vue'
import Explain from './explain.md'
import Base from './base.md'
import Ellipsis from './ellipsis.md'
import EllipsisLine from './ellipsis-line.md'

defineOptions({
  name: 'BasicMain',
})
</script>

<template>
  <div>
    <h2>单元格省略</h2>
    <Explain />
    <Base />
    <Ellipsis />
    <EllipsisLine />

    <API title="API" anchor="API" desc="ellipsis 单元格省略配置" />
  </div>
</template>
