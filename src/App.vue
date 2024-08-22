<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div 
    :style="{ color: $store.state.colorCode }"
    class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> = 
    {{ $store.getters.counterSquared }}
  </div>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
  <div>
    <input 
      v-model="colorCode"
      placeholder="Enter color code"
      type="text">
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.commit('setColorCode', newValue);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
}
</style>
