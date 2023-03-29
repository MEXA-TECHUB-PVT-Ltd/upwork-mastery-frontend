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
                <Appbar.Content color={'white'} title="My Course" />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Action icon="magnify" color={'white'} onPress={() => { navigation.goBack() }} />

            </Appbar.Header>

            <View style={{}}>
                <FlatList
                    data={TEMP_DATA}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity

                            style={{ marginHorizontal: '5%', backgroundColor: 'white' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#DBDBDB',
                                    width: '100%',
                                    height: 132,
                                    borderRadius: 10,
                                    marginVertical: '3%',
                                    justifyContent: 'space-between'
                                }}>
                                <View>
                                    <item.src width={100} height={290} viewBox="0 0 100 290" />
                                </View>

                                <View style={{ marginTop: 25, width: '60%', marginRight: '10%', marginLeft: '3%' }}>
                                    <Text style={[styles.txt14, { color: '#14A800' }]}>{item.head}</Text>
                                    <Text style={[styles.txt12, { marginVertical: '2%' }]}>{item.down}</Text>

                                </View>

                                <TouchableOpacity
                                    style={{ position: 'absolute', marginLeft: '90%', marginTop: '5%' }}
                                    onPress={() => {


                                    }}>
                                    <MaterialIcons name="bookmark-outline" size={25} color={'#9D9D9D'} />
                                </TouchableOpacity >
                            </View>


                        </TouchableOpacity>
                    )}

                />
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Image source={appImages.model} style={styles.modelimg} />
                            <Text style={[styles.textStyle, { fontSize: 15 }]}>Book Removed from Whislist</Text>
                            <Button
                                style={styles.buttonmodal}
                                onPress={() => ok()}
                            >
                                <Text style={[styles.textStyle, { color: 'white' }]}>Go to Back</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

            </View>
        </ScrollView >
    )
}

export default App;


