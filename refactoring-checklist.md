# リファクタリング対象箇所一覧

## 2. 設定・定数の外部化

### 2.1 作者情報のハードコーディング
**場所**: `src/components/AuthorCard.astro:4-8`
**問題**: 作者情報が直接コンポーネント内にハードコーディングされている
**対策**: 設定ファイルまたはコンフィグファイルに外部化する

### 2.2 サイト情報のハードコーディング
**場所**: `src/layouts/BaseLayout.astro:12`, `src/layouts/BaseLayout.astro:30`, `src/layouts/BaseLayout.astro:45`
**問題**: サイト名、ブログ名、コピーライトが直接HTMLに記述されている
**対策**: サイト設定ファイルを作成し、一元管理する

## 3. コンポーネントの分割・改善

### 3.1 ArticleCard コンポーネントの肥大化
**場所**: `src/components/ArticleCard.astro`
**問題**: 86行の大きなコンポーネントで、複数の責務を持っている
**対策**: 
- サムネイル表示部分を `ArticleThumbnail` コンポーネントに分離
- メタデータ表示部分を `ArticleMetadata` コンポーネントに分離

### 3.2 BaseLayout の複数責務
**場所**: `src/layouts/BaseLayout.astro`
**問題**: ヘッダー、フッター、メイン領域の定義が1つのファイルに混在
**対策**: 
- `Header` コンポーネントの分離
- `Footer` コンポーネントの分離

## 4. アクセシビリティの改善

### 4.1 onclick属性の使用
**場所**: `src/components/ArticleCard.astro:9`, `src/components/ArticleCard.astro:46`, `src/components/ArticleCard.astro:71`
**問題**: onclick属性を使用したナビゲーション処理は、アクセシビリティに配慮が不足
**対策**: 適切な `<a>` タグまたはボタン要素を使用し、JavaScriptに依存しない実装に変更

### 4.2 セマンティックHTMLの改善
**場所**: `src/components/ArticleCard.astro:32-36`
**問題**: 装飾目的のdivが多用されている
**対策**: より意味のあるHTML要素を使用する

## 5. スタイルの統一・改善

### 5.1 インラインスタイルの削除
**場所**: `src/layouts/BaseLayout.astro:13-18`
**問題**: コンポーネント内にインラインスタイルが記述されている
**対策**: CSSクラスまたはTailwind CSSクラスに統一する

### 5.2 一貫性のないスタイル定義
**場所**: 複数のコンポーネント間
**問題**: シャドウ、カラー、フォント指定が統一されていない
**対策**: デザイントークンまたはCSS変数を使用して一貫性を保つ

## 6. TypeScriptの型安全性向上

### 6.1 型定義の不足
**場所**: `src/components/ArticleCard.astro:61`, `src/layouts/MarkdownPostLayout.astro:61`
**問題**: map関数内でtag変数にany型が使用されている
**対策**: 適切な型定義を追加する

### 6.2 Props型の明示
**場所**: 各コンポーネントファイル
**問題**: Propsの型が明示されていない
**対策**: インターフェースを定義してProps型を明示する

## 7. パフォーマンス最適化

### 7.1 画像最適化の統一
**場所**: `src/components/ArticleCard.astro:15-21`, `src/layouts/MarkdownPostLayout.astro:16-23`
**問題**: 画像サイズ指定が場所によって異なる
**対策**: 画像サイズの規格化と最適化戦略の統一

### 7.2 不要な計算の重複
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

## 優先度付け

### 高優先度
1. 重複コード・共通化可能な箇所 (1.1, 1.2, 1.3)
2. 設定・定数の外部化 (2.1, 2.2)
3. アクセシビリティの改善 (4.1)

### 中優先度
4. コンポーネントの分割・改善 (3.1, 3.2)
5. TypeScriptの型安全性向上 (6.1, 6.2)
6. パフォーマンス最適化 (7.2)

### 低優先度
7. スタイルの統一・改善 (5.1, 5.2)
8. セマンティックHTML・画像最適化 (4.2, 7.1)
9. エラーハンドリング・バリデーション (8.1, 8.2)

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
