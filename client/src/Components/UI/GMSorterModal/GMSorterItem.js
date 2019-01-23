import React from 'react';
import PropTypes from 'prop-types';
import { View, Text ,TouchableOpacity} from 'react-native';


const GMSorterItem = (props) => {

    return (
        <TouchableOpacity activeOpacity={.8} onPressIn={()=> props.onpress && props.onpress()} style={{
            flexDirection: 'row', marginBottom: 5, borderBottomColor: '#eee', borderBottomWidth: .5, alignItems: 'center', height: 40,
            borderBottomColor: props.selected ? 'orange' : 'gray',
            borderBottomWidth: props.selected ? .5 : 0,
            borderTopColor: props.selected ? 'orange' : 'gray',
            borderTopWidth: props.selected ? .5 : 0
        }}>

            <Text style={{ color: props.selected ? 'orange' : 'gray', fontSize: 16, fontWeight: props.selected ? 'bold' : '100' }}>{props.productType}</Text>


        </TouchableOpacity>
    );

}
GMSorterItem.propTypes = {
    //stars: PropTypes.number,
    //comments: PropTypes.number,
    productType: PropTypes.string,
    selected: PropTypes.bool,
    onpress:PropTypes.fun
};

export default GMSorterItem