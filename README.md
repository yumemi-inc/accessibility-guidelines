# accessibility-guidelines

ゆめみのアクセシビリティガイドライン

## 必要要件

- Node.js 22.14.0 (`.node-version` を参照)
- pnpm 最新版

## セットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/your-organization/accessibility-guidelines.git
cd accessibility-guidelines
```

2. 依存パッケージのインストール
```bash
pnpm install
```

3. 開発サーバーの起動
```bash
pnpm run dev
```

開発サーバーが起動すると、`http://localhost:4321` でサイトにアクセスできます。

## 利用可能なスクリプト

- `pnpm run dev` - 開発サーバーを起動します
- `pnpm run build` - 本番用にサイトをビルドします
- `pnpm run preview` - ビルドしたサイトをプレビューします
- `pnpm run lint` - すべてのリントチェックを実行します
- `pnpm run fix` - リントエラーのうち、自動修正可能なものを修正します
