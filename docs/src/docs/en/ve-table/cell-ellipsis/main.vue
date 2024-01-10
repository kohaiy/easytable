<script>
import API from '../api/column-props/ellipsis-props.vue'
import Explain from './explain.md'
import Base from './base.md'
import Ellipsis from './ellipsis.md'
import EllipsisLine from './ellipsis-line.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Base,
    Ellipsis,
    EllipsisLine,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Cell Ellipsis</h2>
    <Explain />
    <Base />
    <Ellipsis />
    <EllipsisLine />

    <API title="API" anchor="API" desc="ellipsis option" />
  </div>
</template>
