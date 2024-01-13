<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '行多选配置',
    },
    desc: {
      type: String,
      default: 'checkboxOption',
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
      :table-data="db.checkboxOption.data"
      :columns="db.checkboxOption.columns"
    />
  </div>
</template>
