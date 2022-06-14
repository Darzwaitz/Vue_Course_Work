<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="increment">Increment x 1</button>
    <div class="">
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
// import { reactive } from 'vue';
import { ref, computed } from 'vue';

// export default {
//   setup() {
// const uName = ref('Darz');
const uAge = ref(40);
const firstName = ref('');
const lastName = ref('');

const uName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

// function setFirstName(event) {
//   firstName.value = event.target.value;
// }

// function setLastName(event) {
//   lastName.value = event.target.value;
// }

// const user = reactive({
//   name: 'Darz',
//   age: 40,
// });

// console.log(user);

// setTimeout(function () {
//   user.name = 'Darzer';
//   user.age = 38;
// }, 2000);

function increment() {
  uAge.value++;
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
