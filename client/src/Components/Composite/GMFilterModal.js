import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import GMFilterItem from './../UI/GMFilterModal/GMFilterItem';
import GMFilterModalApplyButton from './../UI/GMFilterModal/GMFilterModalApplyButton';

export default class GMFilterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x1: true, x2: false, x3: false, x4: false, x5: true, x6: false, x7: false }
    }
    selectfun(x) {
        this.setState({
            [x]: !this.state[x],
        })

    }
    onItemSelected(){
        
    }
    render() {
        return (
            <Modal animationType="fade" visible={this.props.showgmfilter} transparent animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100 }}>
                <ScrollView style={{
                    flexDirection: 'column', backgroundColor: 'white', shadowColor: '#333',
                    height: 400, padding: 20, flex: 1
                }} showsVerticalScrollIndicator={false}>
                    <Text style={{ fontWeight: '100', color: '#ccc', marginBottom: 20, fontSize: 18 }} numberOfLines={2}>
                        Filtre uygulayarak istediğiniz ürüne daha hızlı ulaşabilirsiniz.
                    </Text>
                    <GMFilterItem /* stars={5} comments={20} */ productType={"Telefon"} selected={this.state.x1} onpress={() => this.selectfun('x1')} />
                    <GMFilterItem /* stars={5} comments={20} */ productType={"Aksesuar"} selected={this.state.x2} onpress={() => this.selectfun('x2')} />
                    <GMFilterItem stars={5} comments={100} /* productType={"Telefon"} */ selected={this.state.x3} onpress={() => this.selectfun('x3')} />
                    <GMFilterItem stars={4} comments={25} /* productType={"Telefon"} */ selected={this.state.x4} onpress={() => this.selectfun('x4')} />
                    <GMFilterItem stars={3} comments={98} /* productType={"Telefon"} */ selected={this.state.x5} onpress={() => this.selectfun('x5')} />
                    <GMFilterItem stars={2} comments={10} /* productType={"Telefon"} */ selected={this.state.x6} onpress={() => this.selectfun('x6')} />
                    <GMFilterItem stars={1} comments={4} /* productType={"Telefon"} */ selected={this.state.x7} onpress={() => this.selectfun('x7')} />
                </ScrollView>
                <GMFilterModalApplyButton showgmfilterbutton={() => this.props.showgmfilterbutton()} />
                <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)' }} />
            </Modal>
        );

    }
}
GMFilterModal.propTypes = {
    name: PropTypes.string,
    showgmfilter: PropTypes.bool,
    onItemSelected: PropTypes.any
};