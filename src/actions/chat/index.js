import dialogsConsts from 'src/constants/actionTypes/fetchData/chat';
import chatConsts from 'src/constants/actionTypes/messages/chat';

import { dialogsFetch } from 'src/api/chat';

const {
  DIALOGS_FETCH_REQUEST,
  DIALOGS_FETCH_SUCCESS,
  DIALOGS_FETCH_FAILURE,
} = dialogsConsts;
const { CHAT_ADD_MESSAGE } = chatConsts;


export const getDialogs = () => dispatch => {
  dispatch({ type: DIALOGS_FETCH_REQUEST });

  dialogsFetch()
    .then(data => {
      dispatch({ type: DIALOGS_FETCH_SUCCESS, data: data.data });
    })
    .catch(error => {
      dispatch({ type: DIALOGS_FETCH_FAILURE, error: error.response.statusText });
    });
};
export const sendMessage = (author, messageText) => dispatch => {
  dispatch({ type: CHAT_ADD_MESSAGE, author, messageText });
};
