import { getRange, getUniqueID } from '@/store/Ball/utls.js'

export const Ball = {
  namespaced: true,
  state() {
    return {
      balls: [
        {
          key: getUniqueID(),
          posX: 350,
          posY: -320,
          left: 50,
          bottom: 320,
        },
        {
          key: getUniqueID(),
          posX: 350,
          posY: -70,
          left: 50,
          bottom: 70,
        },
      ], // { bottom: Number, distance: Number }
    }
  },
  mutations: {},
  actions: {
    addBall({ state }, { number = 1, posX, left, posY, bottom } = {}) {
      for (let i = 0; i < number; i++) {
        state.balls.push({
          key: getUniqueID(),
          posX: posX || getRange(150, 300),
          posY: posY || getRange(10, 50),
          left: left || getRange(10, 50),
          bottom: bottom || getRange(20, 350),
        })
      }
    },
    removeBall({ state }, number = 1) {
      for (let i = 0; i < number; i++) {
        if (state.balls.length) {
          state.balls.pop()
        }
      }
    },
  },
}
