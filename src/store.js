import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import axiosRefresh from './axios-refresh'
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
        autoLogin({ commit, dispatch }) {
            var idToken = localStorage.getItem('idToken')
            if (!idToken) {
                router.push('/register')
            }
            const expiresTimeMs = localStorage.getItem('expiresTimeMs')
            const now = new Date();
            const isExpired = now.getTime() >= expiresTimeMs;
            const refreshToken = localStorage.getItem('refreshToken')
            if (isExpired) {
                dispatch('refreshToken', refreshToken)
            } else {
                const expiresInMs = expiresTimeMs - now.getTime();
                setTimeout(() => {
                    dispatch('refreshIdToken', refreshToken)
                }, expiresInMs)
                commit('updateIdToken', idToken)
            }
        },
        register({ dispatch }, authData) {
            axios.post(
                    '/accounts:signUp?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw', {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true,
                    }
                )
                .then(response => {
                    dispatch('setAuthData', {
                        idToken: response.data.idToken,
                        expiresIn: response.data.expiresIn,
                        refreshToken: response.data.refreshToken,
                    })
                    router.push('/')
                })
        },
        login({ dispatch }, authData) {
            axios.post(
                    '/accounts:signInWithPassword?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw', {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true,
                    }
                )
                .then(response => {
                    dispatch('setAuthData', {
                        idToken: response.data.idToken,
                        expiresIn: response.data.expiresIn,
                        refreshToken: response.data.refreshToken,
                    })
                    router.push('/')
                });
        },
        refreshIdToken({ dispatch }, refreshToken) {
            axiosRefresh.post(
                    '/token?key=AIzaSyAd6jBVe21o9cBXPZlPHvs_NgmlyAHmqtw', {
                        grant_type: "refresh_token",
                        refresh_token: refreshToken,
                    }
                )
                .then(response => {
                    dispatch('setAuthData', {
                        idToken: response.data.id_token,
                        expiresIn: response.data.expires_in,
                        refreshToken: response.data.refresh_token,
                    })
                })
        },
        setAuthData({ commit, dispatch }, authData) {
            commit('updateIdToken', authData.idToken)
            const now = new Date();
            const expiresTimeMs = now.getTime() + authData.expiresIn * 1000;
            localStorage.setItem('idToken', authData.idToken)
            localStorage.setItem('expiresTimeMs', expiresTimeMs)
            localStorage.setItem('refreshToken', authData.refreshToken)
            setTimeout(() => {
                dispatch('refreshIdToken', authData.refreshToken)
            }, authData.expiresIn * 1000)
        },
    }
});