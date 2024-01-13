<script>
import API from '../api/clipboard-option-props.vue'
import Explain from './explain.md'
import ShortCuts from './shortcuts.md'
import Base from './base.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    ShortCuts,
    Base,
    API,
  },
}
</script>

<template>
  <div>
    <h2>剪贴板</h2>
    <Explain />
    <ShortCuts />
    <Base />
    <API title="API" anchor="API" desc="clipboardOption 剪贴板配置" />
  </div>
</template>
