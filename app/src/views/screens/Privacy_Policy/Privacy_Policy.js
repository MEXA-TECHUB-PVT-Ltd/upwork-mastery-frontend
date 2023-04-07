import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar
} from 'react-native-paper';
// ...
const MyWebComponent = ({navigation}) => {
    return (
        <>
            <View>
                <Appbar.Header
                    style={{ backgroundColor: '#14A800' }}
                >
                    <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                    <Appbar.Content color={'white'} title="Privacy Policy" />
                    <Appbar.Action onPress={() => { }} />
                </Appbar.Header>

            </View>
            <WebView source={{ uri: 'https://mtechub.org/privacy/' }} style={{ flex: 1 }} />
        </>
    )
}
export default MyWebComponent;