import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class GMDiscount extends React.Component {
    constructor(props) {
        super(props)
    }
    _borderStyles() {
        if (this.props.direction == 'down') {
            return {
                borderTopWidth: this.props.height,
                borderRightWidth: this.props.width / 2.0,
                borderBottomWidth: 0,
                borderLeftWidth: this.props.width / 2.0,
                borderTopColor: this.props.color,
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
            };
        } else if (this.props.direction == 'left') {
            return {
                borderTopWidth: this.props.height / 2.0,
                borderRightWidth: this.props.width,
                borderBottomWidth: this.props.height / 2.0,
                borderLeftWidth: 0,
                borderTopColor: 'transparent',
                borderRightColor: this.props.color,
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
            };
        }
    }

    render() {
        let borderStyles = this._borderStyles();
        return (
            <View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 24, fontWeight: 'bold', marginLeft: 20 }}>{this.props.productname}</Text>
                    <View style={{
                        flexDirection: 'row',  justifyContent: 'flex-end', 
                    }}>
                        <View style={[styles.triangle, borderStyles, this.props.style]} />
                        <View style={{ backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, marginRight: 10 }}>%{this.props.discount} İndirim</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginLeft: 20, backgroundColor: '#eeeeee', height: 30, width: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'orange' }}>Mobile Özel İndirim</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
});