import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Text, StyleSheet, View, Modal } from 'react-native'
import WebView from 'react-native-webview'
import paypalApi from './../apis/paypalApi'
import { ActivityIndicator } from 'react-native-paper'
import queryString from 'query-string';
import { TouchableOpacity } from 'react-native-gesture-handler'
const App = () => {

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
    useEffect(() => {
    }, []);



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
            alert("payment sucessfull")
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
        <View style={styles.container}>
            <Button title='complete purchase'
                onPress={onPressPaypal}
                disabled={loading}

            />{
                loading ? <ActivityIndicator /> : <Text>loading complete</Text>
            }


            <Modal
                visible={!!paypalurl}>
                <TouchableOpacity
                    onPress={() => { clearpaypalstate }}
                >
                    <Text>Close</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: paypalurl }}
                        onNavigationStateChange={onurlchange}
                    />
                </View>

            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItem: 'center',
        marginTop: 100,
    },

})

export default App;