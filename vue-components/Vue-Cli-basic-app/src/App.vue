<template>
<section>   
        <header><h1>My friendz</h1></header>    
        <ul>
            <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favourite="true"
            ></friend-contact>
           
        </ul>
    </section> 
    
</template>

 <script>
export default {
    data() {
        return {            
            friends: [
                { 
                    id: 'manuel', 
                    name: 'Manuel Lorenz',
                    phone: '01234 56789',
                    email: 'test@test.com'
                },
                { 
                    id: 'julie', 
                    name: 'Julie Lorenz',
                    phone: '01333 49876',
                    email: 'test2@test2.com'
                }
            ]
        };
    }
}

</script>