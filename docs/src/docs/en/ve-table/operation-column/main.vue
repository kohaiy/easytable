<script>
import Explain from './explain.md'
import Base from './base.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Base,
  },
}
</script>

<template>
  <div>
    <h2>Operation Column</h2>
    <Explain />
    <Base />
  </div>
</template>
