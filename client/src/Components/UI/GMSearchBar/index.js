import FoundationIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


export default GMSearchBar = (props) => {
    return (
        <View style={{
            backgroundColor: 'white',
            marginTop: 5,
            marginBottom:5,
            marginLeft:10,
            marginRight:10,
            height: 50, marginLeft: 10, marginRight: 10, elevation: 2, shadowOffset: { width: 1, height: 1, },
            shadowColor: 'gray',
            shadowOpacity: .6,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <FoundationIcon name="search" size={30} color={"orange"} style={{ marginLeft: 15, fontWeight: '100' }} />
            <View style={{ flex: 1,justifyContent:'center',}}>
                <TextInput style={{ flex: 1, fontSize: 18,  paddingLeft: 7 ,marginTop:10}} placeholder="Aranacak kelime giriniz... " onSubmitEditing={() => props.onSubmitEditing}
                /></View>
            <View style={{ backgroundColor: '#eee', borderRadius: 15, paddingTop: 2, paddingBottom: 2, paddingLeft: 15, paddingRight: 15, marginTop: 1, marginBottom: 1, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '200', fontSize: 19 }}>53</Text>
            </View>

        </View>);
}

GMSearchBar.propTypes = {
    searchkey: PropTypes.string,
    onSubmitEditing: PropTypes.func
};