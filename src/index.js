import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

import { initializeStore } from './state/store';

render(
  <Provider store={initializeStore()}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
