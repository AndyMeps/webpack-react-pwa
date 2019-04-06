// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import pwa from './pwa';

pwa.registerServiceWorker();

const element = document.getElementById('app');

if (element) {
  ReactDOM.render(
    <App />,
    element,
  );
}
