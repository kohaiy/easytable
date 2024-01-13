<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: 'Header contextmenu option',
    },
    desc: {
      type: String,
      default: 'contextmenuHeaderOption',
    },
  },
  data() {
    return {
      db,
    }
  },
}
</script>

<template>
  <div>
    <Tpl
      :desc="desc"
      :anchor="anchor"
      :table-data="db.contextmenuHeaderOption.data"
      :columns="db.contextmenuHeaderOption.columns"
    />
  </div>
</template>
