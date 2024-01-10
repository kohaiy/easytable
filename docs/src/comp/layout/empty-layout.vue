<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div>
    <keep-alive>
      <router-view v-if="route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!route.meta.keepAlive" />
  </div>
</template>
