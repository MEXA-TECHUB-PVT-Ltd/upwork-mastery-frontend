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


    const openmodel = async () => {
        setModalVisible(true)
    }
    const openmodel1 = async () => {
        setModalVisible1(true)
    }

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

                <SVGImg width={500} height={270} viewBox="100 100 450 200" />

                <View style={styles.top}>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 25
                    }}>
                        <Text style={styles.txtb}>Welcome </Text>
                        <Text style={styles.txtb}>to </Text>
                        <Text style={styles.txtb}>Upwork Mastery</Text>
                    </View>
                    <View style={{ marginLeft: '10%', marginTop: '5%' }}>

                        <Text style={styles.txtg}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem </Text>
                    </View>
                </View>
                <View style={styles.bigview}>
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={styles.header}>More than 1k+ Users Trust us</Text>
                        <Text style={styles.down}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus </Text>
                    </View>




                    <View style={{ backgroundColor: '#F7F7F7', marginTop: '5%' }}>
                        <View style={styles.choose}>
                            <Text style={styles.choose1}>Why Choose Us</Text>
                        </View>
                        <View style={{ marginHorizontal: '5%' }}>
                            <Text style={styles.header}>Why you should learn from Upwork Mastery</Text>
                            <Text style={styles.down}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </Text>
                        </View>

                        <View style={styles.v1}>
                            <View>
                                <Text style={styles.txt1}>1k+</Text>
                                <Text style={styles.txt2}>Lorem ipsum</Text>

                                <Text style={[styles.txt1, { marginTop: '45%' }]}>450k+</Text>
                                <Text style={styles.txt2}>Lorem ipsum</Text>
                            </View>
                            <View>
                                <Text style={styles.txt1}>100k+</Text>
                                <Text style={styles.txt2}>Lorem ipsum</Text>

                                <Text style={[styles.txt1, { marginTop: '45%' }]}>2.5k+</Text>
                                <Text style={styles.txt2}>Lorem ipsum</Text>
                            </View>
                        </View>

                    </View>




                    <View>
                        <View style={styles.choose}>
                            <Text style={styles.choose1}>Features</Text>
                        </View>
                        <View style={{ marginHorizontal: '5%' }}>
                            <Text style={styles.header}>What we provide</Text>
                        </View>
                        <View style={{ marginBottom: '25%' }}>
                            <Divider style={{ marginTop: '5%' }} />
                            <FlatList
                                data={TEMP_DATA}
                                // disableVirtualization={true}
                                ItemSeparatorComponent={Divider}
                                // scrollEnabled={isScrollEnabled}
                                renderItem={({ item, index }) => {
                                    return <View style={{ height: 110 }}>
                                        <Star width={600} height={90} style={{ marginLeft: '6%' }} />
                                        <View style={styles.v2}>
                                            <Text style={styles.txt3}>{item.head}</Text>
                                            <Text style={styles.txt4}>{item.down}</Text>
                                        </View>
                                    </View>

                                }}
                                numColumns={1}
                                keyExtractor={item => item.id}
                            />
                        </View>

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
                                <Text style={{ color: '#242424', fontSize: 12, marginTop: '3%' }}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua., sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolo
                                </Text>
                            </View>


                            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-around', marginRight: '20%' }}>
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