import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/AppHome.vue')
        },
        {
            path: '/project/:id',
            name: 'project-detail',
            component: () => import('./pages/AppProjectDetails.vue')
        },
    ]
});

export { router };