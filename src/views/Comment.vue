<template>
    <div>
        <div>
            <h2>投稿</h2>
            <label for="name">名前 </label>
            <input type="text" id="name" v-model="name">
            <br><br>
            <label for="post">投稿内容 </label>
            <textarea id="post" v-model="post"></textarea>
            <br><br>
            <button @click="submit">送信</button>
        </div>
        <div class="board">
            <h2>掲示板</h2>
            <div>
                <div v-for="(comment, index) in comments" :key="index">
                    <div>名前:{{ comment.fields.name.stringValue }}</div>
                    <div>投稿:{{ comment.fields.post.stringValue }}</div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosComment from '../axios-comment';
export default {
    data() {
        return {
            name: '',
            post: '',
            comments: []
        }
    },
    // DOM読み込み時に投稿内容を取得する
    created() {
        axiosComment.get(
            '/posts',
        )
        .then(response => {
            this.comments = response.data.documents
        })
    },
    methods: {
        submit() {
            axiosComment.post(
                '/posts',
                {
                    fields: {
                        name: {stringValue: this.name},
                        post: {stringValue: this.post}
                    },
                },
            )
            .then(response => {
                if (this.comments) {
                    this.comments.push(response.data)
                } else {
                    this.comments = [];
                    this.comments.push(response.data);
                }
            })
            this.name = '';
            this.post = '';
        }
    }
}
</script>

<style scoped>
.board {
    margin-top: 100px;
}
</style>