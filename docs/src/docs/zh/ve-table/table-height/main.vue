<script>
import Explain from './explain.md'
import AutoHeight from './auto-height.md'
import FixedHeight from './fixed-height.md'
import CalcHeight from './calc-height.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    AutoHeight,
    FixedHeight,
    CalcHeight,
  },
}
</script>

<template>
  <div>
    <h2>表格高度</h2>
    <Explain />
    <AutoHeight />
    <FixedHeight />
    <CalcHeight />
  </div>
</template>
