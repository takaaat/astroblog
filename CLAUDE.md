# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - 開発サーバーを起動（localhost:4321）
- `npm run build` - 本番用にビルド（./dist/に出力）
- `npm run preview` - ビルドしたサイトをローカルでプレビュー
- `npm run astro ...` - Astro CLIコマンドを実行

## Architecture

このプロジェクトは、TailwindCSS v4を使用したAstroブログです。Cloudflareにデプロイされます。

### Content Management

- ブログ記事は `src/blog/` に配置
- 各記事は `src/blog/[記事名]/index.md` の形式
- Content Collections API を使用してMarkdownファイルを管理（src/content.config.ts）
- 記事のメタデータ: title, pubDate, description, category, tags, thumbnail

### Layout Structure

- `BaseLayout.astro` - 全体のレイアウト（日本語フォント設定、ヘッダー、フッター）
- `MarkdownPostLayout.astro` - 記事用レイアウト
- `BlogLayout.astro` - ブログ一覧用レイアウト

### Component Organization

- `Navigation.astro` - ナビゲーション
- `ArticleCard.astro` - 記事カード
- `AuthorCard.astro` - 著者カード
- `CategoriesCard.astro` - カテゴリーカード
- `RecentPostsCard.astro` - 最新記事カード

### Routing

- `/` - ホームページ
- `/posts/[...slug]` - 記事詳細ページ
- `/categories/` - カテゴリー一覧
- `/categories/[category]` - カテゴリー別記事一覧
- `/tags/[tag]` - タグ別記事一覧
- `/tags/` - タグ一覧

### Styling

- TailwindCSS v4 + Vite plugin
- 日本語フォント（Yu Gothic）をベースに設定
- Typography pluginを使用（@tailwindcss/typography）