<script>
import { db } from '../db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '筛选自定义',
    },
    desc: {
      type: String,
      default: 'filterCustom',
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
      :table-data="db.columns.filterCustomProps.data"
      :columns="db.columns.filterCustomProps.columns"
    />
  </div>
</template>
