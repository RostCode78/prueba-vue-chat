import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: () => import("./../views/InicioView.vue"),
        },
        {
            path: '/mensajes',
            name: 'Mensajes',
            component: () => import("./../views/MensajesView.vue"),
        }
    ]
})

export default router;