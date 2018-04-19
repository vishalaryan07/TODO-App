import {
  ITEMS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS: {
      console.log('fetch result:', action);
      return action.payload;
    }
    default: {
      return state;
    }
    
  }
};
