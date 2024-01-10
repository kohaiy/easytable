<script>
import API from '../api/column-props/filter-custom-props.vue'
import Explain from './explain.md'
import SingleFilter from './single-filter.md'
import CustomIcon from './custom-icon.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    SingleFilter,
    CustomIcon,
    API,
  },
}
</script>

<template>
  <div>
    <h2>Filter Custom</h2>
    <Explain />
    <SingleFilter />
    <CustomIcon />
    <API
      title="API"
      anchor="API"
      desc="filterCustom Custom filter option"
    />
  </div>
</template>
