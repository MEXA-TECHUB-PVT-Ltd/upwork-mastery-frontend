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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { appImages } from '../../../assets/utilities/index'
import styles from './styles';

const Profile = ({ navigation }) => {
    const [CountryPickerView, setCountryPickerView] = useState(false);
    const [countryCode, setCountryCode] = useState('Country');
    const [city, setcity] = useState('city');
    // -------------------category dropdown----------------------
    const [categoryModal, setcategoryModal] = useState(false);
    const [category, setcategory] = useState('City');


    const [modalVisible, setModalVisible] = useState(false);


    const onPressHandler1 = () => {

        setcategoryModal(true);
    };
    const onPressHandler2 = () => {
        setcategory('Rawalpindi')
        setcategoryModal(false);
    };
    const onPressHandler3 = () => {
        setcategory('Islamabad')
        setcategoryModal(false);
    };
    const onPressHandler4 = () => {
        setcategory('Karachi')
        setcategoryModal(false);
    };
    const onPressHandler5 = () => {
        setcategory('Lahore')
        setcategoryModal(false);
    };
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
                    placeholder='Username'
                    placeholderTextColor={'#969AA8'}
                    onChangeText={email => setemail(email)}
                    style={{
                        marginLeft: '5%',
                        color: '#969AA8'
                    }}
                />
            </View>


            <View style={{ marginTop: '2%' }}>

                <View style={[{ flexDirection: 'row' }]}>

                    <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={() => { setCountryPickerView(true) }}>
                        <Text style={styles.txt}>{countryCode}</Text>
                        <MaterialIcons name="expand-more" size={20} color={'black'} style={styles.arrowdown} />
                    </TouchableOpacity>

                </View>
                {
                    CountryPickerView == true ? <CountryPicker
                        withFilter={true}
                        withCallingCode={true}
                        withModal={true}
                        withFlag={true}
                        withFlagButton={true}
                        onSelect={(e) => {
                            setCountryPickerView(false)
                            console.log(e.name)
                            try {
                                setCountryCode(e.name)
                            } catch (err) {

                                console.log('no city name')

                            }
                        }}
                        onClose={(e) => {
                            setCountryPickerView(false)
                        }}
                        visible={CountryPickerView}
                        style={{ marginTop: '10%' }}
                    /> :
                        <Text></Text>
                }
            </View>


            <View style={[{ flexDirection: 'row' }]}>
                <TouchableOpacity onPress={onPressHandler1} style={styles.btn} >
                    {category != " " ?
                        <Text>  {category}</Text>
                        :
                        <Text>Select category</Text>
                    }
                    <MaterialIcons name="expand-more" size={24} color={'black'} style={styles.arrowdown} />
                </TouchableOpacity>

            </View>

            <View style={[styles.inputstyle, { marginVertical: '5%' }]}>
                <TextInput
                    placeholder='Referial code'
                    placeholderTextColor={'#969AA8'}
                    onChangeText={email => setemail(email)}
                    style={{
                        marginLeft: '5%',
                        color: '#969AA8'
                    }}
                />
            </View>

            <View style={{ marginTop: '80%', marginBottom: '5%', marginHorizontal: '5%' }}>
                <TouchableOpacity
                    onPress={() => { setModalVisible(true) }}
                    style={{ backgroundColor: '#14A800', borderRadius: 25, height: 55, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={categoryModal}
                transparent
                onRequestClose={() => setcategoryModal(false)}
                animationType="slide"
                hardwareAccelerated>
                <View style={styles.centeredView}>
                    <View style={styles.Success_Modal}>
                        <View style={styles.modalView}>
                            <View style={styles.selectpaymentView}>
                                <Text style={styles.selectpayment}>Select City</Text>
                            </View>
                            <TouchableOpacity onPress={onPressHandler2} style={styles.op}>
                                <Text style={styles.payment}>Rawalpindi</Text>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                            <TouchableOpacity onPress={onPressHandler3} style={styles.op}>
                                <Text style={styles.payment}>Islamabad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressHandler4} style={styles.op}>
                                <Text style={styles.payment}>Karachi</Text>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                            <TouchableOpacity onPress={onPressHandler5} style={styles.op}>
                                <Text style={styles.payment}>Lahore</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>Go to Home</Text>
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