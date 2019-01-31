import ScrollableTabView from 'rn-collapsing-tab-bar'
import React from 'react';
import { View, WebView, Text, ScrollView, Dimensions } from 'react-native';
import samplehtml from './samplehtml';
import HTML from 'react-native-render-html';
const collapsableComponent = (
    <View style={{ height: 700, backgroundColor: 'red', width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 50, color: '#88888855', fontWeight: 'bold' }}>ÜRÜN DETAY</Text>
    </View>
);
export default class GMProductInfo extends React.Component {
    render() {
        return (
            <ScrollableTabView
                style={{ backgroundColor: 'white' }}
                collapsableBar={collapsableComponent}>
                <ScrollView style={{ flex: 1 }} scrollEnabled={false} tabLabel="Genel Bakış">
                    <HTML html={samplehtml} ignoredTags={['head', 'scripts', 'a', 'ul', 'li', 'footer', 'nav', 'button', 'modal']} imagesMaxWidth={Dimensions.get('window').width} />
                </ScrollView>
                <ScrollView style={{ flex: 1 }} scrollEnabled={false} tabLabel="Kamera Özellikleri">
                    <HTML html={samplehtml} ignoredTags={['head', 'scripts', 'a', 'ul', 'li', 'footer', 'nav', 'button', 'modal']} imagesMaxWidth={Dimensions.get('window').width} />
                </ScrollView>
                <View tabLabel="Teknik Özellikleri" />
            </ScrollableTabView>
        );
    }
};