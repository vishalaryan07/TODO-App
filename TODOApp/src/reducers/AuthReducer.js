import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  USERNAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  // console.log('===>', action);

  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case LOGIN_USER_SUCCESS :
      return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state; 
  }
};
