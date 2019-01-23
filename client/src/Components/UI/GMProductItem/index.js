import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GMStars from './GMStars';
import GMMoneyDisplay from './GMMoneyDisplay';

export default GMProductItem = (props) => {

    return (<TouchableOpacity activeOpacity={.8} style={{
        backgroundColor: 'white',
        padding: 5,
        margin: 3, alignItems: 'center', justifyContent: 'center',
        flex: 1, elevation: 3, shadowOffset: { width: 2, height: 2, },
        shadowColor: 'gray',
        shadowOpacity: 1,
        borderRadius: 5
    }}>
        <Image resizeMode={'cover'} source={{ uri: props.url }} style={{ width: 100, height: 100 }} />

        <Text style={{ color: 'gray', fontWeight: '100', fontSize: 18 }}>{props.productname}</Text>
        <GMStars stars={props.stars} comments={props.comments} />
        <View style={{ height: 1, width: 150, backgroundColor: '#eee' }} />
        <GMMoneyDisplay price={props.price} currencytype={props.currencytype ? props.currencytype : "₺"} />
    </TouchableOpacity>);


}
GMProductItem.propTypes = {
    url: PropTypes.string,
    stars: PropTypes.string,
    comments: PropTypes.string,
    productname: PropTypes.string,
    price: PropTypes.any,
    currencytype: PropTypes.string
};