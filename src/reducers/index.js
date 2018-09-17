import { combineReducers } from 'redux';

import dialogs from './dialogs';
import chat from './chat';
import user from './user';

const rootReducer = combineReducers({
  dialogs, chat, user,
});

export default rootReducer;
