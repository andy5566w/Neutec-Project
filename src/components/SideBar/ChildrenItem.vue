<template>
  <div class="children" v-for="child in children" :key="child.key">
    <div
      class="text"
      :class="{ active: child.isClicked }"
      @click="$store.dispatch('Sidebar/clickSidebarItem', child.key)"
      :style="{ '--indent': `${child.depth * 10}px` }"
    >
      {{ child.text }}
    </div>
    <parent-item
      v-if="child.children && child.isClicked"
      :items="child.children"
    />
  </div>
</template>

<script setup>
import ParentItem from '@/components/SideBar/ParentItem.vue'
defineProps({
  children: Array,
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
