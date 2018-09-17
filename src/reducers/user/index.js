import userConsts from 'src/constants/actionTypes/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case userConsts.USER_GET_NAME:
    {
      return {
        ...state,
        author: action.author,
      };
    }

    default:
      return state;
  }
};

export default user;
