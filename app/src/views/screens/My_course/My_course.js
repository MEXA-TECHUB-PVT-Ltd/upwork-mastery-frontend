import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity, ImageBackground
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

import Img1 from './../../../assets/images/img1.svg';
import Img2 from './../../../assets/images/img2.svg';
import Img3 from './../../../assets/images/img3.svg';
import Img4 from './../../../assets/images/img4.svg';
import Aa from './../../../assets/images/aa.svg';
import { BackgroundImage } from 'react-native-elements/dist/config';

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [modalVisible, setModalVisible] = useState(false);

    const [book, setbook] = useState(false);
    const [clickedId, setclickedId] = useState(100)
    const [modalVisible1, setModalVisible1] = useState(false);

    const openmodel1 = async () => {
        setModalVisible1(true)
    }
    // const [TEMP_DATA, setTEMP_DATA] = useState([
    //     {
    //         id: 1,
    //         src: Img1,
    //         selected: false,
    //         head: 'Course Title',
    //         down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
    //     },
    //     {
    //         id: 2,
    //         src: img2,
    //         selected: false,
    //         head: 'Course Title',
    //         down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
    //     },
    //     {
    //         id: 3,
    //         src: img3,
    //         selected: false,
    //         head: 'Course Title',
    //         down: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
    //     }])
    const [r, setr] = useState();

    const allr = async () => {
        try {
            const response = await fetch(global.url + "recommendation/getRecomendation.php?id=1")
            const json = await response.json();
            setr(json.data.description);            //json.id to sub ides ayan ge

            // console.log(json.result[0]._id)

        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    const [all, setall] = useState([]);

    const alllist = async () => {
        try {
            const response = await fetch(global.url + "cource/GetCourceVideos.php")
            const json = await response.json();
            // setall(json.data);            //json.id to sub ides ayan ge

            console.log(json.length)

            let initialList = json;
            // let updatedList = [];
            initialList.forEach(element => {
                // console.log('============>>>>',element.data.description)
                let obj = {
                    id: element.data.id,
                    title: element.data.title,
                    link: element.data.link,
                    description: element.data.description,
                    // created_at:'2023-04-10 05:52:13.945929+00'
                };
                all.push(obj);
            });
            console.log(all)
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }

    const gett = async () => {

        const userid = await AsyncStorage.getItem('userid')
        const usename = await AsyncStorage.getItem('username')
        const pass = await AsyncStorage.getItem('password')
        console.log('userid,name,pass-->' + userid, usename, pass)
    }


    useEffect(() => {
        allr()
        openmodel1()
        gett()
        alllist()
    }, []);
    const [select, setSelect] = useState(all)
    // console.log("------", select)
    const handleOnpress = (item) => {
        const newlitem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            }
            else {
                return val
            }
        })
        setSelect(newlitem)
    }
    if (book == true) {
        select.splice(2, 0, select.splice(1, 1)[0]);
        // if (select.selected == true) {
        // const temp = select[0]
        // select[0] = select[1]
        // select[1] = select[2]
        // select[2] = temp
        // }
    }

    return (
        <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Content color={'white'} title="My Course" />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Action icon={'eye'} color={'white'} onPress={() => { openmodel1() }} />

                <Appbar.Action icon={book == true ? 'bookmark' : 'bookmark-outline'} color={'white'} onPress={() => { setbook(!book) }} />

            </Appbar.Header>

            <View style={{}}>
                {/* <ImageBackground style={{
                    width: "50%",
                    height: "50%"
                }}
                source={appImages.f}>
                    <View style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
                        alignSelf: "center"
                    }} />
                </ImageBackground> */}



                <FlatList
                    data={select}
                    renderItem={({ item, index }) => {
                        console.log(index)
                        return <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Course_Details', { index: index, id: item.id, description: item.description, select: select })

                            }}

                            style={{ marginHorizontal: '5%', backgroundColor: 'white' }}>
                            <View
                                style={styles.v2}>
                                <View>
                                    <Aa width={100} height={290} viewBox="0 0 100 290" />
                                    {/* <BackgroundImage source={appImages.f} style={{width:150,Height:150}}>
                                        <Text>sjx</Text>
                                    </BackgroundImage> */}
                                </View>

                                <View style={styles.v1}>
                                    <Text style={[styles.txt14]}>{item.title}</Text>
                                    <Text numberOfLines={6} style={[styles.txt12]}>{item.description}</Text>

                                </View>

                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => {
                                        setclickedId(index)
                                        handleOnpress(item)
                                    }}>
                                    <MaterialIcons name={item.selected == true ? "bookmark" : "bookmark-outline"} size={25} color={item.selected == true ? '#14A800' : '#9D9D9D'} />
                                </TouchableOpacity >
                            </View>


                        </TouchableOpacity>
                    }}

                />
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

                            <Image source={appImages.model} style={styles.modelimg} />
                            <Text style={[styles.textStyle, { fontSize: 15 }]}>Book Removed from Whislist</Text>
                            <Button
                                style={styles.buttonmodal}
                                onPress={() => ok()}
                            >
                                <Text style={[styles.textStyle, { color: 'white' }]}>Go to Back</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

            </View>
            {/* ----------------recomendation model------------------------------- */}
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
                            <ScrollView>
                                <View style={{ justifyContent: 'center', marginHorizontal: '5%', marginVertical: '5%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#242424', fontSize: 19 }}>
                                            Recommendations
                                        </Text>
                                        <TouchableOpacity onPress={() => {
                                            setModalVisible1(!modalVisible1)

                                        }}>
                                            <MaterialIcons name="close" size={24} color={'#000000'} style={styles.icon} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ color: '#242424', fontSize: 12, marginTop: '3%' }}>
                                        {r}
                                    </Text>
                                </View>
                            </ScrollView>





                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView >
    )
}

export default App;


// import React, { useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// const FlatListExample = () => {
//     const [listData, setListData] = useState(data);

//     const changeIndex = (fromIndex, toIndex) => {
//         const updatedData = [...listData];
//         updatedData.splice(toIndex, 0, updatedData.splice(fromIndex, 1)[0]);
//         setListData(updatedData);
//     };

//     const renderItem = ({ item, index }) => {
//         return (
//             <TouchableOpacity onPress={() => changeIndex(index, index + 1)}>
//                 <Text>{item}</Text>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <View>
//             <FlatList data={listData} renderItem={renderItem} />
//         </View>
//     );
// };

// export default FlatListExample;