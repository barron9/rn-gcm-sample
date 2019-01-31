import React from 'react';
import { IconButton, Colors } from 'react-native-paper';


export default class GMbackButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<IconButton
            icon="navigate-before"
            color={Colors.deepOrangeA200}
            size={30}
            onPress={() => console.log('Pressed')}
        />)
    }

}