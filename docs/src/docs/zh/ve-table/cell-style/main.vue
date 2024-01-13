<script>
import FooterRowStyle from '../footer-summary/cell-style.md'
import API from '../api/cell-style-option-props.vue'
import Explain from './explain.md'
import BodyCellStyle from './body-cell-style.md'
import BodyRowStyle from './body-row-style.md'
import HeaderCellStyle from './header-cell-style.md'
import HeaderRowStyle from './header-row-style.md'

export default {
  name: 'CustomCell',
  components: {
    Explain,
    BodyCellStyle,
    BodyRowStyle,
    HeaderCellStyle,
    HeaderRowStyle,
    FooterRowStyle,
    API,
  },
}
</script>

<template>
  <div>
    <h2>单元格样式</h2>
    <Explain />
    <BodyCellStyle />
    <BodyRowStyle />
    <HeaderCellStyle />
    <HeaderRowStyle />
    <FooterRowStyle />
    <API title="API" anchor="API" desc="cellStyleOption 单元格样式配置" />
  </div>
</template>
