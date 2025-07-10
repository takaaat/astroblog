# リファクタリング対象箇所一覧

## 5. スタイルの統一・改善

### 5.1 一貫性のないスタイル定義
**場所**: 複数のコンポーネント間
**問題**: シャドウ、カラー、フォント指定が統一されていない
**対策**: デザイントークンまたはCSS変数を使用して一貫性を保つ

## 6. TypeScriptの型安全性向上

### 6.1 型定義の不足
**場所**: `src/components/ArticleCard.astro`, `src/layouts/MarkdownPostLayout.astro`
**問題**: map関数内でtag変数にany型が使用されている
**対策**: 適切な型定義を追加する

### 6.2 Props型の明示
**場所**: 各コンポーネントファイル
**問題**: Propsの型が明示されていない
**対策**: インターフェースを定義してProps型を明示する

## 7. パフォーマンス最適化

### 7.1 不要な計算の重複
**場所**: `src/components/RecentPostsCard.astro:9`
**問題**: recentPosts変数を定義しているが実際には使用していない
**対策**: 不要な変数を削除し、処理を効率化

## 8. エラーハンドリング・バリデーション

### 8.1 必須データのチェック不足
**場所**: 各コンポーネントでのfrontmatter使用箇所
**問題**: frontmatterのプロパティが存在しない場合の処理が不十分
**対策**: 適切なデフォルト値の設定とエラーハンドリングの追加

### 8.2 画像データの存在チェック
**場所**: `src/components/ArticleCard.astro:14-25`
**問題**: thumbnail存在チェックはあるが、画像読み込みエラーの処理がない
**対策**: 画像読み込みエラー時のフォールバック処理を追加

## 実装提案

### フォルダ構成の改善
```
src/
├── components/
│   ├── ui/           # 基本的なUIコンポーネント
│   ├── layout/       # レイアウト関連コンポーネント
│   └── article/      # 記事関連コンポーネント
├── utils/           # ユーティリティ関数
├── types/           # TypeScript型定義
├── config/          # 設定ファイル
└── constants/       # 定数定義
```

### 共通化すべきファイル
- `src/utils/date.ts` - 日付フォーマット関数
- `src/utils/blog.ts` - ブログ記事取得・操作関数
- `src/config/site.ts` - サイト設定
- `src/components/ui/TagList.astro` - タグ表示コンポーネント
- `src/types/blog.ts` - ブログ関連型定義
