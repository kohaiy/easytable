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
    <h2>操作列</h2>
    <Explain />
    <Base />
  </div>
</template>
