<template>
  <div>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ userage }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>