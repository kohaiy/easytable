<script>
import Explain from './explain.md'
import Base from './base.md'
import HeaderFixedDisabled from './header-fixed-disabled.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Base,
    HeaderFixedDisabled,
  },
}
</script>

<template>
  <div>
    <h2>Header Fixed</h2>
    <Explain />
    <Base />
    <HeaderFixedDisabled />
  </div>
</template>
