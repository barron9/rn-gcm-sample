import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Button, ScrollView } from 'react-native';

//import { connect } from 'react-redux';
//import { addPlace } from './place';
import GMFilterModal from './src/Components/Composite/GMFilterModal';
import GMSorterModal from './src/Components/Composite/GMSorterModal';
import GMCampaignHeader from './src/Components/UI/GMCampaignHeader';
import GMProductItem from './src/Components/UI/GMProductItem'
import GMSearchBar from './src/Components/UI/GMSearchBar'
import GMMoreComponent from './src/Components/UI/GMMoreComponent'
import GMModelItem from './src/Components/UI/GMModelItem'

//import { listRepos } from './reducer';
console.disableYellowBox = true;

export default class App extends Component {
    static navigationOptions = {
        title: 'lang',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { showgmfilter: false, showgmsorter: false }
        const lang = [
            { shortform: 'tr', longform: 'Türkçe' },

            { shortform: 'en', longform: 'English' },
            { shortform: 'fr', longform: 'French' },

        ];
        global.lang = lang;
    }
    componentDidMount() {
        //this.props.dispatch({type:'INC'})

        // this.props.listRepos.dispatch("GET_REPOS")
    }
    authapi() {
        // this.props.navigation.navigate('Login')
        // this.props.add('baglanma denemesi')
        //alert(JSON.stringify(this.props))
    }
    showgmfilter() {
        this.setState({ showgmfilter: !this.state.showgmfilter })
    }
    showgmsorter() {
        this.setState({ showgmsorter: !this.state.showgmsorter })
    }
    render() {
        const { repos } = this.props;
        return (


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

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 0,
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});





