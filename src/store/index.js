import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import promise from './promise';

let store = null;

export default function configureStore(initialState = {}) {
  if (store === null) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(promise, thunk)
    );
  }
  return store;
}
