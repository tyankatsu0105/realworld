## Architecture

[ARCHITECTURE.md](./ARCHITECTURE.md)

## App

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- ~~[linaria](https://linaria.dev/)~~
  - linaria の Vite 向けプラグインが公式で提供していないのがしんどい
    - @linaria/rollup を使うことになる
  - `props => props.isActive && 'red'` みたいにかけずに三項演算子で書かないといけないのがしんどい
  - css 関数に props を伝播できないのがしんどい
  - as props に渡した値によって props の型が変わらないのがしんどい
  - Vite で使うためにいろいろ babel のプラグイン使わないといけなくなるのがしんどい
    - @babel/preset-react
    - @babel/preset-typescript
    - @linaria/babel-preset
  - path 解決するために babel のプラグインを別で使わないといけないのがしんどい
    - babel-plugin-module-resolver
  - クラス名に props の値を使えないのがしんどい
    - `.${props => props.activeClass} {...}` みたいな
- [Styled Components](https://styled-components.com/)

## Testing

- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW](https://mswjs.io/)
- [Cypress](https://www.cypress.io/)
