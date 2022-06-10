<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="increment">Increment x 1</button>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

// export default {
//   setup() {
// const uName = ref('Darz');
// const uAge = ref(40);
const user = reactive({
  name: 'Darz',
  age: 40,
});

console.log(user);

// setTimeout(function () {
//   user.name = 'Darzer';
//   user.age = 38;
// }, 2000);

function increment() {
  user.age++;
}

// return { userName: uName };
// },

// data() {
//   return {
//     userName: 'Darzer',
//   };
// },
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
