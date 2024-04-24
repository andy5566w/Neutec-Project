<template>
  <button class="SideBarButton" @click="handleHandleClick">
    <span></span>
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
.SideBarButton {
  --line-width: 40%;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 1px;
    width: var(--line-width);
    background-color: black;
    transform: translate(-50%, -50%);
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: black;
    height: 1px;
    width: var(--line-width);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:after {
    bottom: 25%;
  }

  &:before {
    top: 25%;
  }
}
</style>
