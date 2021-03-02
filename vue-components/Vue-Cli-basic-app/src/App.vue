<template>
<section>   
        <header><h1>My friendz</h1></header>    
        <ul>
            <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favourite="friend.isFavourite"
            @toggle-favourite="toggleFavouriteStatus"
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
                    email: 'test@test.com',
                    isFavourite : true
                },
                { 
                    id: 'julie', 
                    name: 'Julie Lorenz',
                    phone: '01333 49876',
                    email: 'test2@test2.com',
                    isFavourite : true
                }
            ]
        };
    },
    methods: {
        toggleFavouriteStatus(friendId){
        const identifiedFriend = this.friends.find(friend => friend.id === friendId);
        identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
        }
    }
};

</script>