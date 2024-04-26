<template>
  <div
    class="ball"
    :style="{
      bottom: bottom + 'px',
      left: left + 'px',
      '--posX': posX - left + 'px',
      '--posY': posY + bottom + 'px',
    }"
  ></div>
</template>
<script setup>
defineProps({
  bottom: {
    type: Number,
    default: () => 50,
  },
  left: {
    type: Number,
    default: () => 0,
  },
  posX: {
    type: Number,
    default: () => 100,
  },
  posY: {
    type: Number,
    default: () => 100,
  },
})
</script>

<style scoped lang="scss">
.ball {
  --posX: 0;
  --posY: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #a5f12b;
  position: absolute;
  animation: moving 1s ease-in infinite alternate;
}

@keyframes moving {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(var(--posX), var(--posY));
  }
}
</style>
