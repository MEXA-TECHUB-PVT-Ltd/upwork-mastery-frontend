import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useIsFocused } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar
} from 'react-native-paper';
// ...
const MyWebComponent = ({ navigation }) => {
    const isFocused = useIsFocused()
    const { width } = useWindowDimensions();
    const [all, setall] = useState([]);

    const alllist = async () => {
        try {
            const response = await fetch(global.url + "policy/GetTermsAndCondition.php")
            const json = await response.json();
            setall(json.TermsAndCondition);            //json.id to sub ides ayan ge

            // console.log(json.TermsAndCondition)

        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    const source = {
        html: `${all}
     `
    };
    useEffect(() => {
        alllist()
    }, [isFocused]);
    return (
        <>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }} >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Terms & Conditions" />
                <Appbar.Action onPress={() => { }} />
            </Appbar.Header>

            <View style={{ marginHorizontal: '1%' }}>
                <RenderHtml
                    contentWidth={width}
                    source={source}

                />
            </View>
        </>
    )
}
export default MyWebComponent;