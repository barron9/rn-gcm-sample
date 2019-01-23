import React from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const GMCampaignHeader = (props) => {
    return (
        <View style={{
            height: 200, elevation: 2, shadowOffset: { width: 1, height: 1, },alignContent:'stretch',
            shadowColor: 'gray',
            shadowOpacity: .6,
            borderRadius: 0
        }}>
            <Image resizeMode={'stretch'} source={{ uri: props.url }} style={{width:undefined,height:undefined,flex:1 }}/>
        </View>);
}

GMCampaignHeader.propTypes = {
    url: PropTypes.string,
};

export default GMCampaignHeader