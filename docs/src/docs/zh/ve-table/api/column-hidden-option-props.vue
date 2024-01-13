<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '列隐藏配置',
    },
    desc: {
      type: String,
      default: 'columnHiddenOption',
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
      :table-data="db.columnHiddenOption.data"
      :columns="db.columnHiddenOption.columns"
    />
  </div>
</template>
