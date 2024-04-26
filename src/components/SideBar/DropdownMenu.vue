<template>
  <select class="DropdownMenu" @change="handleChange" v-model="selected">
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
import { ref } from 'vue'

const store = useStore()
const selected = ref('59c')
const handleChange = () => {
  store.dispatch('Sidebar/clickSidebarItem', selected.value)
}
</script>

<style scoped lang="scss">
select {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
