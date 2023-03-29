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
// LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const openmodel = async () => {
        setModalVisible(true)
    }
    const [modalVisible, setModalVisible] = useState(false);
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
            <View style={styles.vbtnlast}>
                <TouchableOpacity style={styles.btnlast} onPress={() => { openmodel() }}>
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
                            <View style={{
                                height: 100,
                                width: 100,
                                backgroundColor: 'white',
                                borderRadius: 100,
                                alignItems: 'center',
                                position: 'absolute',
                                alignSelf: 'center',
                                top: -50,
                                elevation: 5
                            }}>
                                <Alertt width={600} height={75} style={{ marginTop: '10%' }} />
                            </View>
                            <View style={{ marginTop: '15%', alignItems: "center" }}>
                                <Text style={styles.textStyle}>Success</Text>
                                <Text style={{ color: '#333333', fontSize: 18, marginTop: '3%' }}>Subscription paid successfully</Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.button]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        navigation.navigate('SignUp')
                                    }}
                                >
                                    <Text style={[styles.textStyle, { color: 'white' }]}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}
export default App;