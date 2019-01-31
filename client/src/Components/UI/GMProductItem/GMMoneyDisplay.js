import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
var numeral = require('numeral')
const GMMoneyDisplay = (props) => {
    function moneydisplay(props) {
        return string = numeral(props).format('0,0[.] ');
    }
    return (
        <View style={{ flexDirection: props.flexDirection, margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 13, textDecorationLine: 'line-through', fontWeight: 'normal', color: 'gray' }}>{moneydisplay(props.oldprice) + ' ' + props.currencytype}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>{moneydisplay(props.price).split(",")[0]}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#333' }}>{props.price > 999 ? "," : ""}</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#333' }}>{moneydisplay(props.price).split(",")[1]}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '300', color: '#555', marginLeft: 5 }}>{props.currencytype}</Text>
            </View>
        </View>
    );
}
GMMoneyDisplay.propTypes = {
    price: PropTypes.number,
    currencytype: PropTypes.string,
    oldprice: PropTypes.number,
    flexDirection: PropTypes.string
};
export default GMMoneyDisplay