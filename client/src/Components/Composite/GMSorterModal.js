import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import GMSorterItem from './../UI/GMSorterModal/GMSorterItem';
import GMSorterModalApplyButton from './../UI/GMSorterModal/GMSorterModalApplyButton';

export default class GMSorterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x1: false, x2: false, x3: false, x4: false, x5: false, x6: false, x7: false }
    }
    selectfun(x) {
        this.setState({
            [x]: !this.state[x],
        })
     
        let data = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6']
        for (let i = 0; i < data.length; i++) {
            if (x == data[i]) {

                this.setState({
                    x: !this.state[x],
                })
            } else {
                this.setState({
                    [data[i]]: false
                })
            }

        }
    }
    render() {
        return (
            <Modal animationType="fade" visible={this.props.showgmsorter} transparent animated hardwareAccelerated style={{ top: 0, flex: 1, zIndex: 100, elevation: 100, marginBottom: 100 }}>
                <ScrollView style={{
                    backgroundColor: 'white',
                    flexDirection: 'column', shadowColor: '#333',
                    height: 400, padding: 20
                }} showsVerticalScrollIndicator={false}>

                    <Text style={{ fontWeight: '100', color: '#ccc', marginBottom: 20, fontSize: 18 }} numberOfLines={2}>
                        Sıralayarak istediğiniz ürüne daha hızlı ulaşabilirsiniz.
            </Text>
                    <GMSorterItem /* stars={5} comments={20} */ productType={"En çok Satanlar"} selected={this.state.x1} onpress={() => this.selectfun('x1')} />
                    <GMSorterItem /* stars={5} comments={20} */ productType={"En Yeni Ürünler"} selected={this.state.x2} onpress={() => this.selectfun('x2')} />
                    <GMSorterItem /* stars={5} comments={20} */ productType={"Fiyata göre artan"} selected={this.state.x3} onpress={() => this.selectfun('x3')} />
                    <GMSorterItem /* stars={5} comments={20} */ productType={"Fiyata göre azalan"} selected={this.state.x4} onpress={() => this.selectfun('x4')} />
                    <GMSorterItem /* stars={5} comments={20} */ productType={"En çok yorum alan"} selected={this.state.x5} onpress={() => this.selectfun('x5')} />
                    <GMSorterItem /* stars={5} comments={20} */ productType={"En çok beğenilen"} selected={this.state.x6} onpress={() => this.selectfun('x6')} />



                </ScrollView>
                <GMSorterModalApplyButton showgmsorterbutton={() => this.props.showgmsorterbutton()} />
                <View style={{ height: 100, backgroundColor: 'rgba(52, 52, 52, 0.8)' }} />

            </Modal>
        );
    }


}
GMSorterModal.propTypes = {
    name: PropTypes.string,
    showgmsorter: PropTypes.bool
};