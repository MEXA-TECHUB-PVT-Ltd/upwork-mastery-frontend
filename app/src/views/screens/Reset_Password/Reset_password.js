import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground,
    TextInput,
    TouchableOpacity, Modal, Alert, Pressable, ScrollView,
} from 'react-native';
// import Lottie from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import MaterialIcons1 from 'react-native-vector-icons/MaterialCommunityIcons';

import { appImages } from '../../../assets/utilities'
import styles from './styles';

const Reset_password = ({ route, navigation }) => {

    // const { email } = route.params;

    const [neww, setnew] = useState('')
    const [conferm, setconferm] = useState('')
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)

    const [c, setc] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);


    // const reset = async () => {
    //     setModalVisible(true)
    // }
    const reset = async () => {
        if (conferm === neww && conferm != '' && neww != '') {
            try {
                await fetch(global.url + "user/updatePassword", {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: conferm
                    })
                }).then(response => response.json())
                    .then(data => {
                        if (data.message === 'Password has been updated') {
                            setModalVisible(true)

                        }
                        else console.log("Plz Try Again!")
                    });

            }
            catch (error) {
                console.log("Post submission failed");
                console.log(error.message);
            }
        }
        else {

            setc(true)
        }
    }
    return (
        <ScrollView style={styles.myBackground} keyboardShouldPersistTaps={'always'}>
            <TouchableOpacity style={styles.navigate_next} onPress={() => navigation.goBack()}>
                <MaterialIcons name="navigate-before" size={30} color={'#14A800'} />
            </TouchableOpacity>
            <View style={styles.imageView}>
                <Image source={appImages.logo} style={styles.image} resizeMode={'contain'} />
            </View>
            <View style={styles.myBox}>
                <Text style={{ fontSize: 25, color: '#001E00', marginBottom: '5%' }}> Reset Password </Text>
                <Text style={styles.textStyle}> Create a strong password </Text>
            </View>

            <View style={styles.bigview}>
                <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            secureTextEntry={check === false ? true : false}
                            onChangeText={text => setnew(text)}
                            placeholderTextColor={'#969AA8'}
                            placeholder='New Password'
                            style={{
                                marginLeft: '10%',
                                color: '#969AA8',
                            }}
                        />
                    </View>
                    {
                        check === true ?
                            <TouchableOpacity onPress={() => { setcheck(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye" size={24} color={'#969AA8'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#969AA8'} />
                            </TouchableOpacity>
                    }
                </View>

                <View style={[styles.inputstyle, { marginVertical: '4%' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            secureTextEntry={check1 === false ? true : false}

                            onChangeText={text => setconferm(text)}
                            placeholderTextColor={'#969AA8'}
                            placeholder='Confirm Password'
                            style={{
                                marginLeft: '10%',
                                color: '#969AA8'
                            }}

                        />
                    </View>
                    {
                        check1 === true ?
                            <TouchableOpacity onPress={() => { setcheck1(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye" size={24} color={'#969AA8'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck1(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#969AA8'} />
                            </TouchableOpacity>
                    }
                </View>
                {
                    c === false ?
                        null : <Text style={{ color: 'red', alignSelf: 'flex-end' }}>Incorrect password</Text>
                }
            </View>


            <View style={styles.btnview}>
                <TouchableOpacity onPress={() => {
                    // reset()
                    navigation.navigate('Complete_Profile')
                }} style={styles.btn}>
                    <Text style={{ color: '#fff' }}>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    ba
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            {/* <Lottie source={require('../../../assets/JsonImages/fictorial.json')} style={styles.modelimg} resizeMode={'cover'} autoPlay loop /> */}
                            <Text style={[{ fontSize: 21, marginVertical: 4, color: '#FFAA1D' }]}>Sucess</Text>
                            <Text style={{ fontSize: 15, color: 'black' }}>Password Reset sucessfully</Text>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    navigation.navigate('SignIn')
                                    // navigation.navigate('Complete_Profile')
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 15 }}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>



        </ScrollView>
    );
};

export default Reset_password  