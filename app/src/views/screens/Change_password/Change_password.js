import React, { useState, useEffect } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground, Dimensions,
    TextInput,
    TouchableOpacity, Modal, Pressable, ActivityIndicator
} from 'react-native';
import { TouchableRipple, Checkbox, Appbar } from 'react-native-paper';
// import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { appImages } from '../../../assets/utilities'
import styles from './styles';

import Alertt from './../../../assets/images/alert.svg';

import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const Change_password = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [loading, setloading] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);

    const [checkk, setcheckk] = useState(false)
    const [neww, setnew] = useState('')
    const [old, setold] = useState('')
    const [conferm, setconferm] = useState('')
    const [email, setemail] = useState('')

    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [c, setc] = useState(false)

    const [txt, settxt] = useState('')




    const reset = async () => {

        if (conferm != '' && neww != '' && old != '') {
            if (await AsyncStorage.getItem('password') === old) {
                const regex = /^.{8,}$/;

                if (regex.test(neww) && regex.test(conferm)) {
                    if (conferm === neww) {
                        setloading(true)
                        try {
                            await fetch(global.url + "auth/ResetPassword.php", {
                                method: 'PUT',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email: await AsyncStorage.getItem('useremail'),
                                    password: conferm
                                })
                            }).then(response => response.json())
                                .then(async data => {
                                    if (data.status === true) {
                                        setloading(false)
                                        setModalVisible(true)
                                        settxt('')
                                        await AsyncStorage.setItem("password", conferm);
                                    }
                                    else {
                                        setloading(false)
                                        console.log("Plz Try Again!")
                                    }
                                });
                        }
                        catch (error) {
                            setloading(false)
                            console.log("Post submission failed");
                            console.log(error.message);
                        }
                    } else {
                        setc(true)
                        settxt('New and confirm password are not same')
                    }
                } else {
                    setc(true)
                    settxt('Enter at least 8 characters')
                }
            }

            else {
                setc(true)
                settxt('Wrong old password')
            }
        }
        else {
            setc(true)
            settxt('Fill all Requirments')
        }
    }
    useEffect(() => {
        gett()
    }, [isFocused]);

    const gett = async () => {
        setemail(await AsyncStorage.getItem('useremail'))
        console.log('useremail-->' + email)
    }


    return (
        <View style={styles.container}>

            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Change Password" />
                <Appbar.Action onPress={() => { }} />

            </Appbar.Header>

            <View style={styles.bigview}>

                <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            secureTextEntry={check === false ? true : false}
                            onChangeText={text => setold(text)}
                            placeholderTextColor={'#8F8F8F'}
                            placeholder='Old Password'
                            style={{
                                marginLeft: '5%',
                                color: '#969AA8',
                                height: 55,
                                width: '80%',
                            }}
                            onFocus={() => {
                                setcheckk(true)
                            }}
                            onSubmitEditing={() => {
                                setcheckk(false)
                            }}
                        />
                    </View>
                    {
                        check === true ?
                            <TouchableOpacity onPress={() => { setcheck(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>
                    }
                </View>

                <View style={[styles.inputstyle, { marginVertical: '4%' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            secureTextEntry={check1 === false ? true : false}
                            onChangeText={text => setnew(text)}
                            placeholderTextColor={'#8F8F8F'}
                            placeholder='New Password'
                            style={{
                                marginLeft: '5%',
                                color: '#969AA8',
                                height: 55,
                                width: '80%',
                            }}
                            onFocus={() => {
                                setcheckk(true)
                            }}
                            onSubmitEditing={() => {
                                setcheckk(false)
                            }}
                        // textColor='pink'
                        />
                    </View>
                    {
                        check1 === true ?
                            <TouchableOpacity onPress={() => { setcheck1(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck1(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>
                    }
                </View>

                <View style={[styles.inputstyle, { marginVertical: '4%' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            secureTextEntry={check2 === false ? true : false}
                            onChangeText={text => setconferm(text)}
                            placeholderTextColor={'#8F8F8F'}
                            placeholder='Confirm Password'
                            style={{
                                marginLeft: '5%',
                                color: '#969AA8',
                                height: 55,
                                width: '80%',
                            }}
                            onFocus={() => {
                                setcheckk(true)
                            }}
                            onSubmitEditing={() => {
                                setcheckk(false)
                            }}
                        // textColor='pink'
                        />
                    </View>
                    {
                        check2 === true ?
                            <TouchableOpacity onPress={() => { setcheck2(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck2(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#D1D1D1'} />
                            </TouchableOpacity>
                    }
                </View>

                {
                    c === false ?
                        null : <Text style={{ color: 'red' }}>{txt}</Text>
                }

            </View>

            {checkk == false ?
                <View style={{ position: 'absolute', bottom: '5%', marginHorizontal: '5%' }}>
                    <TouchableOpacity onPress={() => reset()} style={styles.button1}>
                        <Text style={{ fontSize: 18, color: '#fff', alignSelf: 'center' }}>
                            Change
                        </Text>
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
                            <Text style={styles.txt5}>Password changed successfully</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={[styles.button]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    navigation.goBack()
                                }}
                            >
                                <Text style={[styles.textStyle, { color: 'white' }]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Change_password  