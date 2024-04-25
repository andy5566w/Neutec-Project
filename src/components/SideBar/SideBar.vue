<template>
  <div
    class="overlay"
    :class="{ active: $store.state.Sidebar.isOpenSidebar }"
    @click="$store.dispatch('Sidebar/toggleSidebar')"
  ></div>
  <div class="SideBar" :class="{ active: $store.state.Sidebar.isOpenSidebar }">
    side bar123
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  visibility: hidden;

  &.active {
    visibility: visible;
  }
}
.SideBar {
  position: fixed;
  right: 0;
  height: 100%;
  background-color: rgba(black, 50%);
  transition: transform 0.2s ease-in;
  transform: translateX(100%);

  &.active {
    transform: translateX(0);
  }
}
</style>
