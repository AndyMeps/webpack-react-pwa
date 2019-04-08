// @flow
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import type { Store, State } from './types';
import rootReducer from './reducers';

export default function configureStore(preloadedState?: State): Store {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', (): void => store.replaceReducer(rootReducer));
  }

  return store;
}
