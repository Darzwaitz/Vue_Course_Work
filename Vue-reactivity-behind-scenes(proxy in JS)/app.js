const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
////
const app2 = Vue.createApp({
  data() {
    return {
      testInput: 'test Input'
    };
  }
});

app2.mount('.app2');

// .... rough example of how Vue workz under the hood

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

//handler object setz up 'traps' which 'proxy' supportz
const handler = {
  //setter function
  set(target, key, value) {
    //
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};
//proxy JS constructor, data object passed in, 2nd argument is the handler object
const proxy = new Proxy(data, handler);

//setter function is triggered whenever a property is set to a new value on the proxy
proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);