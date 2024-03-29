new Vue({
  el: "#exercise",
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    float: "float",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "100px",
      height: "150px",
      backgroundColor: "yellow",
    },
    progressBar: {
      width: "0px",
      backgroundColor: "red",
    },
  },
  methods: {
    startEffect: function () {
      let vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {
      let vm = this;
      let width = 0;
      setInterval(() => {
        width = width + 10;
        vm.progressBar.width = width + "px";
      }, 500);
    },
  },
});
