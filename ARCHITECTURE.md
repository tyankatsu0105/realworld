# Architecture

アプリケーションのアーキテクチャに関する説明

## api

API 通信をするときに利用するファイルを設置する場所

### swagger.json

https://github.com/gothinkster/realworld/blob/a98fb5c38cc485ef484fe8f3af7eb35c607902c0/api/swagger.json

### api-type.ts

swagger.json を元に自動生成した型定義ファイル

## application

アプリケーションを構築するために必要な根幹となる情報を設置する場所

### domain

アプリケーションで独立する情報を設置する場所

### presenter

domain を UI で利用する形に整形する処理など型などを設置する場所

### shared

汎用的な utility を設置する場所

## ui

UI を構築するためのファイルを設置する場所

### design

UI を構築するコンポーネントを設置する場所
https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/

- index.ts
  - 外に露出したいファイルを export するところ
- lazy.ts
  - container を lazy で包むところ
- facade.ts
  - 該当 component で利用する色んな情報やロジックを返すところ
- container.ts
  - page.ts や usePage.ts で取得した色んなものを presentational にわたすところ
- presentational.ts
  - container から渡ってきたものをコンポーネントに渡すところ layout を決めるところでもある

#### components

一番小さい単位でのコンポーネントを設置する場所
ex) Button

#### recipes

components 内のコンポーネントを用いて新たに作成したコンポーネントを設置する場所
ex) Modal (depends on Button)

#### layout

レイアウトを決めるために使うコンポーネントを設置する場所
ex) 1 カラム、2 カラム、

#### snowflakes

依存するコンポーネントに固有なスタイリングとかを施したい場合など、カスタマイズされたコンポーネントを設置する場所

### pages

各ページを訪れた際に参照するファイルを設置する場所

- index.ts
  - 外に露出したいファイルを export するところ
- lazy.ts
  - container を lazy で包むところ
- page.ts
  - page 固有の情報（routing とか）を処理して container に渡すところ
- facade.ts
  - 該当 component で利用する色んな情報やロジックを返すところ
- container.ts
  - page.ts や usePage.ts で取得した色んなものを presentational にわたすところ
- presentational.ts
  - container から渡ってきたものをコンポーネントに渡すところ layout を決めるところでもある

### routes

routing に関するファイルを設置する場所

- index.ts
  - まだ適当。特に意図ない

### shared

汎用的な utility を設置する場所

### store

Redux 使うときに使用するファイルを設置する場所

https://redux.js.org/usage/structuring-reducers/basic-reducer-structure

#### application

> App state: data that is specific to the application's behavior (such as "Todo #5 is currently selected", or "there is a request in progress to fetch Todos")

#### domain

> Domain data: data that the application needs to show, use, or modify (such as "all of the Todos retrieved from the server")

#### router

[connected-react-router](https://github.com/supasate/connected-react-router)のために利用する

#### ui

> UI state: data that represents how the UI is currently displayed (such as "The EditTodo modal dialog is currently open")

### styles

UI のスタイリングに関するファイルを設置する場所

#### theme

styled components の theme のような、スタイリングに関する固定値をオブジェクトで表現する
