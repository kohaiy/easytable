<script>
import API from '../api/sort-option-props.vue'
import Explain from './explain.md'
import SingleSort from './single-sort.md'
import MultiSort from './multi-sort.md'
import SortAlways from './sort-always.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    SingleSort,
    MultiSort,
    SortAlways,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Sort</h2>
    <Explain />
    <SingleSort />
    <MultiSort />
    <SortAlways />
    <API title="API" anchor="API" desc="sortOption Sort option" />
  </div>
</template>
