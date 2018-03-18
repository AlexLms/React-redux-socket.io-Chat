import { combineReducers } from 'redux';

import ui from './toggleBoolean';
import toggleModal from './toggleModal';
import chat from './chat';

const rootReducer = combineReducers({
  ui, toggleModal, chat,
});

export default rootReducer;
