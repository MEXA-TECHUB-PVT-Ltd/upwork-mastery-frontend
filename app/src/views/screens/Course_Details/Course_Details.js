import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView, FlatList, Modal, Pressable,
    View, Image, Text, TouchableOpacity, Animated
} from 'react-native'
const { height, width } = Dimensions.get('screen')
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
import Thumnail from './../../../assets/images/thumnail.svg';
import YoutubePlayer from 'react-native-youtube-iframe';
import Star from './../../../assets/images/img3.svg';
import img1 from './../../../assets/images/img1.svg';
import img2 from './../../../assets/images/img2.svg';
import img3 from './../../../assets/images/img3.svg';
import img4 from './../../../assets/images/img4.svg';
const App = ({ route, navigation }) => {
    const { index, id, description, title, stat, vid, select } = route.params;

    const isFocused = useIsFocused()
    const [currentIndex, setCurrentIndex] = useState(index);
    const [titlee, settitlee] = useState(title);

    const [playing, setPlaying] = useState(false);
    const [all, setall] = useState(select);
    const ref = useRef()
    const [check, setcheck] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    useEffect(() => {
    }, [isFocused]);



    // -------------------------------------------------------------------------
    console.log('item list--->>  ' + vid)

    console.log(currentIndex)
    const line = parseInt(currentIndex + 1) + '/' + select.length
    // -------------------------------------------------------------------------

    const bookmarksave = async (id, status) => {
        console.log(id, await AsyncStorage.getItem('userid'))
        var InsertAPIURL = global.url + "cource/SaveVideo.php";
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        await fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                user_id: await AsyncStorage.getItem('userid'),
                video_id: id
            }),
        })
            .then(response => response.json())
            .then(async response => {

                if (response.status == true) {
                    alllist()
                } else {
                    console.log('----' + response.message)
                }
                // console.log(response.message)
            })
            .catch(error => {

                console.log('this is error' + error);

            });
    }
    const bookmarknotsave = async (id, status) => {
        console.log(id, await AsyncStorage.getItem('userid'))
        var InsertAPIURL = global.url + "cource/UnsaveVideo.php";
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        await fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                user_id: await AsyncStorage.getItem('userid'),
                video_id: id
            }),
        })
            .then(response => response.json())
            .then(async response => {
                if (response.status == true) {
                    alllist()
                } else {
                    console.log('----' + response.message)
                }
            })
            .catch(error => {

                console.log('this is error' + error);

            });
    }

    const alllist = async () => {
        setall([])
        try {
            const response = await fetch(global.url + "cource/SaveStatus.php?user_id=" + await AsyncStorage.getItem('userid'))
            const json = await response.json();
            // console.log(json.videos)
            let initialList = json.videos;
            let array = []
            initialList.forEach(element => {
                let obj = {
                    id: element.data.id,
                    title: element.data.title,
                    link: element.data.link,
                    description: element.data.description,
                    status: element.data.status
                };
                array.push(obj);
            });
            setall(array)
            console.log(all)
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    return (
        <ScrollView style={[styles.myBackground]}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#14A800', height: 60 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginHorizontal: '5%' }}>
                    <MaterialIcons name={'navigate-before'} size={24} color={'white'} onPress={() => { navigation.goBack() }} />
                    <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', marginLeft: '5%' }}>
                        {titlee}
                    </Text>
                </View>
                <Text style={{ fontSize: 20, color: 'white', marginRight: '5%', alignSelf: 'center' }}>{line}</Text>
            </View>
            <Animated.FlatList
                horizontal
                data={all}
                pagingEnabled={true}

                // scrollToIndex={parseInt(currentIndex)}

                // keyExtractor={(item) => item.id}

                ref={ref}
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x
                    setCurrentIndex((x / (width - 50).toFixed(0)))

                }}
                renderItem={({ item, index }) => {

                    return <Animated.View>

                        <YoutubePlayer
                            height={200}
                            width={360}
                            play={playing}
                            // mute={isMute}
                            videoId={check != false ? item.link : vid}
                            onChangeState={onStateChange}
                        />
                        <View style={styles.v1}>
                            <View style={styles.v11}>
                                <Text style={styles.txt1}>Course Description</Text>
                                <TouchableOpacity style={{ left: 180 }}
                                    onPress={() => {
                                        if (item.status == 'not_saved') {
                                            bookmarksave(item.id, item.status)
                                        }
                                        else {
                                            bookmarknotsave(item.id, item.status)
                                        }

                                    }}>
                                    {check != false ?
                                        <MaterialIcons name={item.status == 'saved' ? "bookmark" : "bookmark-outline"} size={25} color={item.status == 'saved' ? '#14A800' : '#9D9D9D'} />
                                        : <MaterialIcons name={stat == 'saved' ? "bookmark" : "bookmark-outline"} size={25} color={stat == 'saved' ? '#14A800' : '#9D9D9D'} />
                                    }</TouchableOpacity >
                            </View>

                            <View style={{ marginHorizontal: '5%' }}>
                                {check != false ?
                                    <Text style={styles.txt3}>{item.description}</Text>
                                    : <Text style={styles.txt3}>{description}</Text>}
                            </View>
                        </View>
                    </Animated.View>
                }}
            />


            {/* <Animated.FlatList
                horizontal
                data={select}
                pagingEnabled={true}
                keyExtractor={(item) => item.id}
                ref={ref}
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x
                    setCurrentIndex((x / (width - 50).toFixed(0)))
                }}
                renderItem={({ item, index }) => {
                    return <Animated.View style={styles.v1}>
                        <View style={styles.v11}>
                            <Text style={styles.txt1}>Course Description</Text>
                            <TouchableOpacity style={{ left: 180 }}
                                onPress={() => {
                                    if (item.status == 'not_saved') {
                                        bookmarksave(item.id, item.status)
                                    }
                                    else {
                                        bookmarknotsave(item.id, item.status)
                                    }
                                    // setwish(!wish)
                                }}>
                                <MaterialIcons name={item.status == 'saved' ? "bookmark" : "bookmark-outline"} size={25} color={item.status == 'saved' ? '#14A800' : '#9D9D9D'} />
                            </TouchableOpacity >
                        </View>

                        <View>
                            <Text style={styles.txt3}>{item.description}</Text>
                        </View>
                    </Animated.View>
                }}
            /> */}



            <View style={styles.v2}>
                {
                    currentIndex == 0 ? <Text></Text> : (
                        <TouchableOpacity style={styles.btnl}
                            onPress={() => {

                                let i
                                for (i = 0; i < select.length; i++) {
                                    if (parseInt(currentIndex - 1) == i) {
                                        settitlee(select[i].title)
                                        setcheck(true)
                                    }
                                }
                                setCurrentIndex(currentIndex - 1)
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentIndex) - 1,

                                })
                            }}>
                            <Text style={styles.txtl}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    )
                }
                {
                    all.length - 1 < currentIndex ? <Text></Text> : (
                        <TouchableOpacity style={styles.btnl}
                            onPress={() => {

                                let i
                                for (i = 0; i < select.length; i++) {
                                    if (parseInt(currentIndex + 1) == i) {
                                        settitlee(select[i].title)
                                        setcheck(true)
                                    }
                                }
                                setCurrentIndex(currentIndex + 1)
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentIndex) + 1,

                                })
                            }}>
                            <Text style={styles.txtl}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </ScrollView >
    )
}

export default App;
