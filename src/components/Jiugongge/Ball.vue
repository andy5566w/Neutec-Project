<template>
  <div
    class="ball"
    :style="{ bottom: bottom + 'px', '--distance': distance + 'px' }"
  ></div>
</template>
<script setup>
defineProps({
  bottom: {
    type: Number,
    default: () => 50,
  },
  distance: {
    type: Number,
    default: () => 100,
  },
})
</script>

<style scoped lang="scss">
.ball {
  --distance: 300;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #a5f12b;
  position: absolute;
  animation: moving 1s ease-in infinite alternate;
  transform: translateX(var(--distance));
}

@keyframes moving {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(var(--distance));
  }
}
</style>
