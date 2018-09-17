import chatConsts from 'src/constants/actionTypes/messages/chat';

const chat = (state = {}, action) => {
  switch (action.type) {
    case chatConsts.CHAT_ADD_MESSAGE:
    {
      return {
        ...state,
        messages: [...state.messages, {
          author: action.author,
          messageText: action.messageText,
        }],
      };
    }

    default:
      return state;
  }
};

export default chat;
