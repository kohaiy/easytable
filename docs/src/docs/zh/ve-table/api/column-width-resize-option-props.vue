<script lang="ts">
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '列宽改变配置',
    },
    desc: {
      type: String,
      default: 'columnWidthResizeOption',
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
      :table-data="db.columnWidthResizeOption.data"
      :columns="db.columnWidthResizeOption.columns"
    />
  </div>
</template>
