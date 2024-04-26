<template>
  <div class="ball-pool">
    <ball v-for="ball in $store.state.Ball.balls" v-bind="ball" />
  </div>
</template>
<script setup>
import Ball from '@/components/Jiugongge/Ball.vue'
</script>
<style scoped lang="scss">
.ball-pool {
  position: absolute;
  padding: 0 10px;
  height: 100vh;
  top: 0;
  pointer-events: none;
}
</style>
