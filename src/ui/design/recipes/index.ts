export * from './header';
export * from './header';
export * from './page-loader';

import { Header } from './header/lazy';
import { PageLoader } from './page-loader/lazy';

export const Lazy = {
  Header,
  PageLoader,
};
