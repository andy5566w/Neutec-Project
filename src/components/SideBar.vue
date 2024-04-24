<template>
  <div class="SideBar" :class="{ active: $store.state.Sidebar.isOpenSidebar }">
    side bar
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import { mockData } from '@/const/mockData.js'

const store = useStore()
const sideBarData = ref(mockData)

onMounted(() => {
  window.addEventListener('click', handleClickWindow)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickWindow)
})
const handleClickWindow = (event) => {
  if (
    store.state.Sidebar.isOpenSidebar &&
    !event.target.matches('.SideBarButton') &&
    !event.target.matches('.SideBar')
  ) {
    store.dispatch('Sidebar/toggleSidebar')
  }
}
</script>

<style scoped lang="scss">
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
