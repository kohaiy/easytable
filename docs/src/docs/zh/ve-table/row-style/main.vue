<script>
import API from '../api/row-style-option-props.vue'
import Explain from './explain.md'
import RowStripe from './row-stripe.md'
import HoverHighlight from './hover-highlight.md'
import ClickHighlight from './click-highlight.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    RowStripe,
    HoverHighlight,
    ClickHighlight,
    API,
  },
}
</script>

<template>
  <div>
    <h2>行样式</h2>
    <Explain />
    <RowStripe />
    <HoverHighlight />
    <ClickHighlight />
    <API title="API" anchor="API" desc="rowStyleOption 行样式配置" />
  </div>
</template>
