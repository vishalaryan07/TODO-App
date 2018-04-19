import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';

class ListItem extends Component {

  deleteItem = () => {
    Alert.alert(
      'Alert',
      'Do you want to delete this task from your list.',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.okBtnClicked() },
      ],
      { cancelable: false }
    );
  }

  okBtnClicked = () => {
    const { uid } = this.props.itemList;
    firebase.database().ref(`/users/items/${uid}`).remove();
  }

  render() {
    const { itemName, uid } = this.props.itemList;
    console.log(uid);
    return (
      <TouchableOpacity onLongPress={this.deleteItem}>
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyles}>
          {itemName}
        </Text>
      </View>
      </TouchableOpacity>
    );  
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ListItem;
