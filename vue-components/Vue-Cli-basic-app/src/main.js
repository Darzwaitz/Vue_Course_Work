//importing a package only needs package name
import { createApp } from 'vue';

//importing custom file needs relative path
import App from './App.vue';

import FriendContact from './components/FriendContact.vue';
import NewFriendForm from './components/NewFriendForm';

const app = createApp(App);

app.component('friend-contact', FriendContact );
app.component('new-friendform', NewFriendForm);

app.mount('#app');
