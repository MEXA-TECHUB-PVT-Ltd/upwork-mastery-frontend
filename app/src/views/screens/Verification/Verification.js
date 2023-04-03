import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground,
    // TextInput,
    TouchableOpacity, Modal
} from 'react-native';

// import { TouchableRipple, Checkbox, TextInput, TextInput as MaterialTextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


import Alertt from './../../../assets/images/alert.svg';
import { getActionFromState, useNavigation } from '@react-navigation/native'

import { appImages } from '../../../assets/utilities'
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const CELL_COUNT = 4;
const Verification = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);


    const v = async () => {
        setModalVisible(true)
    }
    // const { email, otp } = route.params;


    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const verify = async () => {
        try {

            await fetch(global.url + "forgetPassword/verifyOTP", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    // userEnteredOtp: otp
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data.status)
                    if (data.status == true) {
                        // console.log(otp)
                        navigation.navigate("Reset_Password", { email: email })
                    }
                    else console.log("Plz Try Again!")
                });

        }
        catch (error) {
            console.log("Post submission failed");
            console.log(error.message);
        }

    }

    return (
        <ScrollView style={styles.myBackground}>
            <TouchableOpacity style={styles.navigate_next} onPress={() => navigation.goBack()}>
                <MaterialIcons name="navigate-before" size={26} color={'#14A800'} />
            </TouchableOpacity>
            <View style={styles.imageView}>
                <Image source={appImages.logo} style={styles.image} resizeMode={'contain'} />
            </View>
            <View style={styles.myBox}>
                <Text style={{ fontSize: 24, color: '#001E00', marginBottom: '5%', fontWeight: 'bold' }}> Verification </Text>
                <Text style={{ fontSize: 14, color: '#242424', marginBottom: '5%' }}> Enter code that you received on your email </Text>
            </View>

            <View style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
            </View>
            {/* <View style={{ alignSelf: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgray', height: 80, width: '90%' }}>
                <Text>Use the following OTP to complete your procedures</Text>

                <View style={{ backgroundColor: 'orange', width: 60, height: 30, alignItems: 'center', marginTop: '5%' }}>
                    <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
                        {otp}
                    </Text>
                </View>
            </View> */}
            <View style={styles.btnview}>
                <TouchableOpacity onPress={() => {
                    // verify()
                    console.log('dnj')
                    // navigation.navigate("Reset_Password")
                    v()
                }} style={styles.btn}
                // disabled={otp != value ? true : false}
                >
                    <Text style={{ color: '#fff', fontSize: 17 }}>
                        verify
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
                                <Text style={styles.txt5}>Code Verified Successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        navigation.navigate("Reset_Password")
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        </ScrollView>

    );
};

export default Verification  
