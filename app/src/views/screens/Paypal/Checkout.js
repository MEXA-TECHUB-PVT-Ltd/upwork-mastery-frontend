import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Text, StyleSheet, View } from 'react-native'


const App = () => {

    return (
        <View style={styles.container}>

            <Button title='complete purchase' onPress={() => { navigation.navigate('Paypal') }}
            // disabled={} 
            />
        </View>
    );
}
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

export default App;