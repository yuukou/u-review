import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from 'vue-router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {
        login(authData) {
            axios.post(
                '/accounts:signInWithPassword?key=AIzaSyCNCXMjFtBt3UF95HRh4Codds2A3-L29ec',
                {
                    'email': authData.email,
                    'password': authData.password
                }
            )
            .then(() => {
                // dispatch('setAuthData', {
                //     idToken: response.idToken
                // })
                router.push('/')
            });
        },
        setAuthData(authData) {
            localStorage.setItem('idAToken', authData.idToken)
        }
    }
});
