const ui = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION': {
      return {
        ...state,
        notify: !state.notify,
      };
    }
    case 'SHOW_USER_SETTINGS': {
      return {
        ...state,
        userSettings: !state.userSettings,
      };
    }
    case 'SHOW_CHAT_SETTINGS': {
      return {
        ...state,
        chatSettings: !state.chatSettings,
      };
    }
    case 'MAKE_BUTTON_ACTIVE': {
      return {
        ...state,
        burgerActive: !state.burgerActive,
      };
    }
    default:
      return state;
  }
};
export default ui;

