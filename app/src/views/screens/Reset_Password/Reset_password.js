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

import Alertt from './../../../assets/images/alert.svg';
const Reset_password = ({ route, navigation }) => {

    // const { email } = route.params;

    const [neww, setnew] = useState('')
    const [conferm, setconferm] = useState('')
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)

    const [c, setc] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);


    const reset = async () => {
        setModalVisible(true)
    }
    // const reset = async () => {
    //     if (conferm === neww && conferm != '' && neww != '') {
    //         try {
    //             await fetch(global.url + "user/updatePassword", {
    //                 method: 'PUT',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     email: email,
    //                     password: conferm
    //                 })
    //             }).then(response => response.json())
    //                 .then(data => {
    //                     if (data.message === 'Password has been updated') {
    //                         setModalVisible(true)

    //                     }
    //                     else console.log("Plz Try Again!")
    //                 });

    //         }
    //         catch (error) {
    //             console.log("Post submission failed");
    //             console.log(error.message);
    //         }
    //     }
    //     else {

    //         setc(true)
    //     }
    // }
    return (
        <ScrollView style={styles.myBackground} keyboardShouldPersistTaps={'always'}>
            <TouchableOpacity style={styles.navigate_next} onPress={() => navigation.goBack()}>
                <MaterialIcons name="navigate-before" size={30} color={'#14A800'} />
            </TouchableOpacity>
            <View style={styles.imageView}>
                <Image source={appImages.logo} style={styles.image} resizeMode={'contain'} />
            </View>
            <View style={styles.myBox}>
                <Text style={styles.txt}> Reset Password </Text>
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
                            style={styles.input}
                        />
                    </View>
                    {
                        check === true ?
                            <TouchableOpacity onPress={() => { setcheck(false) }} style={styles.btn1} >
                                <MaterialIcons1 name="eye" size={24} color={'#BFBFC1'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck(true) }} style={styles.btn1} >
                                <MaterialIcons1 name="eye-off" size={24} color={'#BFBFC1'} />
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
                            style={styles.input}
                        />
                    </View>
                    {
                        check1 === true ?
                            <TouchableOpacity onPress={() => { setcheck1(false) }} style={styles.btn1} >
                                <MaterialIcons1 name="eye" size={24} color={'#BFBFC1'} />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => { setcheck1(true) }} style={styles.btn1}>
                                <MaterialIcons1 name="eye-off" size={24} color={'#BFBFC1'} />
                            </TouchableOpacity>
                    }
                </View>
                {
                    c === false ?
                        null : <Text style={styles.txt4}>Incorrect password</Text>
                }
            </View>


            <View style={styles.btnview}>
                <TouchableOpacity onPress={() => {
                    reset()

                }} style={styles.btn}>
                    <Text style={styles.txtl}>
                        Reset
                    </Text>
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
                                <Text style={styles.txt5}>Password reset successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        navigation.navigate('SignIn')
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>Go to Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>




        </ScrollView>
    );
};

export default Reset_password  
