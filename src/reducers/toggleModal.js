const toggleModal = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return {
        ...state,
        [action.id]: !state[action.id],
      };
    }
    default:
      return state;
  }
};
export default toggleModal;
