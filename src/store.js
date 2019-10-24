import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null
    },
    getters: {
        idToken: state => state.idToken
    },
    mutations: {
        updateIdToken(state, idToken) {
            state.idToken = idToken
        },
    },
    actions: {
        register({ commit }, authData) {
            axios.post(
                '/accounts:signUp?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                }
            )
            .then(response => {
                commit('updateIdToken', response.data.idToken)
                router.push('/')
            })
        },
        login({ commit }, authData) {
            axios.post(
                '/accounts:signInWithPassword?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                }
            )
            .then(response => {
                commit('updateIdToken', response.data.idToken)
                router.push('/')
            });
        },
    }
});
