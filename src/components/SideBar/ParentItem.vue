<template>
  <div class="parent" v-for="item in items" :key="item.key">
    <div
      class="text"
      :class="{ active: item.isClicked }"
      @click="$store.dispatch('Sidebar/clickSidebarItem', item.key)"
      :style="{ '--indent': `${item.depth * 10}px` }"
    >
      {{ item.text }}
    </div>
    <children-item
      v-if="item.children && item.isClicked"
      :children="item.children"
    />
  </div>
</template>

<script setup>
import ChildrenItem from '@/components/SideBar/ChildrenItem.vue'
defineProps({
  items: Array,
})
</script>

<style scoped lang="scss">
.text {
  --indent: 5;
  text-indent: var(--indent);
  padding: 0.5rem;
  background-color: #d1cdce;
  cursor: pointer;
  &.active {
    color: yellow;
  }
}
</style>
