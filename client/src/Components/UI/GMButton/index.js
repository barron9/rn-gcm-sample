import FoundationIcon from 'react-native-vector-icons/Foundation';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


export default GMButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={{
            backgroundColor: 'white',
            margin: 10,
            height: 30, marginLeft: 20, marginRight: 20, 
            elevation: 2, 
            shadowOffset: { width: 1, height: 1, },
            shadowColor: 'gray',
            shadowOpacity: .8,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <Text style={{ fontWeight: '100', fontSize: 18, color: 'orange' }}>Daha Fazla</Text>

        </TouchableOpacity>);
}

GMButton.propTypes = {
    searchkey: PropTypes.string,
};