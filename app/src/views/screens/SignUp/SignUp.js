import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput, ScrollView
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
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [check, setcheck] = useState(false)
    const [checked, setChecked] = React.useState(false);
    const [fil, setfil] = useState()


    const Login = async () => {
        if (email != '' && pass != '') {
            var InsertAPIURL = global.url + "Login.php";
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
                    console.log(response)
                    if (response.status === true) {

                        await AsyncStorage.setItem("userid", response.data.id);
                        await AsyncStorage.setItem("username", response.data.username);
                        await AsyncStorage.setItem("useremail", response.data.email);

                        // console.log(response.data.id,response.data.username,response.data.email)

                        navigation.replace("drawer_Home")
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
                        }}
                    >
                        Sign Up
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
                        Sign Up to get started
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
                            height: 55,
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




                <Text style={{ color: 'red' }}>{fil}</Text>

            </View>


            <View style={{ marginTop: '15%' }}>
                <View style={styles.buttonview}>
                <TouchableOpacity onPress={() => {
                        // reset()
                        navigation.navigate('Complete_Profile')
                    }} style={styles.btn}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Divider style={styles.divider} />
                    <Text style={{ color: '#242424', fontSize: 12 }}>Or Sign Up with</Text>
                    <Divider style={styles.divider} />
                </View>

                <View style={styles.imgview}>
                    <TouchableOpacity style={styles.search} onPress={() => {
                        // googlelogin()
                        // signOut()
                    }}>
                        <Image source={appImages.g} style={styles.googleimg} />
                        <Text style={{ fontSize: 14, color: 'black' }}>
                            Connect with Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.search} onPress={() => {
                        // googlelogin()
                        // signOut()
                    }}>
                        <Image source={appImages.f} style={styles.googleimg} />
                        <Text style={{ fontSize: 14, color: 'black' }}>
                            Connect with Facebook
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.lastview} >
                    <Text style={{
                        color: 'black',
                        fontSize: 14,
                    }}>
                        Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ marginLeft: '2%' }} >
                        <Text
                            style={{
                                color: '#14A800',
                                fontSize: 14,
                            }}
                        >Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>



    );
};

export default SignIn  
