import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {
  ADD_ITEM,
  ITEM_UPDATE,
  ITEMS_FETCH_SUCCESS
} from './types';

export const itemUpdate = ({ props, value }) => {
  return {
    type: ITEM_UPDATE,
    payload: { props, value }
  };
};

export const addItem = ({ itemName }) => {
  console.log('item name:', itemName);
  return (dispatch) => {
    firebase.database().ref('/users/items')
      .push({ itemName })
      .then(() => {
        dispatch({ type: ADD_ITEM });
        Actions.main({ type: 'reset' });
      })
      .catch(() => console.log('error!!'));
  };
};

export const fetchItemList = () => {
  return (dispatch) => {
    firebase.database().ref('/users/items')
      .on('value', snapshot => {
        // alert('i m here');
        dispatch({ type: ITEMS_FETCH_SUCCESS, payload: snapshot.val() },
        { allowMore: true });
      });
  };
};

