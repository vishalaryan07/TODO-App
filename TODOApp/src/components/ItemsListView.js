import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ListView,
  AsyncStorage
} from 'react-native';
import { fetchItemList } from '../actions';
import ListItem from './ListItem';

class ItemsListView extends Component {
  componentWillMount() {
    this.props.fetchItemList();
    this.createDataSource(this.props);
    AsyncStorage.setItem('isLoggedIn', 'yes');
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ itemsList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(itemsList);
  }

  renderRow(itemList) {
    console.log('item name :', itemList);
    const { uid } = itemList;
    return <ListItem key={uid} itemList={itemList} />;
  }
  
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow} 
        onLongPress
      />
    );
  }
}

const mapStateToProps = state => {
  const itemsList = _.map(state.fetchItemReducer, (val, uid) => {
    return { ...val, uid };
  });
  console.log('fetched items: ', itemsList);
  return { itemsList }; 
};

export default connect(mapStateToProps, { fetchItemList })(ItemsListView);

