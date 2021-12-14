<template>
  <section class="container">
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Darz",
        age: 39,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name,
        age: +age,
      };
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: rgb(219, 219, 219);
  border-radius: 4px;
  box-shadow: 0 22px 7rem rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(211, 208, 208);
  width: 78%;
  margin: auto;
  /* padding-top: 20rem; */
  padding: 4rem;
}
</style>