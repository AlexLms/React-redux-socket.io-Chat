import { combineReducers } from 'redux';

import ui from './toggleBoolean';
import toggleModal from './toggleModal';

const rootReducer = combineReducers({
  ui, toggleModal,
});

export default rootReducer;
