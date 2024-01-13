<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: 'Cell selection option',
    },
    desc: {
      type: String,
      default: 'cellSelectionOption',
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
      :table-data="db.cellSelectionOption.data"
      :columns="db.cellSelectionOption.columns"
    />
  </div>
</template>
