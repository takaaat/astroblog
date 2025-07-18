---
title: "Scrapboxを使い始めた感想"
pubDate: 2022-08-07
description: "Scrapboxを使って100ページに到達したので，そこまでの感想を書きました．"
tags: ["メモアプリ", "Scrapbox"]
category: "ソフトウェア"
thumbnail: "./cosense.png"
---

最近[Scrapbox](https://scrapbox.io)を使い始めました。
Google Keep 的にメモを残せて、個人的な知識管理(PKM)として使えるらしいと聞いて少し前に使い始めました。
自分の Project がちょうど 100 ページを超えてきたので、初心者なりに使ってみた感想を書き残したい思います。

以前は[Obsidian](https://obsidian.md)も使っていたので、それとの比較も込めて良い点・微妙な点を列挙してみました。

## 良い点

### ホーム画面のグリッド表示が見やすい

Scrapbox の特徴として、プロジェクトホーム画面にカード型のページリンクがグリッド表示されている点があります。

これ、Scrapbox の良い点として検索しても全然見つからないのですが、かなり助かっています。UserCSS でこの表示すら消す人も稀にいるみたいですが、何よりも最近編集したページを探しやすい。

ページのタイトルだけではなく、中身のテキストの内容や、画像がある場合は画像がカード内に表示されるので、カードの中身がどのようなページなのか思い出しやすくなります。

Obsidian ではサイドバーにファイル名が小さく一覧表示されるだけなので、Obsidian でも実装されないかな...と思っています(自分でプラグインを作れるなら作りたい)

### 書けば書くほど伸びていくカード

Scrapbox のページを新規作成すると、小さい横長のカードが表示されます。ここにタイトルや本文を書けば書くほど下に伸びていくカードのような形になっています。

ただの見た目だけの話ですが、これが書いていて気持ちいい。他の高機能エディタのようにファイルを作成すると無限に書けそうな広大な空白の領域が表示されるわけでもなく、最初にカード型で表示させて「あくまでもメモだから付箋に書くくらいの内容量で良いよ」と暗黙的に示されている気がします。(気のせい?)

Scrapbox の思想とは少し違う気もしますが、界隈でよく言われる Zettelkasten のアトミックノートに近いものを書こうという気になれます。アトミックノートとは、なるべく一つのページに対して一トピック、タイトルの内容のみしか書かれていない最小単位のノートのことです。このことを気をつけるだけで、ノート間のリンクが作りやすくなるため、ノートの長さが長くなりすぎないカード型と言うのは理にかなっている気がします。

非常に小さい話ですが、エディタの見た目って大事な気がします。書くためのモチベーションがなければだめですからね。今後はどうでもよくなるかもしれませんが、最初の内は相当気持ちよくて助かっています。

### 箇条書き+テキストが良い

Apple のノートアプリや Evernote では、リッチテキストでそのまま書き殴ることが多いと思います。箇条書きはあくまで箇条書きであって、物の名前の一覧などの項目を書くものとしか使いません。

しかし、Scrapbox では長い文章や議論では箇条書きで書くことが便利な設計になっています。例えば、空白の行でスペースを入力するとすぐに箇条書きができるようになります。また、ショートカットキーによる項目の移動が簡単にできます。

この書きやすい箇条書きシステムによって、私のプロジェクトでは、ページ全体で箇条書きを使う割合が増えました。箇条書きは思考を書き出すのに非常に便利で、文章に対して枝状に伸ばしていくことができます。マインドマップの文章版のようなものといったらいいのでしょうか。今自分が何について考えているのか、どこを発展させたいのかを簡潔な文章で書くことができます。

また、完全なアウトライナーと違い、普通のテキストも一緒にページ内に書き込むことができるため、さまざまな用途で活用できます。Obsidian でテキストと一緒に箇条書きを Markdown で書くとプレビューした時に微妙にずれて、書き心地が Scrapbox より少し劣る感じでした。

### Public Project が無料

Scrapbox のプロジェクトの種類は、公開にするか、非公開にするかの二択しかありません。個人で利用する場合は基本無料ですが、公開する場合は団体でも企業でも無料になります。

ブログ風に使っても、そのまま箇条書きを公開する運用でも、自分のテキストを無料で公開できます。Obsidian で公開する場合は、月額数ドルのコストがかかりますが、Scrapbox の場合は無料です。

私はまだ Public Project として公開しているものはありませんが、そのうち private project の一部を公開する運用にしようかなと企んでいます。Public だと、プロジェクトの URL を投げるだけで簡単に相手に見てもらうことができます。

### リンク機能

一般的なメモツールにはあまりない特徴ですが、Scrapbox や Obsidian にはリンク機能があります。リンク機能は Wikipedia のようにページからページへリンクを貼り、関連づけることができます。

Scrapbox にはこれに加え、「リンクした先のページにリンクしている別のページ」(厳密に言えば少し違う)の一覧を表示してくれる機能(2hop-links)があります。これにより、過去に書いたページを掘り出すことができ、昔のメモの活用に繋げることができます。

フォルダやタグで管理していた時は、昔のメモを発見したり見返したりすることはなく、ただただ分類に迷ったりページを作るごとにタグを付与しなければなりませんでしたが、Scrapbox ではページ内に一つリンクを貼るだけで良くなりました。

これにより、気軽にポンポンページを作っちゃうこともできるようになったわけです。

### 同期が早い

これは、もともと Scrapbox がチームでの使用を想定して作った同時編集の技術により、個人で使った場合も編集をしたら即保存してくれるため、どの端末からアクセスしても常に最新の状態にアクセスできます。

Notion や Evernote といったサービスも同じですが、Obsidian や Logseq を無料で使った場合に iCloud のファイル同期が遅かったり失敗することもあったので、その点安心できます。

## 微妙な点

ここまで Scrapbox の良い点を挙げてみましたが、気になった点もいくつかありました。

### インターネットへの接続が必要

Scrapbox は現在公式には Web 版のみの提供となっており、公式の iOS や Android、Desktop のアプリが存在しません。

これによって、インターネットへの常時接続が必要になります。オフラインで編集することはできません。自分のコンピュータがインターネットに接続されていない状況はほとんどありませんが、サーバーダウン等が発生した場合にページにアクセスできない事態が発生します。

### モバイル上での体験

先ほども書いたように、モバイルアプリがないため、iPhone では Web 版を使用する必要があります。ネイティブアプリ程の操作性ではないため、テキストの選択や移動に引っかかることがあります。PWA として Scrapbox を使っても、起動から書き込めるようになるまでに多少のタイムラグがあります。

### 稀に動作が遅い

ほとんどの場合はコンピュータ内にもキャッシュされていますが、稀にページを開くのに 5 秒程度かかることがあります。

### 独自フォーマット

Scrapbox は良くも悪くも独自フォーマットを使用しています。これによって箇条書きの書きやすさや幅広い表現度を実現しているわけです。

Obsidian や Logseq のように Markdown 形式ではないため、サービス終了時や乗り換えをしようと思った時にエクスポートしたデータを一手間加工しないといけません。scrapbox を markdown に変換するツールが乱立していますが、コンピュータに精通していない限り扱うのは難しいと思います。

## これからどう使うか

今回は Scrapbox のメリット・デメリットをひたすら書いてみました。結論としては、これからも使い続ける予定です。Obsidian のプラグインなどで Scrapbox の使用感に近づけられたら最高だなとは思いますが、UX の良さは個人的には Scrapbox の方が上でした。
