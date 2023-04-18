import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity, Linking
} from 'react-native'
import { appImages } from '../../../assets/utilities/index'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Alertt from './../../../assets/images/alert.svg';
import { useIsFocused } from '@react-navigation/native';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar
} from 'react-native-paper';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [modalVisible, setModalVisible] = useState(false);
    const [str, setStr] = useState('');
    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            src: 'person',
            head: 'Update Profile',
        },
        {
            id: 2,
            src: 'mode-edit',
            head: 'Change password',
        },
        // {
        //     id: 3,
        //     src: 'bookmark',
        //     head: 'Saved Videos',
        // },
        {
            id: 3,
            src: 'lock',
            head: 'Privacy Policy',
        },
        {
            id: 4,
            src: 'note',
            head: 'Terms & Conditions',
        },
        // {
        //     id: 6,
        //     src: 'info',
        //     head: 'About Us',
        // }
    ])

    const call = (id) => {
        if (id == 1) {
            navigation.navigate('Update_Profile')
        }
        if (id == 2) {
            navigation.navigate('Change_password')
        }
        // if (id == 3) {
        //     navigation.navigate('Saved_Videos')
        // }
        if (id == 3) {
            navigation.navigate('Privacy_Policy')
        }
        if (id == 4) {
            navigation.navigate('Term_condition')
        }
        // if (id == 6) {
        //     navigation.navigate('AboutUs')
        // }
    }


    const openmodel = async () => {
        setModalVisible(true)

    }
    const logout = async () => {
        await AsyncStorage.setItem("userid", "");
        await AsyncStorage.setItem("username", "");
        await AsyncStorage.setItem("useremail", "");
        await AsyncStorage.setItem("password", "");
        navigation?.popToTop();
        navigation.replace("SignIn")
    }



    const [all, setall] = useState([]);

    const alllist = async () => {
        try {
            const response = await fetch(global.url + "auth/GetUserById.php?id=" + await AsyncStorage.getItem('userid'))
            const json = await response.json();
            setall(json.user);            //json.id to sub ides ayan ge

            console.log(json.user)
            const a = json.user.username
            setStr(a[0])
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    useEffect(() => {
        alllist()
    }, [isFocused]);
    return (
        <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Content color={'white'} title="Settings" />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Action icon="logout" color={'white'} onPress={() => { openmodel() }} />
            </Appbar.Header>

            <View>
                <View style={styles.v1}>
                    <View style={styles.v2}>
                        <Text style={styles.txt1}>{all.email}</Text>
                        <Text style={styles.txt2}>{all.username}</Text>
                    </View>
                </View>
                <View style={styles.v3}>
                    <Text style={styles.txt3}>{str[0]}</Text>
                </View>
            </View>
            <View style={styles.v4}>
                <FlatList
                    data={TEMP_DATA}
                    // ItemSeparatorComponent={Divider}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity onPress={() => { call(item.id) }} style={styles.v5}>
                            <View style={styles.v6}>
                                <MaterialIcons name={item.src} size={20} color={'#14A800'} style={styles.m1} />
                                <Text style={styles.txt4}>{item.head}</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color={'#14A800'} style={styles.m2} />
                        </TouchableOpacity>

                    }}
                    numColumns={1}
                    keyExtractor={item => item.id}
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
                            <View style={styles.main}>

                                <Alertt width={600} height={75} style={{ marginTop: '10%' }} />
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <Text style={{ fontSize: 22, color: '#14A800', alignSelf: 'center' }}>Confirmation</Text>
                                <Text style={styles.textStyle}>Do you want to logout?</Text>
                                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: '5%' }}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={[styles.textStyle1, { color: '#14A800' }]}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={[styles.button1, styles.buttonClose1]}
                                        onPress={() => {
                                            logout()
                                        }}
                                    >
                                        <Text style={[styles.textStyle1, { color: 'white' }]}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </Modal>

            </View>

        </ScrollView >
    )
}

export default App;


