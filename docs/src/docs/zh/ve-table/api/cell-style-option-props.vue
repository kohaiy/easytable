<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '单元格样式配置',
    },
    desc: {
      type: String,
      default: 'cellStyleOption',
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
      :table-data="db.cellStyleOption.data"
      :columns="db.cellStyleOption.columns"
    />
  </div>
</template>
