<template>
  <div
    class="overlay"
    :class="{ active: $store.state.Sidebar.isOpenSidebar }"
    @click="$store.dispatch('Sidebar/toggleSidebar')"
  ></div>
  <div class="SideBar" :class="{ active: $store.state.Sidebar.isOpenSidebar }">
    <dropdown-menu />
    <parent-item :items="$store.state.Sidebar.items" />
  </div>
</template>

<script setup>
import ParentItem from '@/components/SideBar/ParentItem.vue'
import DropdownMenu from '@/components/SideBar/DropdownMenu.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  const key = localStorage.getItem('neutec-key')
  if (key) {
    store.dispatch('Sidebar/clickSidebarItem', key)
  }
})
</script>

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
  padding: 0.5rem;
  right: 0;
  height: 100%;
  z-index: 1;
  background-color: rgba(black, 90%);
  transition: transform 0.2s ease-in;
  transform: translateX(100%);
  min-width: 150px;
  top: 0;

  &.active {
    transform: translateX(0);
  }
}
</style>
