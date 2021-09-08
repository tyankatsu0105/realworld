export * from './app-bar';
export * from './backdrop';
export * from './icon';

import { AppBar } from './app-bar/lazy';
import { Backdrop } from './backdrop/lazy';
import { Icon } from './icon/lazy';

export const Lazy = {
  AppBar,
  Backdrop,
  Icon,
};
