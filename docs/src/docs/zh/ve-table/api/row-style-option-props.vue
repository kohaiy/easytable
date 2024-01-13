<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '行样式配置',
    },
    desc: {
      type: String,
      default: 'rowStyleOption',
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
      :table-data="db.rowStyleOption.data"
      :columns="db.rowStyleOption.columns"
    />
  </div>
</template>
