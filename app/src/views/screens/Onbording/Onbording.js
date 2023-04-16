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
    // alert(SP_KEY)
    const [checked, setChecked] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const openmodel = async () => {
        setModalVisible(true)
    }
    const openmodel1 = async () => {
        setModalVisible1(true)
    }

    const [l, setl] = useState();

    const alll = async () => {
        try {
            const response = await fetch(global.url + "policy/GetLicence.php")
            const json = await response.json();
            setl(json.licence.agreement);            //json.id to sub ides ayan ge

            // console.log(json.result[0]._id)

        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    useEffect(() => {
        alll()
    }, []);

    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            head: 'Lorem ipsum dolor sit amet,',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        },
        {
            id: 2,
            head: 'Lorem ipsum dolor sit amet,',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        },
        {
            id: 3,
            head: 'Lorem ipsum dolor sit amet,',
            down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        }])
    // ----------------------paypal------------------------------
    const [loading, setloading] = useState(false)
    const [paypalurl, setpaypalurl] = useState(null)
    const [accesstoken, setaccesstoken] = useState(null)
    const onPressPaypal = async () => {
        setloading(true)
        try {
            const token = await paypalApi.generateToken()
            // console.log("res++++++", token)
            const res = await paypalApi.createOrder(token)
            setaccesstoken(token)
            console.log("res++++++", res)

            if (!!res?.links) {
                const findUrl = res.links.find(data => data?.rel == "approve")
                //    console.log("findUrl--------------",findUrl)
                setpaypalurl(findUrl.href)
            }


            setloading(false)
        } catch (error) {
            console.log("error", error)
            setloading(true)
        }
    }


    // console.log('paypalurl--', paypalurl)

    const onurlchange = (webviewState) => {
        const { url } = webviewState;
        console.log('webviewState--' + url)
        if (webviewState.url.includes('https://example.com/cancel')) {
            clearpaypalstate()
            return;
        }
        if (webviewState.url.includes('https://example.com/return')) {
            const urlValues = queryString.parseUrl(webviewState.url)
            console.log('my urls value  ', urlValues)
            const { token } = urlValues.query
            if (!!token) {
                paymentSucess(token)
            }
        }
    }

    const paymentSucess = async (id) => {
        try {
            const res = paypalApi.capturePayment(id, accesstoken)
            console.log(' capturePayment res+++++++++', res)
            // alert("payment sucessfull")
            openmodel()
            clearpaypalstate()
        } catch (error) {
            console.log('error raised in payment capture', error)
        }
    }

    const clearpaypalstate = () => {
        setpaypalurl(null)
        setaccesstoken(null)
    }
    return (
        <View>
            <ScrollView style={styles.myBackground}>


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

                    <View style={{ marginHorizontal: '5%', marginVertical: '2%', alignItems: 'center', marginBottom: '20%' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                            Some Of The Counter-intuitive Secrets, Tips & Techniques This Course Will Teach You To Get As Many Clients As You Want (Regardless Of Hourly Rate)
                        </Text>
                        <Text>

                        </Text>
                    </View>
                </View>

                <StripeProvider
                    publishableKey={SP_KEY}
                    merchantIdentifier="merchant.identifier" // required for Apple Pay
                    urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
                >
                    {/* <PaymentScreen /> */}
                </StripeProvider>

            </ScrollView >
            <View style={styles.vbtnlast}>
                <TouchableOpacity style={styles.btnlast} onPress={() => {
                    // openmodel()
                    openmodel1()
                    // navigation.navigate('Payment_Screen')
                }}>
                    <Text style={styles.txtlast}>Get Access Now</Text>
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
                                <Text style={styles.textStyle1}>Success</Text>
                                <Text style={styles.txt5}>Subscription paid successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        navigation.navigate('Complete_Profile')
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* ---------------------------licence agreement------------------------------------- */}

            <View style={styles.centeredView1}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible1(!modalVisible1);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView1}>

                            <View style={{ justifyContent: 'center', marginHorizontal: '5%', marginTop: '5%' }}>
                                <Text style={{ color: '#242424', fontSize: 19 }}>
                                    License Agreement
                                </Text>

                                <ScrollView style={{ height: 240 }}>
                                    <View>
                                        <Text style={{ color: '#242424', fontSize: 12, marginTop: '3%' }}>
                                            {l}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>


                            <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-around', marginRight: '20%' }}>
                                <Checkbox
                                    color="#14A800"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                    style={{ width: 30, height: 30 }} />
                                <Text style={{ alignSelf: 'center', fontSize: 13, color: '#000000' }}>I Agree with License Agreement </Text>

                            </View>

                            <View style={{
                                borderTopColor: 'lightgray', borderTopWidth: 1, alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button1]}
                                    onPress={() => {
                                        setModalVisible1(!modalVisible1);
                                        onPressPaypal()
                                    }}
                                    // disabled={true}
                                    disabled={loading == false && checked == true ? false : true}
                                // onPress={() => {
                                //     setModalVisible1(!modalVisible1);

                                //     openmodel()
                                // }}
                                >
                                    <Text style={[styles.textStyle1, { color: 'white' }]}>Continue</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
            {/* --------------------paypalmodel--------------------------- */}
            <Modal
                visible={!!paypalurl}>
                <TouchableOpacity
                    onPress={() => { clearpaypalstate() }}
                    style={{ width: 30, alignSelf: 'flex-end' }}
                >
                    <MaterialIcons name={'close'} size={27} color={'#000000'} style={{ marginTop: '3%', marginRight: '3%' }} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: paypalurl }}
                        onNavigationStateChange={onurlchange}
                    />
                </View>

            </Modal>
        </View>
    )
}
export default App;