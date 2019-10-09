import Vue from 'vue'
import Router from 'vue-router'
import Comment from './views/Comment'
import Register from './views/Register'
import Login from './views/Login'

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
