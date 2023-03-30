import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity
} from 'react-native'
import { appImages } from '../../../assets/utilities/index'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useIsFocused } from '@react-navigation/native';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar
} from 'react-native-paper';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

import img1 from './../../../assets/images/img1.svg';
import img2 from './../../../assets/images/img2.svg';
import img3 from './../../../assets/images/img3.svg';
import img4 from './../../../assets/images/img4.svg';

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [modalVisible, setModalVisible] = useState(false);


    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            src: 'home',
            head: 'Update Profile',
        },
        {
            id: 2,
            src: 'home',
            head: 'Change password',
        },
        {
            id: 3,
            src: 'home',
            head: 'Saved Videos',
        },
        {
            id: 4,
            src: 'home',
            head: 'Privacy Policy',
        },
        {
            id: 5,
            src: 'home',
            head: 'Terms & Conditions',
        },
        {
            id: 6,
            src: 'home',
            head: 'About Us',
        }
    ])


    useEffect(() => {

    }, [isFocused]);
    return (
        <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Content color={'white'} title="Settings" />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Action icon="location-exit" color={'white'} onPress={() => { navigation.goBack() }} />
            </Appbar.Header>

            <View>
                <View style={{ backgroundColor: '#FAFAFA', alignSelf: 'center', width: 280, height: 136, borderRadius: 10, marginTop: '20%', alignItems: 'center' }}>
                    <View style={{ marginTop: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#242424' }}>Johan Deo</Text>
                        <Text style={{ fontSize: 14, color: '#242424', marginTop: '1%' }}>johndeo@gmail.com</Text>
                        <Text style={{ fontSize: 14, color: '#242424', marginTop: '1%' }}>Washington,US</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#14A800', borderRadius: 50, width: 60, height: 60, justifyContent: 'center', alignSelf: 'center', marginTop: 40 }}>
                    <Text style={{ fontSize: 24, color: 'white', alignSelf: 'center' }}>JD</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: '5%' }}>
                <FlatList
                    data={TEMP_DATA}
                    ItemSeparatorComponent={Divider}
                    renderItem={({ item, index }) => {
                        return <View style={{ backgroundColor: '#FAFAFA', alignSelf: 'center', width: 280, height: 60, borderRadius: 10, marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', marginLeft: '5%', justifyContent: 'center' }}>
                                <MaterialIcons name="trending-up" size={20} color={'#14A800'} style={{ alignSelf: 'center' }} />
                                <Text style={{ marginLeft: '10%', alignSelf: 'center' }}>{item.head}</Text>
                            </View>
                            <MaterialIcons name="trending-up" size={20} color={'#14A800'} style={{ alignSelf: 'center', marginRight: '5%' }} />
                        </View>

                    }}
                    numColumns={1}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView >
    )
}

export default App;


