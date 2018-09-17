import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'src/reducers';

const defaultState = {
  dialogs: {
    data: {
      dialogs: [],
      groups: [],
      numbers: [],
    },
    isLoading: false,
    error: null,
  },
  chat: {
    messages: [],
  },
  user: {
    author: 'guest',
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
