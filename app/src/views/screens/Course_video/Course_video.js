import React, { useState, useEffect, useCallback } from 'react'
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

import YoutubePlayer from "react-native-youtube-iframe";

import img1 from './../../../assets/images/img1.svg';
import img2 from './../../../assets/images/img2.svg';
import img3 from './../../../assets/images/img3.svg';
import img4 from './../../../assets/images/img4.svg';

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
  
    useEffect(() => {

    }, [isFocused]);
    return (
        <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Course Video" />
                <Appbar.Action onPress={() => { }} />
            </Appbar.Header>

            <View style={{ marginTop: '40%' }}>
                <YoutubePlayer
                    height={300}  //required
                    // width={100}
                    play={playing}
                    videoId={"w2ifba5_1qI"}
                    onChangeState={onStateChange}
                // playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}
                // playListStartIndex={1}//number
                // playList={['QRt7LjqJ45k', 'fHsa9DqmId8']}
                // onPlaybackQualityChange={}
                // mute={false}
                // volume={30} //0 to 100
                // playbackRate={1}//number or floating point (speed)
                // forceAndroidAutoplay={false}
                // allowWebViewZoom={true}
                // contentScale={10}//zoom in or out

                />
            </View>
        </ScrollView >
    )
}

export default App;


