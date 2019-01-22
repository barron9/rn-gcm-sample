import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip } from 'react-native-paper';
//import { addPlace } from './place';
import GMFilterModal from './../Components/Composite/GMFilterModal';
import GMSorterModal from './../Components/Composite/GMSorterModal';

//import { listRepos } from './reducer';

class LanguageSelector extends Component {
    static navigationOptions = {
        title: 'lang',
        header: null
    };
    state = {}
    constructor(props) {
        super(props);
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
        this.props.navigation.navigate('Login')
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


            <View style={styles.container}>

                <StatusBar
                    translucent={false}

                    backgroundColor="white"
                    barStyle="dark-content"
                />

                <GMFilterModal showgmfilter={this.state.showgmfilter} showgmfilterbutton={() => this.showgmfilter()} />
                <GMSorterModal showgmsorter={this.state.showgmsorter} showgmsorterbutton={() => this.showgmsorter()} />

                <Text style={{ fontWeight: '900', color: '#888', fontSize: 20, marginBottom: 40, marginTop: 50, textAlign: 'center' }}>UI TESTS</Text>


                <Button mode="contained" onPress={() => this.showgmfilter()} style={{ margin: 10 }}
                >
                    show / hide GMFilterModal
</Button>
                <Button mode="contained" onPress={() => this.showgmsorter()} style={{ margin: 10 }}
                >
                    show / hide GMSorterModal
</Button>


            </View>

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




const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            //dispatch(addPlace(name))
            dispatch(
                {
                    type: 'baglan',
                    payload: name
                }
            )
        }
    }
}

export default connect(mapStateToProps)(LanguageSelector)