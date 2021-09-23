import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from '~ui/App';
import { GlobalStyle, theme } from '~ui/styles';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ReactRouterDom.BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ReactRouterDom.BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
