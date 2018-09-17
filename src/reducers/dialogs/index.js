import dialogsConsts from 'src/constants/actionTypes/fetchData/chat';

const dialogs = (state = {}, action) => {
  switch (action.type) {
    case dialogsConsts.DIALOGS_FETCH_REQUEST:
    case dialogsConsts.DIALOGS_FETCH_SUCCESS:
    case dialogsConsts.DIALOGS_FETCH_FAILURE:
    {
      return {
        ...state,
        data: action.data,
        error: action.error,
        isLoading: (!action.error && !action.data),
      };
    }

    default:
      return state;
  }
};

export default dialogs;
