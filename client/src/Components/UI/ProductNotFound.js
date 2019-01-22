import React from 'react';
import { View,Text } from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';

export default ProductNotFound = (props) => {



    return (
        <View
            style={{ flexDirection: 'row', margin: 5, alignItems: 'center', 
            justifyContent: 'center', flex:1, height: 30 ,padding:100}}>
            <FoundationIcon name="info" size={20} color="#ccc" />
            <Text style={{color:'#ccc'}}>Üzgünüz sonucu bulamadık...</Text>
            
        </View>
    );



}
