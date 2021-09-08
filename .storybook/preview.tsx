import 'the-new-css-reset/css/reset.css';
import { GlobalStyle } from '../src/ui/styles/globals';

import * as React from 'react';
import { BaseDecorators } from '@storybook/addons';

const withSuspense: BaseDecorators<any>[number] = (Story) => {
  return (
    <React.Suspense fallback="">
      <GlobalStyle>{Story()}</GlobalStyle>
    </React.Suspense>
  );
};

export const decorators = [withSuspense];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
