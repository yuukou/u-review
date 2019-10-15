<template>
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
        <label for="email">パスワード</label>
        <input type="password" name="password" v-model="password">
        <button @click="login">送信する</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            this.email = ''
            this.password = ''
        }
    }
}
</script>
