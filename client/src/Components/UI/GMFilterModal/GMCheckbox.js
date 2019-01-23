import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const ficon = <FoundationIcon name="check" size={20} color="orange" />
const GMCheckbox = (props) => {


    return (
        <TouchableOpacity onPress={() => props.onpress && props.onpress()} activeOpacity={1}
            style={{ flexDirection: 'row', margin: 5, alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 5, borderColor: 'gray', borderWidth: .5 }}>
            {!props.selected && ficon}
        </TouchableOpacity>
    );



}
GMCheckbox.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.bool,
    onpress: PropTypes.fun
};

export default GMCheckbox
