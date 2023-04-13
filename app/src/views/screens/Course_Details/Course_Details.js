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
    const { index, id, description, select } = route.params;
    const isFocused = useIsFocused()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wish, setwish] = useState(false);
    const [playing, setPlaying] = useState(false);
    const ref = useRef()

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    useEffect(() => {

    }, [isFocused]);

    // const [TEMP_DATA, setTEMP_DATA] = useState([
    //     {
    //         id: 1,
    //         src: '118783781937'
    //     },
    //     {
    //         id: 2,
    //         src: 'dhxihwijxiwjx'
    //     },
    //     {
    //         id: 3,
    //         src: "'][]'''\]'][]']\']''",
    //     }])
    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            linkid: 'J28bwxjl4EA'
        },
        {
            id: 2,
            linkid: '84WIaK3bl_s'
        },
        {
            id: 3,
            linkid: 'J28bwxjl4EA'
        }])
    console.log('item list--->>  ' + index, description)
    const line = index + '/' + select.length
    return (
        <ScrollView style={[styles.myBackground]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Video Title" />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Action onPress={() => { }} />
                <Appbar.Content color={'white'} title={line + " "} style={{ marginRight: '0%' }} />
            </Appbar.Header>
            <Animated.FlatList
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
                    return <Animated.View>

                        <YoutubePlayer
                            height={200}
                            width={360}
                            play={playing}
                            // mute={isMute}
                            videoId={item.link}
                            onChangeState={onStateChange}
                        />
                    </Animated.View>
                }}
            />


            <View style={styles.v1}>
                <View style={styles.v11}>
                    <Text style={styles.txt1}>Course Description</Text>
                    <TouchableOpacity
                        onPress={() => { setwish(!wish) }}>
                        <MaterialIcons name={wish == false ? "bookmark-outline" : "bookmark"} size={25} color={wish == false ? '#9D9D9D' : '#14A800'} />
                    </TouchableOpacity >
                </View>

                <View>
                    <Text style={styles.txt3}>{description}</Text>
                </View>
            </View>


            <View style={styles.v2}>
                {
                    currentIndex == 0 ? <Text></Text> : (
                        <TouchableOpacity style={styles.btnl}
                            onPress={() => {
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
                    select.length - 1 < currentIndex ? <Text></Text> : (
                        <TouchableOpacity style={styles.btnl}
                            onPress={() => {
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
