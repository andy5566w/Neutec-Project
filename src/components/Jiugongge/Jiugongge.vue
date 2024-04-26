<template>
  <div class="container">
    <div class="box" v-for="n in 9" :key="n"></div>
  </div>
</template>
<script setup></script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 10px;
  height: 90vh;
  align-content: end;
  .box {
    height: 100px;
    border: black solid 2px;
    background: radial-gradient(
      circle,
      rgba(113, 81, 95, 1) 81%,
      rgba(0, 0, 0, 1) 100%
    );

    @for $i from 1 through 9 {
      @if ($i == 3 or $i == 5 or $i == 9) {
        &:nth-child(#{$i}) {
          animation: flash 0.5s ease-in infinite alternate;
          animation-delay: #{$i * 0.1}s;
        }
      }
    }
  }
}

@keyframes flash {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}
</style>
