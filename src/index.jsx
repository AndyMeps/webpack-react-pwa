// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './components/App';
import pwa from './pwa';

pwa.registerServiceWorker();

const store = configureStore();

const renderApp = () => {
  const element = document.getElementById('app');
  if (!element) return;

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    element,
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
