import { mockData } from '@/const/mockData.js'
import {
  setClickedItemByKey,
  setItemsToDefault,
  flatItems,
} from '@/store/Sidebar/utils.js'

export const Sidebar = {
  namespaced: true,
  state() {
    const items = setItemsToDefault(mockData)
    return {
      selectedItemsKey: '64f',
      isOpenSidebar: false,
      items,
    }
  },
  getters: {
    getters_get_flat_items(state) {
      return flatItems(state.items)
    },
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.isOpenSidebar = !state.isOpenSidebar
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    clickSidebarItem({ state }, key) {
      state.selectedItemsKey = key
      state.items = setItemsToDefault(state.items)
      setClickedItemByKey(key, state.items)
    },
  },
}
