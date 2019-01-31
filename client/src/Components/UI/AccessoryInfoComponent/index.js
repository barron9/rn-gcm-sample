import React from 'react';
import GMSwiper from './GMSwiper';
import GMbackButton from './GMbackButton';
import { View } from 'react-native';
import GMDiscount from './GMDiscount';
import GMMoneyDisplay from '../GMProductItem/GMMoneyDisplay';

export default class AccessoryInfoComponent extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {

        return (<View style={{
            backgroundColor: 'white', elevation: 4, shadowOffset: { width: 2, height: 2, },
            shadowColor: 'gray',
            shadowOpacity: 1,
            marginBottom: 10,
            
        }}>
            <GMbackButton />
            <GMSwiper />
            <GMDiscount direction={"left"} height={20} width={10} color={'orange'} discount={20} lang={'tr'} productname={"GM9 Pro"} />
            <GMMoneyDisplay flexDirection={"row"} 
                price={Math.floor(Math.random() * (999 - 200 + 200)) + 200}
                oldprice={Math.floor(Math.random() * (999 - 200 + 200)) + 200}
                currencytype={"tl"} />
        </View>);

    }
}