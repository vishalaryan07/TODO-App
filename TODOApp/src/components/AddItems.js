import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { addItem, itemUpdate } from '../actions';

class AddItems extends Component {

  addItemBtnClicked() {
    const { itemName } = this.props;
    if (itemName === '') {
      Alert.alert('Please enter task');
    } else {
      this.props.addItem({ itemName });
    }
  }

  render() {
    return (
      <View>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Item'
          autoCorrect={false}
          onChangeText={text => this.props.itemUpdate({ props: 'itemName', value: text })}
          value={this.props.itemName}
        />

        <Button rounded style={styles.ButtonStyle} onPress={this.addItemBtnClicked.bind(this)}>
            <Text>Add Item</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    alignSelf: 'center',
  }
});

const mapStateToProps = ({ addItemReducer }) => {
  const { itemName } = addItemReducer;
  return { itemName };
};

export default connect(mapStateToProps,
{ addItem, itemUpdate
})(AddItems);
