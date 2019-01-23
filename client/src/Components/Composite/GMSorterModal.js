import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import GMSorterItem from './../UI/GMSorterModal/GMSorterItem';
import GMSorterModalApplyButton from './../UI/GMSorterModal/GMSorterModalApplyButton';

export default GMSorterModal = (props) => {

    return ( 
        <Modal animationType = "fade" visible={props.showgmsorter} transparent animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100,marginBottom:100 }}>
            <ScrollView style={{backgroundColor:'white',
                flexDirection: 'column',  shadowColor: '#333',
                height: 400, padding: 20
            }} showsVerticalScrollIndicator={false}>

                <Text style={{ fontWeight: '100', color: '#ccc', marginBottom: 20, fontSize: 18 }} numberOfLines={2}>
                    Sıralayarak istediğiniz ürüne daha hızlı ulaşabilirsiniz.
            </Text>
                <GMSorterItem /* stars={5} comments={20} */ productType={"En çok Satanlar"} selected={true} />
                <GMSorterItem /* stars={5} comments={20} */ productType={"En Yeni Ürünler"} />
                <GMSorterItem /* stars={5} comments={20} */ productType={"Fiyata göre artan"} />
                <GMSorterItem /* stars={5} comments={20} */ productType={"Fiyata göre azalan"} />
                <GMSorterItem /* stars={5} comments={20} */ productType={"En çok yorum alan"} />
                <GMSorterItem /* stars={5} comments={20} */ productType={"En çok beğenilen"} />



            </ScrollView>
            <GMSorterModalApplyButton showgmsorterbutton={() => props.showgmsorterbutton()} />
            <View style={{height:100,backgroundColor:'rgba(52, 52, 52, 0.8)'}}/>

        </Modal>
    );


}
GMSorterModal.propTypes = {
    name: PropTypes.string,
    showgmsorter: PropTypes.bool
};