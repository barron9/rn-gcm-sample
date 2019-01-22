import React from 'react';
import PropTypes from 'prop-types';
import { View,Text } from 'react-native';
import GMCheckbox from './GMCheckbox';
import GMStars from './GMStars';


export default GMFilterItem = (props) => {

    return (
        <View style={{ flexDirection: 'row', marginBottom: 5,borderBottomColor:'#eee',borderBottomWidth:.5,alignItems:'center', height: 65, borderBottomColor: 'orange', borderBottomWidth: props.selected ? .5 : 0 }}>
            <GMCheckbox selected={props.selected} />
            {(props.stars > 0 && props.comments) ?
                <GMStars stars={props.stars} color="orange" comments={props.comments} />
                :
                <Text style={{color:'gray',fontSize:16,fontWeight:'100'}}>{props.productType}</Text>
            }

        </View>
    );

}
GMFilterItem.propTypes = {
    stars: PropTypes.number,
    comments: PropTypes.number,
    productType: PropTypes.string,
    selected: PropTypes.bool
};