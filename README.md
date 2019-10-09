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
 - 投稿(/comment)

### 機能
**登録・ログイン**

- [ ] Email(email)/Password(password)で登録・ログイン可能
- [ ] FireBase（Authentication）にPost
- [ ] Post後、入力データを初期化し、未入力状態に戻す
- [ ] Post処理が正常に完了した場合は、投稿画面にリダイレクト
- [ ] ログイン状態でアクセスされた場合は、投稿画面にリダイレクト
- [ ] パスワードの期限が切れた場合は、自動で更新処理を行う
- [ ] 認証用トークンをローカルストレージで保持

**投稿**
- [ ] 名前(text)/投稿内容（textarea）が入力可能
- [ ] FireBase（Cloud Firestore）にPost
- [ ] Post後、入力データを初期化し、未入力状態に戻す
- [ ] Post処理が正常に完了した場合は、投稿画面にリダイレクト
- [ ] 投稿データが存在する場合は、画面レンダリング前に投稿データを取得し、表示する際に投稿データを表示できるようにする