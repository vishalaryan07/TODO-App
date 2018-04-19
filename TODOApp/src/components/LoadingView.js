import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoadingView extends Component {

  state = {
    isLogged: false
  }
  componentWillMount() {
    this.checkIfLoggedIn();    
  }

  async checkIfLoggedIn() {
    const loggedIN = await AsyncStorage.getItem('isLoggedIn');
    console.log('CHECKING - ', loggedIN);
      if (loggedIN === 'yes') {    
        this.setState({ isLogged: true });
        return true;
      }
      this.setState({ isLogged: false });
      return false;
  }

  renderScreen() {
    if (this.state.isLogged === true) {
      Actions.login({ isLogged: true });
    } else {
      Actions.login({ isLogged: false });
    }
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>  Loading </Text>
      </View>
    );
  }

  render() {
    return this.renderScreen();
    // return (
    //   // <View style={styles.containerStyle}>
    //   //   <Text style={styles.textStyle}>  Loading </Text>
    //     {this.renderScreen()}
    //   // </View>
    // );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    // width: 200,
    alignSelf: 'center',
    fontSize: 20,
    // flex: 1
  }
});

export default LoadingView;
