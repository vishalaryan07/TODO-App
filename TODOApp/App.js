
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import Router from './src/Router';
import reducers from './src/reducers';
import { AsyncStorage } from 'react-native';

export default class App extends Component {

  componentWillMount() {
    const config = {
      // Initialize Firebase
      apiKey: 'AIzaSyBy3zQ7QEYlqXsbg8b7aLzpo-i31gBk8lo',
      authDomain: 'household-items-f95a7.firebaseapp.com',
      databaseURL: 'https://household-items-f95a7.firebaseio.com',
      projectId: 'household-items-f95a7',
      storageBucket: 'household-items-f95a7.appspot.com',
      messagingSenderId: '187281071290'
    };

    firebase.initializeApp(config);
  }

  render() {
    AsyncStorage.getItem('isLoggedIn').then((val) => console.log('is logged in: ', val));
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

