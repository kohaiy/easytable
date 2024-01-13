<script>
import { db } from './db'
import tpl from '@/comp/api-tpl.vue'

export default {
  components: { Tpl: tpl },
  props: {
    anchor: {
      type: String,
      default: 'Cell Autofill Option',
    },
    desc: {
      type: String,
      default: 'cellAutofillOption',
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
      :table-data="db.cellAutofillOption.data"
      :columns="db.cellAutofillOption.columns"
    />
  </div>
</template>
