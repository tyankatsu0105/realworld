import 'the-new-css-reset/css/reset.css';

import { Primary } from './decorators';

export const decorators = [Primary];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
