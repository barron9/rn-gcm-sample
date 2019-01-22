import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import GMFilterItem from './../UI/GMFilterModal/GMFilterItem';
import GMFilterModalApplyButton from './../UI/GMFilterModal/GMFilterModalApplyButton';

export default GMFilterModal = (props) => {

    return (
        <Modal animationType = "fade" visible={props.showgmfilter} animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100 }}>
            <ScrollView style={{
                flexDirection: 'column', backgroundColor: 'white', shadowColor: '#333',
                height: 400, padding: 20
            }} showsVerticalScrollIndicator={false}>

                <Text style={{ fontWeight: '100', color: '#ccc', marginBottom: 20, fontSize: 18 }} numberOfLines={2}>
                    Filtre uygulayarak istediğiniz ürüne daha hızlı ulaşabilirsiniz.
            </Text>
                <GMFilterItem /* stars={5} comments={20} */ productType={"Telefon"} />
                <GMFilterItem /* stars={5} comments={20} */ productType={"Aksesuar"} />
                <GMFilterItem stars={5} comments={100} /* productType={"Telefon"} */ />
                <GMFilterItem stars={4} comments={25} /* productType={"Telefon"} */ />
                <GMFilterItem stars={3} comments={98} /* productType={"Telefon"} */ />
                <GMFilterItem stars={2} comments={10} /* productType={"Telefon"} */ />
                <GMFilterItem stars={1} comments={4} /* productType={"Telefon"} */ />
            </ScrollView>
            <GMFilterModalApplyButton showgmfilterbutton={() => props.showgmfilterbutton()} />
            <TouchableOpacity style={{ backgroundColor: 'black', opacity: .5, flex: 1, height: 400 }} onPress={() => alert('setstate/close modal')} />

        </Modal>
    );


}
GMFilterModal.propTypes = {
    name: PropTypes.string,
    showgmfilter: PropTypes.bool
};