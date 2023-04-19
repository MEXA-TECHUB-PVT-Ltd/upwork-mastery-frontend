import React, { useState, useEffect } from 'react';
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
    Divider,
    ActivityIndicator
} from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Alertt from './../../../assets/images/alert.svg';
import styles from './styles';

const Profile = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [loading, setloading] = useState(false)
    const [check, setcheck] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);
    const [username, setusername] = useState("")
    const [email, setemail] = useState()

    const gett = async () => {
        setemail(await AsyncStorage.getItem('useremail'))
        console.log(email)
    }
    useEffect(() => {
        gett()
    }, [isFocused]);

    // ------------------------------update profile-------------------------------

    const update = async () => {
        try {
            setloading(true)
            console.log(await AsyncStorage.getItem('userid'))
            await fetch(global.url + "auth/UpdateProfile.php", {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: await AsyncStorage.getItem('userid'),
                    username: username,
                })
            }).then(response => response.json())
                .then(data => {
                    if (data.status === true) {
                        setModalVisible(true)
                        setloading(false)
                    }
                    else {
                        console.log("Plz Try Again!")
                        setloading(false)
                    }

                });
        }
        catch (error) {
            console.log("Post submission failed");
            console.log(error.message);
            setloading(false)
        }



    }


    return (
        <View style={styles.myBackground} >
            <Appbar.Header
                style={{ backgroundColor: '#14A800', }}>
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Update Profile" />
                <Appbar.Action onPress={() => { }} />
            </Appbar.Header>

            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                <Text style={styles.txt1}>Username</Text>
                <View style={[styles.inputstyle, { marginVertical: '2%' }]}>

                    <TextInput
                        placeholder='Username'
                        placeholderTextColor={'#969AA8'}
                        onChangeText={username => setusername(username)}
                        style={{
                            marginLeft: '5%',
                            color: '#969AA8',
                            height: 55,
                            width: '80%',
                        }}

                        onFocus={() => {
                            setcheck(true)
                        }}
                        onSubmitEditing={() => {
                            setcheck(false)
                        }}
                
                    />
                </View>
                <View style={{ marginTop: '3%' }}>
                    <Text style={styles.txt1}>Email Address</Text>
                    <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                        <TextInput
                            // placeholder='Email'
                            value={email}
                            placeholderTextColor={'#969AA8'}
                            // onChangeText={email => setemail(email)}
                            editable={false}
                            style={{
                                marginLeft: '5%',
                                color: '#969AA8',
                                height: 55,
                                width: '80%',
                            }}

                        />
                    </View>
                </View>
            </View>

            {check == false ?
                < View style={{ position: 'absolute', bottom: '5%', marginHorizontal: '5%' }}>
                    <TouchableOpacity
                        onPress={() => { update() }}
                        style={{ flexDirection: 'row', backgroundColor: '#14A800', borderRadius: 25, padding: '4.5%', justifyContent: 'center', width: 320 }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Update</Text>
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
                            <Text style={[styles.textStyle, { fontSize: 23 }]}>Success</Text>
                            <Text style={styles.txt5}>Profile updated successfully</Text>
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

        </View >
    );
};

export default Profile  