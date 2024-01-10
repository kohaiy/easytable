<script>
import performance from './performance.md'

export default {
  name: 'Test',
  components: {
    Performance: performance,
  },
}
</script>

<template>
  <div>
    <h2>测试</h2>

    <!--  <div>
            <anchor label="性能测试" />
            <performance />
        </div> -->
    <div>
      <anchor label="性能测试" />
      <Performance />
    </div>
  </div>
</template>
