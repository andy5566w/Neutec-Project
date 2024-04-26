import { getRange, getUniqueID } from '@/store/Ball/utls.js'

export const Ball = {
  namespaced: true,
  state() {
    return {
      balls: [
        {
          key: getUniqueID(),
          distance: 300,
          bottom: 300,
        },
        {
          key: getUniqueID(),
          distance: 300,
          bottom: 50,
        },
      ], // { bottom: Number, distance: Number }
    }
  },
  mutations: {},
  actions: {
    addBall({ state }, number = 1) {
      for (let i = 0; i < number; i++) {
        const ballData = {
          key: getUniqueID(),
          distance: 300,
          bottom: getRange(20, 350),
        }
        state.balls.push(ballData)
      }
    },
    removeBall({ state }) {
      state.balls.shift()
    },
  },
}
