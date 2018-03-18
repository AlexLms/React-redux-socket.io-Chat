const chat = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, {
          author: action.author,
          text: action.text,
        }],
      };
    case 'ADD_USER':
      return {
        ...state,
        author: action.author,
      };
    case 'TOGGLE_ENTER_MODAL':
      return {
        ...state,
        isPopupOn: !state.isPopupOn,
      };
    default:
      return state;
  }
};

export default chat;
