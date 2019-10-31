# u-review

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 画面
 - 登録(/register)
 - ログイン(/login)
 - ログアウト
 - 投稿(/comment)
 - 投稿に対してのコメント機能

### 機能
**登録・ログイン・ログアウト**

- [x] Email(email)/Password(password)で登録・ログイン可能
- [x] FireBase（Authentication）にPost
- [x] Post後、入力データを初期化し、未入力状態に戻す
- [x] Post処理が正常に完了した場合は、投稿画面にリダイレクト
- [x] ログイン状態でアクセスされた場合は、投稿画面にリダイレクト
- [x] パスワードの期限が切れた場合は、自動で更新処理を行う
- [x] 認証用トークンをローカルストレージで保持
- [ ] ログアウト

**投稿**
- [x] 名前(text)/投稿内容（textarea）が入力可能
- [x] FireBase（Cloud Firestore）にPost(/post)
- [x] Post後、入力データを初期化し、未入力状態に戻し、掲示板に投稿内容を表示する
- [x] Post処理が正常に完了した場合は、投稿画面にリダイレクト
- [x] 投稿データが存在する場合は、画面レンダリング前に投稿データを取得し、表示する際に投稿データを表示できるようにする

**コメント**
- [x] 名前(text)/投稿内容（textarea）が入力可能
- [ ] FireBase（Cloud Firestore）にPost(/post/{post_id}/)
- [ ] Post処理が正常に完了した場合は、投稿画面にリダイレクト
- [ ] 投稿データが存在する場合は、画面レンダリング前に投稿データを取得し、表示する際に投稿データを表示できるようにする
