import React, { Component } from 'react';
import { About } from '../../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#007256';

export default class AboutComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'About';
        let drawerIcon = () => (
            <Image
                source={require('../../icons/info-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} pagetitle="About" />
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is About Screen
                </Text>                
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkviolet',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {
                        this.props.navigation.goBack();                        
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Back to Home</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}