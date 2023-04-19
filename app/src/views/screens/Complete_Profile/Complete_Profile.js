import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput, ScrollView, Modal, ActivityIndicator
} from 'react-native';
import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, Checkbox
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from "react-native-country-picker-modal"

import Alertt from './../../../assets/images/alert.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { appImages } from '../../../assets/utilities/index'
import styles from './styles';

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ route, navigation }) => {
    const { e } = route.params;
    const [loading, setloading] = useState(false)

    const [email, setemail] = useState(e)
    const [pass, setpass] = useState("")
    const [username, setusername] = useState("")

    const [check1, setcheck1] = useState(false)

    const [check, setcheck] = useState(false)
    const [fil, setfil] = useState()
    const [modalVisible, setModalVisible] = useState(false);

    const openmodel1 = async () => {
        setModalVisible(true)
    }

    const Login = async () => {
        if (email != '' && pass != '' && username != '') {
            const regex = /^.{8,}$/;

            if (regex.test(pass)) {
                setloading(true)
                var InsertAPIURL = global.url + "auth/Signup.php";
                var headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                };
                await fetch(InsertAPIURL, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: pass
                    }),
                })
                    .then(response => response.json())
                    .then(async response => {
                        console.log(response)
                        if (response.status === true) {
                            setloading(false)
                            await AsyncStorage.setItem("userid", response.user.id);
                            // await AsyncStorage.setItem("username", response.user.username);
                            await AsyncStorage.setItem("useremail", response.user.email);
                            await AsyncStorage.setItem("password", pass);
                            // console.log(response.data.id,response.data.username,response.data.email)
                            openmodel1()

                        } else {
                            setloading(false)
                            setfil(response.message)
                        }
                        setloading(false)
                        console.log(response.message)
                    })
                    .catch(error => {
                        setloading(false)
                        console.log('this is error' + error);
                        setfil('Email or Password is incorrect')
                    });
            }
            else {
                setfil("Enter Password at least 8 characters")
            }
        }
        else {
            setfil('Fill all requirments')
        }
    }

    return (
        <View style={styles.myBackground} keyboardShouldPersistTaps={true}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800', }}>
                <Appbar.Action icon="chevron-left" onPress={() => { navigation.goBack() }} iconColor='white' />
                <Appbar.Content title="Complete Profile" color='white' />
                <Appbar.Action />
            </Appbar.Header>


            <View style={[styles.inputstyle, { marginVertical: '2%' }]}>

                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#969AA8'}
                    // onChangeText={email => setemail(email)}
                    editable={false}
                    value={email}
                    style={{
                        marginLeft: '5%',
                        height: 55,
                        color: '#969AA8',
                        width: '90%'
                    }}
                    onFocus={() => {
                        setcheck1(true)
                    }}
                    onSubmitEditing={() => {
                        setcheck1(false)
                    }}
                />

            </View>
            <View style={[styles.inputstyle, { marginVertical: '2%' }]}>

                <TextInput
                    placeholder='Username'
                    placeholderTextColor={'#969AA8'}
                    onChangeText={username => setusername(username)}
                    style={{
                        marginLeft: '5%',
                        height: 55,
                        color: '#969AA8',
                        width: '90%'
                    }}
                    onFocus={() => {
                        setcheck1(true)
                    }}
                    onSubmitEditing={() => {
                        setcheck1(false)
                    }}
                />

            </View>
            <View style={[styles.inputstyle, { marginVertical: '4%', justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <MaterialIcons name="lock" size={24} color={'#8F8F8F'} style={styles.icon} /> */}
                    <TextInput
                        secureTextEntry={check === false ? true : false}
                        placeholderTextColor={'#8F8F8F'}
                        placeholder='Password'
                        onChangeText={pass => setpass(pass)}
                        style={{
                            marginLeft: '5%',
                            height: 55,
                            color: '#969AA8',
                            width: '80%'
                        }}
                        onFocus={() => {
                            setcheck1(true)
                        }}
                        onSubmitEditing={() => {
                            setcheck1(false)
                        }}
                    />
                </View>
                {
                    check === true ?
                        <TouchableOpacity onPress={() => { setcheck(false) }} style={styles.icon}>
                            <MaterialCommunityIcons name="eye" size={24} color={'#BFBFC1'} />
                        </TouchableOpacity>

                        :
                        <TouchableOpacity onPress={() => { setcheck(true) }} style={styles.icon} >
                            <MaterialCommunityIcons name="eye-off" size={24} color={'#BFBFC1'} />
                        </TouchableOpacity>
                }
            </View>
            <Text style={{ color: 'red', marginLeft: '5%', marginBottom: '1%' }}>{fil}</Text>


            <View style={{ flexDirection: 'row', marginHorizontal: '5%' }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Term_condition')
                    }}
                    style={{ alignSelf: 'center', borderBottomColor: '#14A800', borderBottomWidth: 1 }}>
                    <Text style={{ alignSelf: 'center', color: '#14A800', fontSize: 13 }}>Term & Conditions </Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 13, color: '#969AA8' }}>and </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Privacy_Policy') }}
                    style={{ alignSelf: 'center', borderBottomColor: '#14A800', borderBottomWidth: 1 }}>
                    <Text style={{ alignSelf: 'center', color: '#14A800', fontSize: 13 }}>Privacy & Policy </Text>
                </TouchableOpacity>
            </View>
            {check1 == false ?
                <View style={styles.btnv}>
                    <TouchableOpacity
                        onPress={() => {
                            Login()

                        }}
                        style={styles.btn1}>
                        <Text style={styles.txt1}>Create Account</Text>
                        {
                            loading == true ?
                                <ActivityIndicator
                                    size={20}
                                    color='white'
                                    animating={loading}
                                    style={{ marginLeft: 10 }}
                                /> : null
                        }
                    </TouchableOpacity>
                </View>
                : null}


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
                            <View style={styles.model}>
                                <Alertt width={600} height={75} style={{ marginTop: '10%' }} />
                            </View>
                            <View style={styles.v3}>
                                <Text style={styles.textStyle}>Success</Text>
                                <Text style={styles.txt5}>Profile created successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        navigation.replace('Home')
                                        // openmodel1()
                                    }}
                                >
                                    <Text style={[styles.textStyle1, { color: 'white' }]}>Go to Home</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            
        </View>
    );
};

export default Profile  