export const Sidebar = {
  namespaced: true,
  state() {
    return {
      isOpenSidebar: false,
    }
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
  },
}
