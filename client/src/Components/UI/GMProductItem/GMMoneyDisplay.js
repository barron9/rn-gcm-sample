import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

var numeral = require('numeral')


const GMMoneyDisplay = (props) => {
    function moneydisplay(props) {

        return string = numeral(props.price).format('0,0[.] ' );
  
    }
    return (
        <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '300', color: '#555',marginLeft:1 }}>{props.currencytype}</Text>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>{moneydisplay(props).split(",")[0]}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#333' }}>{props.price > 999 ? "," : ""}</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#333' }}>{moneydisplay(props).split(",")[1]}
                </Text>
            </View>

        </View>
    );

}
GMMoneyDisplay.propTypes = {
    price: PropTypes.price,
    currencytype:PropTypes.currencytype
};

export default GMMoneyDisplay