<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '虚拟滚动配置',
    },
    desc: {
      type: String,
      default: 'virtualScrollOption',
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
      :table-data="db.virtualScrollOption.data"
      :columns="db.virtualScrollOption.columns"
    />
  </div>
</template>
