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
    Divider, ProgressBar, Checkbox
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
    
    const [book, setbook] = useState(false);
    const [clickedId, setclickedId] = useState(100)
    const [modalVisible1, setModalVisible1] = useState(false);

    const openmodel1 = async () => {
        setModalVisible1(true)
    }
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
                <Appbar.Action icon={'eye'} color={'white'} onPress={() => { openmodel1() }} />

                <Appbar.Action icon={book == true ? 'bookmark' : 'bookmark-outline'} color={'white'} onPress={() => { setbook(!book) }} />

            </Appbar.Header>

            <View style={{}}>
                <FlatList
                    data={TEMP_DATA}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Course_Details') }}
                            style={{ marginHorizontal: '5%', backgroundColor: 'white' }}>
                            <View
                                style={styles.v2}>
                                <View>
                                    <item.src width={100} height={290} viewBox="0 0 100 290" />
                                    
                                </View>

                                <View style={styles.v1}>
                                    <Text style={[styles.txt14]}>{item.head}</Text>
                                    <Text style={[styles.txt12]}>{item.down}</Text>

                                </View>

                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => {
                                        setclickedId(index)
                                    }}>
                                    <MaterialIcons name={clickedId == index || book == true ? "bookmark" : "bookmark-outline"} size={25} color={clickedId == index || book == true ? '#14A800' : '#9D9D9D'} />
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
            {/* ----------------recomendation model------------------------------- */}
            <View style={styles.centeredView1}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible1(!modalVisible1);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView1}>
                            <View style={{ justifyContent: 'center', marginHorizontal: '5%', marginVertical: '5%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#242424', fontSize: 19 }}>
                                        Recommendations
                                    </Text>
                                    <TouchableOpacity onPress={() => {
                                        setModalVisible1(!modalVisible1)

                                    }}>
                                        <MaterialIcons name="close" size={24} color={'#000000'} style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ color: '#242424', fontSize: 12, marginTop: '3%' }}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsu
                                </Text>
                            </View>





                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView >
    )
}

export default App;


