import FoundationIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput,Platform } from 'react-native';


const GMSearchBar = (props) => {
    return (
        <View style={{
            backgroundColor: 'white',
            marginTop: 5,
            marginBottom:5,
            marginLeft:10,
            marginRight:10,
            height: 50,  elevation: 2, shadowOffset: { width: 1, height: 1, },
            shadowColor: 'gray',
            shadowOpacity: 1,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <FoundationIcon name="search" size={30} color={"orange"} style={{ marginLeft: 15, fontWeight: '100' }} />
                <TextInput style={{ flex: 1, fontSize: 18,  paddingLeft: 7 ,marginTop:Platform.OS=='ios'?0:10}} placeholder="Aranacak kelime giriniz... " onSubmitEditing={() => props.onSubmitEditing}
                />
            <View style={{ backgroundColor: '#eee', borderRadius: 15, paddingTop: 2, paddingBottom: 2, paddingLeft: 15, paddingRight: 15, marginTop: 1, marginBottom: 1, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '200', fontSize: 19 }}>{props.searchnumber}</Text>
            </View>

        </View>);
}

GMSearchBar.propTypes = {
    searchkey: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    searchnumber:PropTypes.number
};

export default GMSearchBar