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
      state.items = setItemsToDefault(state.items)
      setClickedItemByKey(key, state.items)
    },
  },
}
