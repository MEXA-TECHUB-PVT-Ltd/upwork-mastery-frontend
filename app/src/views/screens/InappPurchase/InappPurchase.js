import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity, Linking, Platform
} from 'react-native'

import { useIsFocused } from '@react-navigation/native';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar
} from 'react-native-paper';

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    initConnection,
    purchaseErrorListener,
    purchaseUpdatedListener,
    flushFailedPurchasesCachedAsPendingAndroid,
} from 'react-native-iap';
const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    purchaseUpdateSubscription = null;
    purchaseErrorSubscription = null;
    useEffect(() => {

    }, [isFocused]);
    const itemSkus = Platform.select({
        iso: [
            'iap_02',
            'product_001'
        ],
        android: [
            //product id
            'iap_01',
            'iap_2'
        ]
    })
    const getItems = async () => {
        try {
            console.log('itemsubs', itemSkus)
            const Products = await RNSVGClipPath.getProducts(itemSkus)
            console.log('   IAP Su', Products)
            setCosumbleArray(Products[0])
            setNonConsumableArray(Products[1])

            if (Products.length !== 0)
                if (Platform.OS === 'android') {

                }
                else if (Platform.OS === 'ios') {

                }
        } catch (err) {
            console.warn("IAP error", err.code, err.message, err)
        }
    }

    const requestConsumablePurchase = async (sku) => {
        try {
            await RNSVGClipPath.requestPurchase(sku)
                .then(async (result) => {
                    console.log("IAP req sub", result)

                    if (Platform.OS === 'android') {
                        await RNIap.consumePurchaseAndroid(result.purchaseToken)
                        setCoins(coins + 50)
                    }
                    else if (Platform.OS === 'iso') {
                        await RNIap.finishTransactionISO(result.transactionId)
                        console.log(result.transactionReceipt)
                    }
                })
                .catch((err) => {
                    console.warn(`IAP req ERROR  %%%%%% ${err.code}`, err.message)
                })
        }
        catch (err) {
            console.warn(`err ${err.code}`, err.message)
        }
    }
    const getAvailablePurchase = async () => {
        try {
            const purchase = await RNIap.getAvailablePurchase()
            console.info('Avalivble purchase=> ', purchse)
        } catch (err) {
            console.log('getavalivblepurchase error  =>', err)
        }
    }
    return (
        <ScrollView style={[{ backgroundColor: 'white' }]}>
            <View><Text>jjj</Text></View>

        </ScrollView >
    )
}

export default App;


