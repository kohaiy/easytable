<script>
import API1 from '../api/contextmenu-header-option-props'
import API2 from '../api/contextmenu-body-option-props'
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
    <h2>Contextmenu</h2>
    <Explain />
    <ContextmenuTypes />
    <Base />
    <Custom />
    <API1
      anchor="API contextmenuHeaderOption"
      desc="contextmenuHeaderOption"
    />
    <API2 anchor="API contextmenuBodyOption" desc="contextmenuBodyOption" />
  </div>
</template>
