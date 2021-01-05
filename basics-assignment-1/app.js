const app = Vue.createApp({
    data() {
        return {
            name: 'Darz',
            age: 38,
            // ageIn5Years:
            imgLink: 'https://images.pexels.com/photos/4399350/pexels-photo-4399350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=960'
        }
    },
    methods: {
        faveRandomNumber(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment'); 