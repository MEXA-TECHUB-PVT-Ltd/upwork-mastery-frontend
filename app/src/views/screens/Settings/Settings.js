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
            src: img1,
            head: 'Course Title',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        },
        {
            id: 2,
            src: img2,
            head: 'Course Title',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        },
        {
            id: 3,
            src: img3,
            head: 'Course Title',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        }])


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
            <View style={{ backgroundColor: '#FAFAFA', alignSelf: 'center', width: 280,height:130,borderRadius:10 }}>
                <Text>Johan Deo</Text>
                <Text>johndeo@gmail.com</Text>
                <Text>Washington,US</Text>
            </View>


            
            <View style={{ backgroundColor: '#FAFAFA', alignSelf: 'center', width: 280 ,borderRadius:10 }}>

            </View>

        </ScrollView >
    )
}

export default App;


