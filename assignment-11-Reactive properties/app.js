new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
    result: function () {
      return this.value == 37 ? "done" : "not there yet";
    },
  },
  watch: {
    result: function () {
      let vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, 5000);
    },
  },
});
