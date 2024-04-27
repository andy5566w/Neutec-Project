<template>
  <select
    class="DropdownMenu"
    @change="handleChange"
    :value="$store.state.Sidebar.selectedItemsKey"
  >
    <option
      v-for="item in $store.getters['Sidebar/getters_get_flat_items']"
      :key="item.key"
      :value="item.key"
    >
      {{ item.text }}
    </option>
  </select>
</template>
<script setup>
import { useStore } from 'vuex'

const store = useStore()
const handleChange = (event) => {
  store.dispatch('Sidebar/clickSidebarItem', event.target.value)
}
</script>

<style scoped lang="scss">
select {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
