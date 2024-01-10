<script>
import Explain from './explain.md'
import AutoWidth from './auto-width.md'
import FixedWidth from './fixed-width.md'
import CalcWidth from './calc-width.md'
import PercentWidth from './percent-width.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    AutoWidth,
    FixedWidth,
    CalcWidth,
    PercentWidth,
  },
}
</script>

<template>
  <div>
    <h2>Table Width</h2>
    <Explain />
    <AutoWidth />
    <FixedWidth />
    <CalcWidth />
    <PercentWidth />
  </div>
</template>
