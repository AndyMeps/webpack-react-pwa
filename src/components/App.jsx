// @flow
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Loading } from './atoms';
import { Navigation } from './layout';
import { IndexView, AboutView } from './views';

const App = () => (
  <Suspense fallback={Loading}>
    <Router>
      <Navigation />
      <Route path="/" exact component={IndexView} />
      <Route path="/about" component={AboutView} />
    </Router>
  </Suspense>
);

export default App;
