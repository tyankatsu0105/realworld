import 'the-new-css-reset/css/reset.css';
import { GlobalStyle, theme } from '../src/ui/styles';
import { ThemeProvider } from 'styled-components';

import * as React from 'react';
import { BaseDecorators } from '@storybook/addons';

import { BrowserRouter } from 'react-router-dom';

export const Primary: BaseDecorators<any>[number] = (Story) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  </BrowserRouter>
);
