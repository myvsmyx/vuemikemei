import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue')
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router