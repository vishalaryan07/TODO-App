import {
  ADD_ITEM,
  ITEM_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  itemName: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_UPDATE:
      return { ...state, [action.payload.props]: action.payload.value };
    case ADD_ITEM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
