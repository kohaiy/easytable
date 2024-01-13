<script>
import { db } from '../db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: 'Filter',
    },
    desc: {
      type: String,
      default: 'filter',
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
      :table-data="db.columns.filterProps.data"
      :columns="db.columns.filterProps.columns"
    />
  </div>
</template>
