import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from '~ui/App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
