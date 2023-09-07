//
// router.js
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/people',
        name: 'person.index',
        component:  () => import('./components/Person/Index.vue')
    },
    {
        path: '/people/create',
        name: 'person.create',
        component:  () => import('./components/Person/Create.vue')
    },
    {
        path: '/people/:id/edit',
        name: 'person.edit',
        component:  () => import('./components/Person/Edit.vue')
    },
    {
        path: '/people/:id',
        name: 'person.show',
        component:  () => import('./components/Person/Show.vue')
    },

    // Добавьте здесь другие маршруты по мере необходимости
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;











//
//
// import VueRouter from "vue-router";
// import PostComponent from "./components/PostComponent.vue";
// import TagComponent from "./components/TagComponent.vue";
//
// Vue.use(VueRouter);
//
// export default new VueRouter({
//     mode: 'history',
//
//     routes: [
//         {
//             path: '/posts',
//             component: PostComponent
//         },
//         {
//             path: '/tags',
//             component: TagComponent
//         }
//     ]
// })
//
