import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default GMModelItem = (props) => {

    return (<TouchableOpacity activeOpacity={.8} onPress={() => props.onPress} style={{
        width: 130, height: 130,
        padding: 10,
        backgroundColor: 'white',
        padding: 5,
        margin: 3, alignItems: 'center', justifyContent: 'center',
        flex: 1, elevation: 1, shadowOffset: { width: 1, height: 1, },
        shadowColor: 'gray',
        shadowOpacity: .3,
        borderRadius: 5,

    }}>
        <Image resizeMode={'cover'} source={{ uri: props.url }} style={{ width: 80, height: 80 }} />

        <Text style={{ color: 'gray', fontWeight: '100', fontSize: 14, marginTop: 10 }}>{props.productname}</Text>

    </TouchableOpacity>);


}
GMModelItem.propTypes = {
    url: PropTypes.string,
    productname: PropTypes.string,
    onPress: PropTypes.func

};