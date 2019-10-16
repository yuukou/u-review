import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {
        register({ dispatch }, authData) {
            axios.post(
                '/accounts:signUp?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                }
            )
            .then(response => {
                console.log(response)
                router.push('/')
            })
        },
        login({ dispatch }, authData) {
            axios.post(
                '/accounts:signInWithPassword?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                }
            )
            .then(response => {
                console.log(response)
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
