<script>
import checkboxSingle from './checkbox-single.md'
import checkboxMultipleSimple from './checkbox-multiple-simple.md'
import checkboxMultipleAdvanced from './checkbox-multiple-advanced.md'
import API from './api.md'

export default {
  components: {
    CheckboxSingle: checkboxSingle,
    CheckboxMultipleAdvanced: checkboxMultipleAdvanced,
    CheckboxMultipleSimple: checkboxMultipleSimple,
    API,
  },
}
</script>

<template>
  <div>
    <div>
      <anchor label="单选功能" />
      <CheckboxSingle />
    </div>
    <div>
      <anchor label="多选功能普通用法" />
      <CheckboxMultipleSimple />
    </div>
    <div>
      <anchor label="多选功能高级用法" />
      <CheckboxMultipleAdvanced />
    </div>
    <API />
  </div>
</template>
