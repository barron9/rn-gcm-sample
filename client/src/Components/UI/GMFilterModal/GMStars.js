import React from 'react';
import PropTypes from 'prop-types';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import { View, Text } from 'react-native';



let arr = [1, 2, 3, 4, 5]

const GMStars = (props) => {
    const ficon = arr.map((item, i) => {
        return (
            <FoundationIcon name="star" size={20} color={i < props.stars ? "orange" : "gray"} style={{ marginRight: 3 }} />
        );
    })
    return (
        <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
            {ficon}
            <Text style={{ color: '#ccc', fontSize: 14, margin: 5 }}>({props.comments})</Text>
        </View>
    );

}
GMStars.propTypes = {
    stars: PropTypes.number,
    comments: PropTypes.number,
    color: PropTypes.string
};

export default GMStars
