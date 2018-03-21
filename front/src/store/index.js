import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { default as postReducer } from '../components/Posts/reducer';

export function configureStore() {
  let reducers = combineReducers({ postReducer });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
}
