<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="action">
      <button
        @click="
          $store.dispatch('Ball/addBall', {
            number: 1,
            posX,
            posY: posY * -1,
            left,
            bottom,
          })
        "
      >
        add 1 ball
      </button>
      <button
        @click="
          $store.dispatch('Ball/addBall', {
            number: 4,
            posX,
            posY: posY * -1,
          })
        "
      >
        add 4 ball
      </button>
      <button
        @click="
          $store.dispatch('Ball/addBall', {
            number: 100,
            posX,
            posY: posY * -1,
            left,
            bottom,
          })
        "
      >
        add 100 ball
      </button>
      <button @click="$store.dispatch('Ball/removeBall')">remove 1 ball</button>
      <button @click="$store.dispatch('Ball/removeBall', 100)">
        remove 100 ball
      </button>
    </div>
    <h1>The number of balls: {{ $store.state.Ball.balls.length }}</h1>
    <form action="">
      <h2>Please choose begin point</h2>
      <input type="number" id="left" name="left" v-model="left" />
      <label for="left">start X</label><br />
      <input type="number" id="bottom" name="bottom" v-model="bottom" />
      <label for="bottom">start Y</label><br />
      <h2>Please choose destination</h2>
      <input type="number" id="posX" name="posX" v-model="posX" />
      <label for="posX">End X</label><br />
      <input type="number" id="posY" name="posY" v-model="posY" />
      <label for="posY">End Y</label><br />
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const posX = ref(0)
const posY = ref(0)
const left = ref(0)
const bottom = ref(0)
</script>

<style scoped lang="scss">
.dashboard {
  padding-top: 2rem;
  width: 100%;
  .action {
    display: flex;
    gap: 5px;
    padding: 0.5rem;
  }
  h1 {
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  input {
    margin-right: 10px;
  }
}
</style>
