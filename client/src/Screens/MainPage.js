import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Title, Checkbox, Chip, Appbar, Surface, Divider, FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Foundation';
import { View, Text, StyleSheet, StatusBar, FlatList, Button, ScrollView } from 'react-native';

//import { connect } from 'react-redux';
//import { addPlace } from './place';

import GMFilterModal from './../Components/Composite/GMFilterModal';
import GMSorterModal from './../Components/Composite/GMSorterModal';
import GMCampaignHeader from './../Components/UI/GMCampaignHeader';
import GMProductItem from './../Components/UI/GMProductItem'
import GMSearchBar from './../Components/UI/GMSearchBar'
import GMMoreComponent from './../Components/UI/GMMoreComponent'
import GMModelItem from './../Components/UI/GMModelItem'

//import { addPlace } from './place';
//import { listRepos } from './reducer';
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showgmfilter: false, showgmsorter: false }
 
}
  static navigationOptions = {
    title: 'Ana Sayfa',
    headerMode: 'none',
    header: {
      visible: false,
    },
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="home" size={24} color={tintColor} />
    )
  };
  state = {}
  showgmfilter() {
    this.setState({ showgmfilter: !this.state.showgmfilter })
}
showgmsorter() {
    this.setState({ showgmsorter: !this.state.showgmsorter })
}
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'get_products',
        payload: "testestesf"
      })
    // this.props.add('user,pass')

    //this.props.dispatch({type:'INC'})
    // this.props.listRepos.dispatch("GET_REPOS")
  }
  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps !== prevState) {
      // alert(JSON.stringify(nextProps))

      return { someState: nextProps };
    }
    else return null;
  }




  authapi() {
    // this.props.add('user,pass')
    this.props.dispatch(
      {
        type: 'baglan',
        payload: "testestesf"
      })
    //alert(JSON.stringify(this.props))
    //this.props.navigation.navigate('LanguageSelector')
  }
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}

          backgroundColor="#f5f5f5"
          barStyle="dark-content"
        />
        <Appbar style={{ backgroundColor: '#eeeeee', justifyContent: 'space-between' }}>

          <Text style={{ marginLeft: 20, fontSize: 20 }}>General Mobile</Text>
          <Appbar.Action icon="shopping-cart" onPress={() => console.log('Pressed mail')} />

        </Appbar>


        <ScrollView>

<StatusBar
    translucent={false}

    backgroundColor="#ddd"
    barStyle="dark-content"
/>
<GMFilterModal showgmfilter={this.state.showgmfilter} showgmfilterbutton={() => this.showgmfilter()} />
<GMSorterModal showgmsorter={this.state.showgmsorter} showgmsorterbutton={() => this.showgmsorter()} />
<GMSearchBar  /* onSubmitEditing={} */ />
<GMCampaignHeader url={""} />
<FlatList
    showsHorizontalScrollIndicator={false}
    horizontal
    style={{ flex: 1, marginBottom: 10, marginTop: 10 }}
    data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
    renderItem={({ item }) => <GMModelItem
        /*onPress={}*/
        productname="GM 9"
        url={'http://wekan.generalmobile.com/cfs/files/attachments/o2MTXG2auww7KCn3Q/Screen%20Shot%202019-01-18%20at%2016.41.51.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D'}

    />
    }
/>

<FlatList
    numColumns={2}
    style={{ flex: 1 }}
    data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
    renderItem={({ item }) => <GMProductItem
        stars={Math.floor(Math.random() * (5 - 3 + 3)) + 3}
        productname="GM Turbo Şarj Adaptörü (GM5 ve sonrası için)"
        comments={Math.floor(Math.random() * (9999 - 300 + 1)) + 300}
        url={'http://wekan.generalmobile.com/cfs/files/attachments/o2MTXG2auww7KCn3Q/Screen%20Shot%202019-01-18%20at%2016.41.51.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D'}
        price={Math.floor(Math.random() * (999 - 200 + 200)) + 200}
        currencytype={'₺'} />}
/>
<GMMoreComponent />

<Button onPress={() => this.showgmfilter()} style={{ margin: 10 }}
    title="show / hide GMFilterModal"
/>

<Button onPress={() => this.showgmsorter()} style={{ margin: 10 }}
    title="show / hide GMSorterModal"

/>



</ScrollView>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    places: state

  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      //dispatch(addPlace(name))
      dispatch(
        {
          type: 'get_products',
          payload: name
        }
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
export default connect(mapStateToProps)(MainPage)