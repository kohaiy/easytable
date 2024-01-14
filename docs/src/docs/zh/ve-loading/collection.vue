<script lang="ts">
export default defineComponent({
  data() {
    return {
      SPIN_NAMES: [
        'plane',
        'grid',
        'wave',
        'flow',
        'bounce',
        'pulse',
      ] as const,
    }
  },
  mounted() {
    this.SPIN_NAMES.forEach((spinName) => {
      this.$veLoading({
        target: `#loading-${spinName}`,
        name: spinName,
      }).show()
    })
  },
})
</script>

<template>
  <anchor label="loading 集合" :is-edit="false">
    <div class="loading-container">
      <div
        v-for="name in Object.values(SPIN_NAMES)"
        :key="name"
        class="loading-item"
      >
        <div :id="`loading-${name}`" class="loading-item-spin" />
        <span class="loading-name">{{ name }}</span>
      </div>
    </div>
  </anchor>
</template>

<style lang="less" scoped>
.loading-container {
    display: flex;
    flex-wrap: wrap;

    .loading-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;

        .loading-name {
            display: inline-block;
            margin-top: 30px;
            height: 30px;
            color: #99a9bf;
        }
    }
}
</style>
