<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: '实例方法',
    },
    desc: {
      type: String,
      default: 'Table instance methods',
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
      :table-data="db.instanceMethods.data"
      :columns="db.instanceMethods.columns"
    />
  </div>
</template>
