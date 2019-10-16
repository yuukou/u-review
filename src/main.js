import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
)
axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
