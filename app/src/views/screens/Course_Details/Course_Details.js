import React, { useEffect, useState, useCallback, useRef } from 'react'
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
    Divider, ProgressBar, Checkbox
} from 'react-native-paper';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Thumnail from './../../../assets/images/thumnail.svg';
import Star from './../../../assets/images/img3.svg';

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
  
    useEffect(() => {

    }, [isFocused]);
    return (
        <ScrollView style={[styles.myBackground]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Course Details" />
                <Appbar.Action onPress={() => { }} />

            </Appbar.Header>
            <View style={{ justifyContent: 'center' }}>

                <Thumnail width={360} height={330} viewBox="20 0 380 390" />
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Course_video') }}
                    style={styles.play}>
                    <MaterialIcons name="play-arrow" size={35} color={'white'} style={{ alignSelf: 'center' }} />
                </TouchableOpacity>

            </View>

            <View style={styles.v1}>
                <View style={styles.v11}>
                    <Text style={styles.txt1}>Course Title</Text>
                    <TouchableOpacity
                        onPress={() => { }}>
                        <MaterialIcons name="bookmark-outline" size={25} color={'#9D9D9D'} />
                    </TouchableOpacity >
                </View>

                <View>
                    <Text style={styles.txt2}>Course Description:</Text>
                    <Text style={styles.txt3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</Text>
                </View>
            </View>


            <View style={styles.v2}>
                <TouchableOpacity style={styles.btnl}>
                    <Text style={styles.txtl}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnl}>
                    <Text style={styles.txtl}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default App;


