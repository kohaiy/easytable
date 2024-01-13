<script>
import API from '../api/cell-autofill-option-props.vue'
import Explain from './explain.md'
import Base from './base.md'
import AutofillDirection from './autofill-direction.md'

export default {
  name: 'CellSelection',
  components: {
    Explain,
    Base,
    AutofillDirection,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Cell Autofill</h2>
    <Explain />
    <Base />
    <AutofillDirection />
    <API title="API" anchor="API" />
  </div>
</template>
