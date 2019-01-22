import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';


export default GMFilterModalApplyButton = (props) => {

    return (
        <TouchableOpacity activeOpacity={.9} onPress={() => props.showgmfilterbutton()}
            style={{
                justifyContent: 'center',  alignItems: 'center',
                borderTopColor: '#eee', borderTopWidth: .5, height: 60, backgroundColor: 'orange', borderRadius: 1
            }} >

            <View >
                <Text style={{ color: 'white', fontSize: 18 }}>Uygula</Text></View>

        </TouchableOpacity>
    );

}
GMFilterModalApplyButton.propTypes = {
    name: PropTypes.string,showgmfilterbutton:PropTypes.func
};