<script>
import Explain from './explain.md'
import Basic from './basic.md'
import Checkbox from './checkbox.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Basic,
    Checkbox,
  },
}
</script>

<template>
  <div>
    <h2>结合分页</h2>
    <Explain />
    <Basic />
    <Checkbox />
  </div>
</template>
