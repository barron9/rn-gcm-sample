import FoundationIcon from 'react-native-vector-icons/Foundation';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


export default GMSearchBar = (props) => {
    return (
        <View style={{
            backgroundColor: 'white',
            margin: 10,
            height: 50, marginLeft: 20, marginRight: 20, elevation: 2, shadowOffset: { width: 1, height: 1, },
            shadowColor: 'gray',
            shadowOpacity: .6,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <FoundationIcon name="magnifying-glass" size={20} color={"orange"} style={{ marginLeft: 15 }} />
            <TextInput style={{ flex: 1, fontSize: 20,marginTop:7,paddingLeft:7 }} placeholder="Arama " onSubmitEditing={()=>props.onSubmitEditing}
            />
            <View style={{ backgroundColor: '#eee', borderRadius: 8, paddingTop:5,paddingBottom:5,paddingLeft: 10,paddingRight:10, marginTop: 5,marginBottom:5,marginRight:10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>12</Text>
            </View>

        </View>);
}

GMSearchBar.propTypes = {
    searchkey: PropTypes.string,
    onSubmitEditing:PropTypes.func
};