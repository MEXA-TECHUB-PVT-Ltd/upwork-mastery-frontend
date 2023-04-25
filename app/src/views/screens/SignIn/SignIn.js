import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput, ScrollView, ActivityIndicator, Keyboard, BackHandler
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Button,
    Divider
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


import AsyncStorage from "@react-native-async-storage/async-storage";
import { appImages } from '../../../assets/utilities/index'
import styles from './styles';
// import { ScrollView } from 'react-native-gesture-handler';


const SignIn = () => {
    const navigation = useNavigation()
    const [loading, setloading] = useState(false)

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)
    const next = useRef()
    const [checked, setChecked] = React.useState(false);
    const [fil, setfil] = useState()


    const Login = async () => {
        if (email != '' && pass != '') {
            setloading(true)
            var InsertAPIURL = global.url + "auth/Login.php";
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };

            await fetch(InsertAPIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    email: email,
                    password: pass
                }),
            })
                .then(response => response.json())
                .then(async response => {
                    if (response.status == true) {
                        setloading(false)
                        await AsyncStorage.setItem("userid", response.data.id);
                        await AsyncStorage.setItem("username", response.data.username);
                        await AsyncStorage.setItem("useremail", response.data.email);
                        await AsyncStorage.setItem("password", pass);
                        console.log(response.data._id)
                        navigation.replace('Home')

                    } else {
                        setloading(false)
                        setfil(response.message)
                    }
                    // console.log(response.message)
                })
                .catch(error => {
                    setloading(false)
                    console.log('this is error' + error);
                    setfil('Email or Password is incorrect')
                });
        }
        else {
            setfil('Fill all requirments')
        }
    }
    return (

        <ScrollView style={styles.myBackground}
            keyboardShouldPersistTaps='handled'
        >

            <View style={{ alignSelf: 'center', marginVertical: '10%' }}>
                <Image source={appImages.logo} style={styles.logo} resizeMode={'contain'} />
            </View>


            <View style={styles.view1}>
                <View style={styles.view11}>
                    <Text
                        style={{
                            color: '#001E00',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}
                    >
                        Login Account
                    </Text>
                </View>
                <View style={styles.view12}>
                    <Text
                        style={{
                            color: '#242424',
                            fontSize: 14,
                            textAlign: 'center',
                        }}
                    >
                        Login to get started
                    </Text>
                </View>
            </View>


            <View style={styles.bigview}>

                <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                    {/* <MaterialIcons name="email" size={24} color={'#8F8F8F'} style={styles.icon} /> */}
                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor={'#969AA8'}
                        onChangeText={email => setemail(email)}
                        style={{
                            marginLeft: '5%',
                            color: '#969AA8',
                            height: 55,
                            width: '100%',
                            // backgroundColor: 'pink'
                        }}

                        onSubmitEditing={() => {
                            next.current.focus()

                        }}

                        blurOnSubmit={false}
                        returnKeyType='next'
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
                                color: '#969AA8',
                                height: 55,
                                width: '80%',
                            }}

                            ref={next}
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




                <Text style={{ color: 'red' }}>{fil}</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Forget_password')} style={{
                    marginVertical: '1%',
                    alignSelf: 'flex-end',
                }} >
                    <Text style={{
                        color: '#14A800',
                        fontSize: 14,
                    }}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>











                <View style={styles.buttonview}>
                    <TouchableOpacity onPress={() => {
                        Login()

                    }} style={styles.btn}>
                        <Text style={{ color: '#fff', fontSize: 17, alignSelf: 'center' }}>
                            Sign In
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

            </View>





        </ScrollView>



    );
};

export default SignIn  
