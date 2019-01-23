import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import GMFilterItem from './GMFilterItem';
import GMFilterModalApplyButton from './GMFilterModalApplyButton';

const GMFilterModal = (props) => {

    return (
        <Modal visible={props.showgmfilter} transparent={true} animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100 }}>
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

        </Modal>
    );


}
GMFilterModal.propTypes = {
    name: PropTypes.string,
    showgmfilter: PropTypes.bool
};

export default GMFilterModal