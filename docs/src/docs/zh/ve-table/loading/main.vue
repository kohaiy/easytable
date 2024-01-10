<script>
import Explain from './explain.md'
import Basic from './basic.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Basic,
  },
}
</script>

<template>
  <div>
    <h2>结合 Loading 组件</h2>
    <Explain />
    <Basic />
  </div>
</template>
