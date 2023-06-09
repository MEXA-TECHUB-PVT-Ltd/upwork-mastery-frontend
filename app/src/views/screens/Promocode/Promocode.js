import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity
} from 'react-native'
import { appImages } from '../../../assets/utilities/index'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useIsFocused } from '@react-navigation/native';

import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar, Checkbox
} from 'react-native-paper';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = ({ navigation }) => {
    const isFocused = useIsFocused()

    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            code: 178687,
            head: '25%',
            down: '04/04/2023',
        },
        {
            id: 2,
            code: 178687,
            head: '45%',
            down: '04/04/2023',
        },
        {
            id: 3,
            code: 178687,
            head: '54%',
            down: '04/04/2023',
        }])
        const [list, setlist] = useState([]);

        const alllist = async () => {
            try {
                const response = await fetch(global.url + "promoCodes/GetPromoCodes.php")
                const json = await response.json();
                setlist(json.data);            //json.id to sub ides ayan ge
    
                // console.log(json.result[0]._id)
    
            } catch (error) {
                console.error(error);
            } finally {
                // setLoading(false);
            }
        }

    useEffect(() => {
        alllist()
    }, [isFocused]);
    return (
        <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Content color={'white'} title="Promocodes" />
                <Appbar.Action />
                <Appbar.Action />

            </Appbar.Header>

            <View style={{marginHorizontal: '5%',marginTop:'5%'}}>
                <Text style={{color:'#242424',fontSize:16}}>Share with friends so they can enjoy discount on Upwork Mastery</Text>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => (
                        <View style={styles.v2}>
                            <View style={{ marginHorizontal: '5%', marginVertical: '5%' }}>
                                <Text style={[styles.txt14]}>{item.promo_code}</Text>

                                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: '2%' }}>
                                    <View style={styles.v1}>
                                        <Text style={[styles.txt11]}>Discount:</Text>
                                        <Text style={[styles.txt11]}>Validation Date:</Text>
                                    </View>
                                    <View style={styles.v1}>
                                        <Text style={[styles.txt12]}>{item.discount}</Text>
                                        <Text style={[styles.txt12]}>{item.expire_date}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    )}

                />
            </View>

        </ScrollView >
    )
}

export default App;


