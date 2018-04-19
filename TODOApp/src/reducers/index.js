import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddItemReducer from './AddItemReducer';
import FetchItemReducer from './FetchItemReducer';

export default combineReducers({
  // arr: () => []
  auth: AuthReducer,
  addItemReducer: AddItemReducer,
  fetchItemReducer: FetchItemReducer
});
