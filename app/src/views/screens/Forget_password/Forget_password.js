import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native'
import { appImages } from '../../../assets/utilities'


import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
const Forget_password = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [fil, setfil] = useState()
    const forgetpass = async () => {
        try {
            if (email != '') {
                await fetch(global.url + "auth/OtpSend.php", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,

                    })
                }).then(response => response.json())
                    .then(data => {
                        if (data.status === true) {
                            navigation.navigate("Verification", { email: email })
                        }
                        else {
                            console.log(data.message)
                            setfil(data.message)
                        }
                    });
            }
            else {
                setfil('Please Enter Email')
            }
        }
        catch (error) {
            console.log("Post submission failed");
            console.log(error.message);
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
                <Text style={styles.txt}> Forget Password </Text>
                <Text style={styles.text}> Enter a email for a verification code </Text>
            </View>
            <View style={styles.myBox}>
                <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor={'#969AA8'}
                        onChangeText={email => setemail(email)}
                        style={styles.inputstyle1}
                    />
                </View>
                <Text style={{ color: 'red' }}>{fil}</Text>
            </View>


            <View style={styles.btnview}>
                <TouchableOpacity onPress={() => {
                    forgetpass()

                }} style={styles.btn}>
                    <Text style={styles.txtl}>
                        Send Code
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    );
};

export default Forget_password  
