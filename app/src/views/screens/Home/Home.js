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
import SVGImg from './../../../assets/images/home.svg';
import Star from './../../../assets/images/star.svg';
import { collectBankAccountForPayment } from '@stripe/stripe-react-native';
// LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
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
    return (
        <ScrollView style={styles.myBackground}>

            <SVGImg width={400} height={190} />

            <View style={styles.top}>
                <View style={{
                    marginLeft: '60%',
                    marginTop: 25
                }}>
                    <Text style={styles.txtb}>Home</Text>
                </View>
                <View style={{ marginLeft: '10%', marginTop: '15%' }}>
                    <Text style={styles.txtb}>Welcome,</Text>
                    <Text style={styles.txtg}>Hohn Deo</Text>
                </View>
            </View>
            <View style={styles.bigview}>
                <View style={{ marginHorizontal: '5%' }}>
                    <Text style={styles.header}>More than 1k+ Users Trust us</Text>
                    <Text style={{ color: '#242424', fontSize: 12 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus </Text>
                </View>




                <View style={{ backgroundColor: '#F7F7F7', marginTop: '5%' }}>
                    <View style={styles.choose}>
                        <Text style={styles.choose1}>Why Choose Us</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={styles.header}>Why you should learn from Upwork Mastery</Text>
                        <Text style={{ color: '#242424', fontSize: 12 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '15%', marginTop: '5%', marginBottom: '7%' }}>
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
                    <View style={{}}>
                        <Divider style={{ marginTop: '5%' }} />
                        <FlatList
                            data={TEMP_DATA}
                            // disableVirtualization={true}
                            ItemSeparatorComponent={Divider}
                            // scrollEnabled={isScrollEnabled}
                            renderItem={({ item, index }) => {
                                return <View style={{ height: 110 }}>
                                    <Star width={640} height={90} />
                                    <View style={{ marginTop: 5, position: 'absolute', marginHorizontal: '5%' }}>
                                        <Text style={{ fontSize: 18, color: '#242424' }}>{item.head}</Text>
                                        <Text style={{ fontSize: 12, color: '#242424', marginRight: '12%', marginTop: '3%' }}>{item.down}</Text>
                                    </View>
                                </View>

                            }}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>
            </View>

        </ScrollView >
    )
}
export default App;