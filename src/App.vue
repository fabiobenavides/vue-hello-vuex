<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>

<script>

export default {
  name: 'App',
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
