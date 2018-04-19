import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import LoginView from './components/LoginView';
import ItemsListView from './components/ItemsListView';
import AddItems from './components/AddItems';
import LoadingView from './components/LoadingView';

class RouterComponent extends Component {

  logoutBtnClicked = () => {
    console.log('before', AsyncStorage.getItem('isLoggedIn'));
    // const keys = ['isLoggedIn'];
    // AsyncStorage.multiRemove(keys, (err) => {
    //   // keys k1 & k2 removed, if they existed
    //   // do most stuff after removal (if you want)
    // });
    AsyncStorage.setItem('isLoggedIn', 'no');
    console.log('after', AsyncStorage.getItem('isLoggedIn'));
    Actions.popTo('login');
  };

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="loading">
            <Scene key="loadScreen" component={LoadingView} hideNavBar initial />
          {/* </Scene> */}

          {/* <Scene key="auth"> */}
            <Scene key="login" component={LoginView} hideNavBar />
          </Scene>
  
          <Scene key='main'>
            <Scene 
              leftTitle='Logout'
              onLeft={() => this.logoutBtnClicked()}
              rightTitle='Add Items'
              onRight={() => Actions.addItems()}
              key='list' 
              component={ItemsListView} 
              title='List' 
              initial 
            />
            <Scene key='addItems' component={AddItems} title='Add Items' />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
