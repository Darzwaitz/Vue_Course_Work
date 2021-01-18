const app = Vue.createApp({
    data() {
        return {
           input1: 'temp 1',
           input2: '',
           inputStored: ''
        }
    },
    methods: {
        alert(){
            alert("I'm not in north Canada!");
        },
        setName(event){
            this.input1 = event.target.value;
        },
        getNameStored(event){
            this.input2 = event.target.value;
        },
        setNameStored(){
            this.inputStored = this.input2;
        }
    }
});

app.mount('#assignment'); 
