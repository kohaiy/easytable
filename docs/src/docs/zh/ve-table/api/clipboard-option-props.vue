<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '剪贴板配置',
    },
    desc: {
      type: String,
      default: 'clipboardOption',
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
      :table-data="db.clipboardOption.data"
      :columns="db.clipboardOption.columns"
    />
  </div>
</template>
