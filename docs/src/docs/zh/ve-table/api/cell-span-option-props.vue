<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '单元格合并配置',
    },
    desc: {
      type: String,
      default: 'cellSpanOption',
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
      :table-data="db.cellSpanOption.data"
      :columns="db.cellSpanOption.columns"
    />
  </div>
</template>
