const app = Vue.createApp({
    data() {
        return {
            
            // friends: [
            //     { 
            //         id: 'manuel', 
            //         name: 'Manuel Lorenz',
            //         phone: '01234 56789',
            //         email: 'test@test.com'
            //     },
            //     { 
            //         id: 'julie', 
            //         name: 'Julie Lorenz',
            //         phone: '01333 49876',
            //         email: 'test2@test2.com'
            //     }
            // ]
        };
    }
});

//component names should be 2 words with-dash to work with Vue
app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Detailz
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>  
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: { 
                id: 'manuel', 
                name: 'Manuel Lorenz',
                phone: '01234 56789',
                email: 'test@test.com'
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');