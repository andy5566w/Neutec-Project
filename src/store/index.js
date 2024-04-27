import { createStore } from 'vuex'
import { Sidebar } from './Sidebar/index.js'
import { Ball } from '@/store/Ball/index.js'

const store = createStore({
  modules: { Sidebar, Ball },
})

export default store
