import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';

import App from '~ui/App';
import { GlobalStyle } from '~ui/styles/globals';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ReactRouterDom.BrowserRouter>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </ReactRouterDom.BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
