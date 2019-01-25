import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GMStars from '../../UI/GMProductItem/GMStars';
import GMMoneyDisplay from '../../UI/GMProductItem/GMMoneyDisplay';

const GMProductListItem = (props) => {
    return (<TouchableOpacity activeOpacity={.8} style={{
        backgroundColor: 'white',
        padding: 5,
        margin: 3, alignItems: 'center', justifyContent: 'center',
        flex: 1, flexDirection: 'row', elevation: 1, shadowOffset: { width: 2, height: 2, },
        shadowColor: 'gray',
        shadowOpacity: 1,
        borderRadius: 5
    }}>
        <View style={{
            flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            borderRadius: 5
        }}>
            <View style={{ flex: 1, margin: 0 }}>
                <Image resizeMode='cover' source={{ uri: props.url }} style={{ height: 70 }} />
            </View>
            <View style={{ height: 137, width: 1, backgroundColor: '#eee' }} />
            <View style={{ flex: 2, flexDirection: 'column', paddingLeft: 25, paddingTop: 25, paddingRight: 49 }}>
                <Text style={{ color: 'gray', fontSize: 22, marginLeft: 5 }}>{props.productname}</Text>
                <GMStars stars={props.stars} comments={props.comments} />
                <GMMoneyDisplay price={props.price} currencytype={props.currencytype ? props.currencytype : "₺"} />

            </View>
        </View>
    </TouchableOpacity>);
}
GMProductListItem.propTypes = {
    url: PropTypes.string,
    stars: PropTypes.string,
    comments: PropTypes.string,
    productname: PropTypes.string,
    price: PropTypes.any,
    currencytype: PropTypes.string
};

export default GMProductListItem;