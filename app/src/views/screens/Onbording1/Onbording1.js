import React, { useState, useRef, useEffect, useCallback } from 'react'
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
import YoutubePlayer from 'react-native-youtube-iframe';
import {
    Button, TextInput, Appbar, Checkbox, Divider
} from 'react-native-paper';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appImages } from '../../../assets/utilities/index'
import SVGImg from './../../../assets/images/home1.svg';
import Star from './../../../assets/images/star.svg';
import Alertt from './../../../assets/images/alert.svg';
import { collectBankAccountForPayment } from '@stripe/stripe-react-native';

import PaymentScreen from './../Payment_Screen/Payment_Screen'
LogBox.ignoreAllLogs();
import { StripeProvider } from '@stripe/stripe-react-native';
import { SP_KEY } from '@env'
import WebView from 'react-native-webview'
import paypalApi from './../apis/paypalApi'
import { ActivityIndicator } from 'react-native-paper'
import queryString from 'query-string';
const App = ({ navigation }) => {

    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    const alll = async () => {

    }
    useEffect(() => {
        alll()
    }, []);
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <View>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: '5%' }}>
                        The Secret Method To Get As Many Clients As You Can Possibly Handle Without Facing Instability Ever Again
                    </Text>
                    <View style={{ marginHorizontal: '5%' }}>
                        <YoutubePlayer
                            height={200}
                            // width={360}
                            play={playing}
                            // mute={isMute}
                            videoId={'IpoPqNfy7JU'}
                            onChangeState={onStateChange}
                        />
                    </View>
                </View>
                <View style={{ marginHorizontal: '5%' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: '5%' }}>
                        Ever wondered how so many people are killing it on Upwork and Fiverr?
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={appImages.a2} style={{ width: 150, height: 170 }} />
                        <Image source={appImages.a1} style={{ width: 150, height: 170 }} />
                    </View>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: 'black', marginVertical: '5%' }}>
                        Designers, copywriters, social media managers, web developers, between many others!
                    </Text>
                </View>

                <View style={{ marginHorizontal: '5%', backgroundColor: 'lightgray' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 15, color: 'black', marginVertical: '2%' }}>
                        Only profile with all the right elements to climb the Upwork and Fiverr rankings will appear in front of Clients eyes.
                    </Text>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: 'black', marginVertical: '2%' }}>
                        This means that over time, you will find it harder and harder to get new clients...
                    </Text>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 15, color: 'black', marginVertical: '2%' }}>
                        If you don't take action, the day will come when you will never close a new client again.
                    </Text>
                </View>


                <View style={{ marginHorizontal: '5%', marginVertical: '2%', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: 'black' }}>
                        Luckily for you, there’s now a solution:
                    </Text>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                        FREELANCE MASTERY</Text>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20, color: 'black' }}>
                        COURSE</Text>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 17, color: '#14A800' }}>
                        The Bulletproof Roadmap for Client Acquisition and Economical Stability
                    </Text>
                    <Image source={appImages.a3} style={{ width: 300, height: 220 }} resizeMode='stretch' />

                </View>

                <View style={{ marginHorizontal: '5%', marginVertical: '2%', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                    Some Of The Counter-intuitive Secrets, Tips & Techniques This Course Will Teach You To Get As Many Clients As You Want (Regardless Of Hourly Rate)
                    </Text>
                    <Text>
                   
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default App;