import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ position:'absolute', zIndex:9999, left: 10, top: 30 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Image
                    style={{ width: 32, height: 30, zIndex:9998 }}
                    source={require('../../icons/menu-icon.png')}
                />
            </TouchableHighlight>
            <Text style={{ position:'absolute', zIndex:1, left:0, right:0, textAlign: 'center', fontSize:23, fontWeight:'bold' }}>{ this.props.pagetitle }</Text>
        </View>);
    }
}