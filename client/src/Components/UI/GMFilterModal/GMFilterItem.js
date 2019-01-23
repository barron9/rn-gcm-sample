import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import GMCheckbox from './GMCheckbox';
import GMStars from './GMStars';


export default GMFilterItem = (props) => {

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => props.onpress && props.onpress()} style={{ flexDirection: 'row', marginBottom: 5,flex:1,borderBottomColor: '#eee', borderBottomWidth: .5, alignItems: 'center', height: 40, borderBottomColor: 'orange', borderBottomWidth: props.selected ? .5 : 0 }}>
            <GMCheckbox selected={!props.selected} onpress={() => props.onpress && props.onpress()}/>
            {(props.stars > 0 && props.comments) ?
                <GMStars stars={props.stars} color="orange" comments={props.comments} />
                :
                <Text style={{ color: 'gray', fontSize: 16, fontWeight: '100' }}>{props.productType}</Text>
            }

        </TouchableOpacity>
    );

}
GMFilterItem.propTypes = {
    stars: PropTypes.number,
    comments: PropTypes.number,
    productType: PropTypes.string,
    selected: PropTypes.bool
};