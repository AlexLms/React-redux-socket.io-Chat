import { createStore } from 'redux';
import rootReducer from './reducers/index';

// our data
import chatPanel from '~/data/chatPanel';
import chatMessage from '~/data/chatMessage';
import currentUserData from '~/data/currentUser';
import messages from '~/data/newMessages';
import newMessagesStatus from '~/data/newMessagesStatus';

const defaultState = {
  toggleModal: {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
  },
  ui: {
    chatPanel,
    currentUserData,
    chatMessage,
    messages,
    newMessagesStatus,
    notify: true,
    userSettings: false,
    chatSettings: false,
    burgerActive: false,
  },
};

const store = createStore(
  rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
