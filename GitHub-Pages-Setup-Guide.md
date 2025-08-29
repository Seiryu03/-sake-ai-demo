# 🚀 GitHub Pages デプロイメント手順書

## 📂 準備完了ファイル

以下のファイルが `/Users/seiryu/Projects/demo-sake/github-pages-deploy/` に準備されています：

```
aprise-demo-bot/           ← リポジトリ名（例）
├── index.html             ← メインページ
├── 404.html               ← 直リンクエラー対策
├── robots.txt             ← 検索エンジン制御
├── README.md              ← 説明書
└── assets/
    ├── styles-v2.css      ← スタイルシート  
    └── sake_demo.json     ← 日本酒データ
```

## 🔧 GitHubリポジトリ作成手順

### ステップ 1: GitHubでリポジトリ作成

1. **GitHub.com にアクセス**してログイン
2. **右上の「+」→ "New repository"** をクリック
3. **Repository name**: `aprise-demo-bot` （または任意の名前）
4. **Public** を選択（Privateでも可能だがPagesは有料）
5. **"Add a README file"** は **チェックしない**（既に作成済み）
6. **"Create repository"** をクリック

### ステップ 2: ファイルアップロード

1. **"uploading an existing file"** リンクをクリック
2. **フォルダ全体をドラッグ&ドロップ**:
   - Finderで `/Users/seiryu/Projects/demo-sake/github-pages-deploy/` を開く
   - **全ファイル・フォルダを選択**（Cmd+A）
   - GitHub画面にドラッグ&ドロップ
3. **Commit message**: `Initial commit - APrise demo site`
4. **"Commit changes"** をクリック

### ステップ 3: GitHub Pages 有効化

1. リポジトリページで **"Settings"** タブをクリック
2. 左メニューから **"Pages"** を選択
3. **Source** で **"Deploy from a branch"** を選択
4. **Branch** で **"main"** を選択
5. **Folder** で **"/ (root)"** を選択
6. **"Save"** をクリック

### ステップ 4: URL確認

- 数分後、緑色のチェックマークで **公開URL** が表示されます:
  ```
  https://あなたのユーザー名.github.io/aprise-demo-bot/
  ```

## ⚡ 動作確認チェックリスト

- [ ] デスクトップで正常表示
- [ ] スマートフォンで正常表示  
- [ ] チャットボタンが右下に配置
- [ ] チャット機能が動作
- [ ] 言語切り替えが動作
- [ ] シークレットモードでも動作

## 🔄 更新方法

ファイル変更後の反映方法：
1. GitHubリポジトリページでファイルを直接編集、または
2. 再度ファイルをアップロード（上書き）
3. 2-3分で自動反映

キャッシュ問題時は URL末尾に `?v=2` を追加

## 🚨 トラブルシューティング

| 問題 | 解決方法 |
|------|----------|
| CSS/画像が表示されない | パスが `./assets/` で始まっているか確認 |
| 404エラーが出る | 404.htmlが存在し、index.htmlと同内容か確認 |
| 更新が反映されない | ブラウザの強制再読み込み（Ctrl+F5） |
| 日本語が文字化け | HTMLのcharsetがUTF-8か確認 |

---

## 📧 成功時の次ステップ

完了後、**email-templates.md** を確認して取引先への案内メールを作成してください。