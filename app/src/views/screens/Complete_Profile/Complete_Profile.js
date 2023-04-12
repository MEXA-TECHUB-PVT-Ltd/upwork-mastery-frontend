import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput, ScrollView, Modal
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

const Profile = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [username, setusername] = useState("")

    const [check, setcheck] = useState(false)
    const [fil, setfil] = useState()
    const [modalVisible, setModalVisible] = useState(false);

    const openmodel1 = async () => {
        setModalVisible(true)
    }

    const Login = async () => {
        if (email != '' && pass != '' && username != '') {
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

                        await AsyncStorage.setItem("userid", response.user.id);
                        // await AsyncStorage.setItem("username", response.user.username);
                        await AsyncStorage.setItem("useremail", response.user.email);

                        // console.log(response.data.id,response.data.username,response.data.email)
                        openmodel1()

                    } else {
                        setfil(response.message)
                    }
                    console.log(response.message)
                })
                .catch(error => {
                    console.log('this is error' + error);
                    setfil('Email or Password is incorrect')
                });
        }
        else {
            setfil('Fill all requirments')
        }
    }

    return (
        <ScrollView style={styles.myBackground}>
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
                    onChangeText={email => setemail(email)}
                    style={{
                        marginLeft: '5%',
                        color: '#969AA8'
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
                        color: '#969AA8'
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
                            marginLeft: '15%',
                            height: 55,
                            color: '#969AA8'
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

                <TouchableOpacity style={{ alignSelf: 'center', borderBottomColor: '#14A800', borderBottomWidth: 1 }}>
                    <Text style={{ alignSelf: 'center', color: '#14A800', fontSize: 13 }}>term & Conditions </Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 13, color: '#969AA8' }}>and </Text>
                <TouchableOpacity style={{ alignSelf: 'center', borderBottomColor: '#14A800', borderBottomWidth: 1 }}>
                    <Text style={{ alignSelf: 'center', color: '#14A800', fontSize: 13 }}>Privacy & Policy </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnv}>
                <TouchableOpacity
                    onPress={() => {
                        Login()

                    }}
                    style={styles.btn1}>
                    <Text style={styles.txt1}>Create Account</Text>
                </TouchableOpacity>
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
                                        navigation.navigate('Home')
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

        </ScrollView>
    );
};

export default Profile  