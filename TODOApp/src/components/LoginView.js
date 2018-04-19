import React, { Component } from 'react';
import { 
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { usernameChanged, loginUser } from '../actions';


class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Name' };
  }

  componentWillMount() {
    if (this.props.isLogged === true) {
      Actions.main();
    }
    // const loggedIn = this.checkIfLoggedIn();
    // if (loggedIn) {
    //   Actions.main();
    // }
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  // async checkIfLoggedIn() {
  //   const loggedIN = await AsyncStorage.getItem('isLoggedIn');
  //   console.log('CHECKING - ', loggedIN);
  //     if (loggedIN === 'yes') {
  //       return true;
  //     }
  //     return false;
  // }  

  loginBtnClicked() {
    const { username } = this.props;
    if (username === '') {
      Alert.alert('Please enter valid name');
    } else {
      this.props.loginUser(username);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={styles.headerStyle}> TODO </Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder={this.state.text}
          autoCorrect={false}
          onChangeText={this.onUsernameChange.bind(this)}
          value={this.props.username}
        />

      {/* <Button
        title='Login'
        onPress={this.loginBtnClicked.bind(this)}

      /> */}

      <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.loginBtnClicked()}>
          <Image 
            source={require('../assets/sign-in.png')} 
          />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 20,
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold'
  },
  inputStyle: {
    marginTop: 150,
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center'
  },
  ButtonStyle: {
    marginTop: 20,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { username } = auth;
  return {
    username
  };
};

export default connect(mapStateToProps, { 
  usernameChanged, loginUser })(LoginView);
