const app = Vue.createApp({
    data() {
        return {
            result : 0,
            // finalResult: 0
        };
    },
    methods: {
        addNumber(num){
            this.result = this.result + num;            
        }
    },
    computed: {
        computedResult(){
            if (this.result < 37) {
                return 'Not there yet';
            }else if(this.result === 37){
                return this.result;
            }else{
                return 'Too much!';
            }
        }
    },
    watch: {
        computedResult(){
            const that = this;
            setTimeout(() => {
                that.result = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');