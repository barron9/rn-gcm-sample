import React from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default GMCampaignHeader = (props) => {
    return (
        <View style={{
            height: 200, elevation: 2, shadowOffset: { width: 1, height: 1, },alignContent:'stretch',
            shadowColor: 'gray',
            shadowOpacity: .6,
            borderRadius: 0
        }}>
            <Image resizeMode={'stretch'} source={{ uri: 'http://wekan.generalmobile.com/cfs/files/attachments/G2kTBRmEzutxH8nGD/Screen%20Shot%202019-01-18%20at%2016.51.47.png?token=eyJhdXRoVG9rZW4iOiJ5TXkxNVFDbmpsbmg5anh3Z0ctQnhSZVF6Y19OQnQ5eHVadENrNDI4VEYyIn0%3D' }} style={{width:undefined,height:undefined,flex:1 }}/>
        </View>);
}

GMCampaignHeader.propTypes = {
    url: PropTypes.string,
};