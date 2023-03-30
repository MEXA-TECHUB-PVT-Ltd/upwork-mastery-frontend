import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions, FlatList, TextInput,
    ScrollView, Alert,
    View, Image, Text, TouchableOpacity, ImageBackground
} from 'react-native'
import { appImages } from '../../../assets/utilities/index'
import {
    Button,
    TouchableRipple,
    // TextInput,
    Divider,
    Chip, Switch
} from 'react-native-paper';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native'


const App = () => {
    const navigation = useNavigation()
    const [currentDay, setcurrentDay] = useState(1)
    const [currentDescription, setcurrentDescription] = useState('')
    const [dayDescription, setdayDescription] = useState([])
    const [srch, setsrch] = useState(false)
    const [data, setData] = useState([]);
    const [books, setbooks] = useState([]);
    useEffect(() => {

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
    const ItemRender = ({ id, name }) => (

        <View style={styles.v1}>
            <Chip
                closeIcon={'close'}
                style={styles.btnop}
                onClose={() => {
                    // deleteSelectedElement(id, name)
                    const filteredData = TEMP_DATA.filter(item => item.id !== id);
                    setTEMP_DATA(filteredData);
                }}>
                <View>
                    <MaterialIcons name="trending-up" size={20} color={'gray'} />
                </View>
                <View>
                    <Text style={styles.txt2}>
                        {name}
                    </Text>
                </View>
            </Chip>


        </View>
    );


    return (
        <ScrollView style={[styles.myBackground]}>
            <View
                style={styles.v2}>

                <TouchableOpacity activeOpacity={0.6} style={styles.drawericonstyle}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="navigate-before" size={40} color={'white'} />
                </TouchableOpacity>
                <TextInput
                    style={[styles.input,{  paddingLeft: '12%'}]}
                    onChangeText={text => {

                        // setcurrentDescription(text)
                    }}
                    placeholder="Search here"
                />

                <Image
                    source={appImages.search}
                    style={styles.img}
                />

            </View>


            <View>

                <View style={styles.v3}>
                    <Text style={styles.txt3}>Recent searches</Text>

                    <FlatList
                        data={TEMP_DATA}
                        renderItem={({ item }) => <ItemRender id={item.id} name={item.head} />}
                        ItemSeparatorComponent={Divider}
                        keyExtractor={(item) => item.id}
                        numColumns={1}
                    />
                </View>

                <View style={styles.v4}>

                    <FlatList
                        data={books}
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity activeOpacity={0.6}
                                style={styles.optionsView}
                                onPress={() => { }}>
                                <View style={styles.v5}>
                                    <Text numberOfLines={1} style={styles.txt4}>abv</Text>
                                </View>
                            </TouchableOpacity>
                        }}
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        </ScrollView >
    )
}

export default App;