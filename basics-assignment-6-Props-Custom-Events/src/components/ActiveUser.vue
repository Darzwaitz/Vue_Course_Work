<template>
  <div>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Darz",
      age: 39,
    };
  },
};
</script>