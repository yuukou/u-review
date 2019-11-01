<template>
  <div id="app">
    <template v-if="isAuthentificated">
      <router-link to="/" class="header-item">掲示板</router-link>
      <a href="javascript:void(0)" @click="logout">ログアウト</a>
    </template>
    <template v-if="! isAuthentificated">
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
    </template>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthentificated() {
      return this.$store.getters.idToken !== null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  }
}
</script>

<style scoped>
.header-item {
  margin-right: 20px;
  cursor: pointer;
}
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-soothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
