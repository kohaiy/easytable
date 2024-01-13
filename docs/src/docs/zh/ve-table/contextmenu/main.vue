<script>
import API1 from '../api/contextmenu-header-option-props.vue'
import API2 from '../api/contextmenu-body-option-props.vue'
import Explain from './explain.md'
import ContextmenuTypes from './contextmenu-types.md'
import Base from './base.md'
import Custom from './custom.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    ContextmenuTypes,
    Base,
    Custom,
    API1,
    API2,
  },
}
</script>

<template>
  <div>
    <h2>右键菜单</h2>
    <Explain />
    <ContextmenuTypes />
    <Base />
    <Custom />
    <API1
      anchor="API contextmenuHeaderOption"
      desc="contextmenuHeaderOption header 右键菜单配置"
    />
    <API2
      anchor="API contextmenuBodyOption"
      desc="contextmenuBodyOption body 右键菜单配置"
    />
  </div>
</template>
