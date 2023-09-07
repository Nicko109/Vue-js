//


// main.js
import { createApp } from 'vue';
import Index from "./components/Index.vue";
import router from './router'; // Импортируйте созданный вами роутер

const app = createApp(Index);

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
