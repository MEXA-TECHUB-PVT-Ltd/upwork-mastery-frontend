import React, { useState, useEffect } from 'react';


import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
  
    const ckecking = async () => {
        setTimeout(() => {
            navigation.goBack()
        }, 500)

    }

    useEffect(() => {
        ckecking()


    }, [isFocused]);

    return (
        <ScrollView >
            {/* <ActivityIndicator
                // color={global.color}
                size="large"
                // style={}
            /> */}
        </ScrollView>
    );
};

export default Home  
