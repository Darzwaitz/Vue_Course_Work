<template>
  <div>
    <form class="form">
      <div class="name__container">
        <label for="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div class="age__container">
        <label for="age">Age</label>
        <input type="number" id="age" />
      </div>
    </form>
  </div>
</template>



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