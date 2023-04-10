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
    Divider
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from "react-native-country-picker-modal"

import Alertt from './../../../assets/images/alert.svg';
import styles from './styles';

const Profile = ({ navigation }) => {


    const [modalVisible, setModalVisible] = useState(false);




    return (
        <ScrollView style={styles.myBackground}>
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
                        onChangeText={email => setemail(email)}
                        style={{
                            marginLeft: '5%',
                            color: '#969AA8'
                        }}
                    />
                </View>
                <View style={{ marginTop: '3%' }}>
                    <Text style={styles.txt1}>Email Address</Text>
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
                </View>





                <View style={{ marginTop: '95%', marginBottom: '5%' }}>
                    <TouchableOpacity
                        onPress={() => { setModalVisible(true) }}
                        style={{ backgroundColor: '#14A800', borderRadius: 25, height: 55, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Update</Text>
                    </TouchableOpacity>
                </View>
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
                                <Text style={styles.txt5}>Profile updated successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>OK</Text>
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