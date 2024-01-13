<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: 'body 右键菜单配置',
    },
    desc: {
      type: String,
      default: 'contextmenuBodyOption',
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
      :table-data="db.contextmenuBodyOption.data"
      :columns="db.contextmenuBodyOption.columns"
    />
  </div>
</template>
