import userConsts from 'src/constants/actionTypes/user';

const { USER_GET_NAME } = userConsts;

export const nameUser = name => dispatch => {
  dispatch({ type: USER_GET_NAME, author: name });
};
