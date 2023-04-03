import React, { useState, useRef } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    LogBox,
    ImageBackground,
    Modal, Pressable, FlatList
} from 'react-native'

import {
    Button, TextInput, Appbar, Checkbox, Divider
} from 'react-native-paper';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appImages } from '../../../assets/utilities/index'

import { CardField, createToken } from '@stripe/stripe-react-native';
LogBox.ignoreAllLogs();
import { StripeProvider } from '@stripe/stripe-react-native';
import { SP_KEY } from '@env'
import ButtonComp from './ButtonComp';
const App = ({ navigation }) => {

    const [cardinfo, setcardinfo] = useState()
    const fetchCardDetail = (cardDetail) => {
        // console.log('my card detail', cardDetail)
        if (cardDetail.complete) {
            setcardinfo(cardDetail)
        }
        else {
            setcardinfo(null)
        }
    }



    const onDone = async() => {
        console.log("------>>>>", cardinfo)
        if (!!cardinfo)//info ha to yah block chalay ga 
        {
            try {
                const resToken = await createToken({ ...cardinfo, type: 'Card' })
                console.log('resToken', resToken)
            } catch (error) {
                alert('enter raised during create token')
            }
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 16 }}>
                <CardField
                    postalCodeEnabled={false}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => {
                        // console.log('cardDetails', cardDetails);
                        fetchCardDetail(cardDetails)
                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
                {/* cardinfo null ho ga to disable ho ga */}
                <ButtonComp onPress={onDone} disabled={!cardinfo} />
            </View>
        </SafeAreaView>
    )
}
export default App;