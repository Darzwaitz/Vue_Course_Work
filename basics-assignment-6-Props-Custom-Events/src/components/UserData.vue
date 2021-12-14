<template>
  <div>
    <form class="form" @submit.prevent="submitData">
      <div class="name__container">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="enteredName" />
      </div>
      <div class="age__container">
        <label for="age">Age</label>
        <input type="number" id="age" v-model="enteredAge" />
      </div>
      <button>Set User Data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 10px;
}
.form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
}
.form div {
  margin: auto;
}
</style>