import Vue from 'vue'
import Router from 'vue-router'
import Comment from './views/Comment.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Comment
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
    ]
});
