//


// main.js
import { createApp } from 'vue';
import Index from "./components/Index.vue";
import router from './router'; // Импортируйте созданный вами роутер
import store from './store'; // Импортируйте ваше хранилище Vuex

const app = createApp(Index);
app.use(store); // Используйте хранилище Vuex в приложении
// Используйте роутер в приложении
app.use(router);

app.mount('#app');
















//
// import { createApp } from 'vue';
// import router from "./router";
// import Index from "./components/Index.vue";
//
// import './bootstrap';
//
// const app = createApp({
//     el: '#app',
//
//     components:{
//         Index
//     },
//
//     router
// });
// app.mount('#app');
//
//
