import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    View, Image, Text, TouchableOpacity
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appImages } from '../../../assets/utilities/index'
import {
    Button,
    TouchableRipple,
    Appbar,
    Divider,
} from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
const App = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.myBackground}>
           <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="About Us" />
                <Appbar.Action onPress={() => { }} />

            </Appbar.Header>
            <View style={{ marginTop: 10}}>
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>Product Name:</Text>
                    <Text style={[styles.text2, { fontSize: 17 }]}>Lorem ipsum dolor etetu</Text>
                </View>
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>Version:</Text>
                    <Text style={[styles.text2, { fontSize: 17 }]}>Lorem ipsum dolor </Text>
                </View>
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>Developer:</Text>
                    <Text style={[styles.text2, { fontSize: 17 }]}>Lorem ipsum dolor </Text>
                </View>
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>Lorem ipsum dolor lorem ipsum dolor</Text>
                    <Text style={[styles.text2, { fontSize: 17 }]}>lorem ipsum dolor </Text>
                </View>
                <Divider style={styles.dividerhori} />
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>End User License Agreement</Text>
                </View>
                <Divider style={styles.dividerhori} />
                <View style={styles.margen}>
                    <Text style={[styles.text1, { fontSize: 18 }]}>Privacy Policy</Text>
                </View>
            </View>
        </View>

    )
}

export default App;