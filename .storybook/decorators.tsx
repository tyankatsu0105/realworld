import 'the-new-css-reset/css/reset.css';
import { GlobalStyle } from '../src/ui/styles/globals';

import * as React from 'react';
import { BaseDecorators } from '@storybook/addons';

import { BrowserRouter } from 'react-router-dom';

export const Primary: BaseDecorators<any>[number] = (Story) => (
  <BrowserRouter>
    <GlobalStyle>{Story()}</GlobalStyle>
  </BrowserRouter>
);
