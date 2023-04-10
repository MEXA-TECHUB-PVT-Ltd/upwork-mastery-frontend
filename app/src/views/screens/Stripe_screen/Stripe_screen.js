import { StripeProvider, usePaymentSheet, CardField, CardForm } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Text, StyleSheet, View } from 'react-native'
import { SP_KEY } from '@env'

const App = () => {
  const [ready, setready] = useState(false)
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet()
  useEffect(() => {
    intialisePaymentSheet()
  }, [])

  const intialisePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams()

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Example Inc.',
      allowsDelayedPaymentMethods: true,
      // returnURL: 'stripe-example://stripe-redirect',
      applePay: {
        merchantCountryCode: 'US',
      },
      googlePay: {
        merchantCountryCode: 'US',
        testEnv: true,
        currencyCode: 'usd',
      }
    })
    if (error) {
      Alert.alert(`Error code:${error.code}`, error.message);
    }
    else {
      setready(true)
    }

  }

  const fetchPaymentSheetParams = async () => {
    const response = await fetch("https://mtechub.org/products/upworkmastery/apis/payment/create_subscrtion.php", {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: "1",
        card_number: "4242424242424242",
        card_exp_month: "12",
        card_exp_year: "2024",
        card_cvv: "123",
        amount: "100000",
        currency: "inr",
        email: "mshoaib22757@gmail.com",
        name: "maya",
        phone: "03333333",
        description: "my description"
      })
    });
    // const { paymentIntent, ephemeralKey, customer } = await response.json()
    const json = await response.json();
    // console.log(json)
    // console.log('-----------', json.payment_intent_client_secret)
    let paymentIntent=json.payment_intent_client_secret
    let ephemeralKey=json.ephemeral_secret_Key
    let customer=json.customer
    console.log(paymentIntent,ephemeralKey,customer)
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  async function buy() {
    const { error } = await presentPaymentSheet()
    if (error) {
      Alert.alert(`Error code:${error.code}`, error.message)
      console.log(error.message)
      console.log(error)
    }
    else {
      Alert.alert("Success", `The payment was confirmed successfully`)
      setready(false)
    }
  }


  return (
    <View style={styles.container}>
      <StripeProvider
        publishableKey={SP_KEY}
      // merchantIdentifier={marchent_id}
      >
        <Text>1 kg of sweet potatoes</Text>
        <Button title='Buy' onPress={buy}
          disabled={loading || !ready}
        />

        {/* <CardField style={styles.cardfield} />
        <CardForm style={styles.cardform} /> */}

      </StripeProvider>
    </View>
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    alignItem: 'center',
    marginTop: 100,
  },
  image: {
    height: 250,
    width: 250
  },
  cardfield:
  {
    height: 170,
    width: '90%',
    marginBottom: 30
  },
  cardform: {
    height: 170,
    width: '90%',
  }
})