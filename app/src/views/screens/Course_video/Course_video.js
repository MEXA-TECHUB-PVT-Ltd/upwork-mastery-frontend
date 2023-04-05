// import React, { useState, useEffect, useCallback } from 'react'
// import {
//     SafeAreaView,
//     StyleSheet,
//     Dimensions,
//     ScrollView, FlatList, Modal, Pressable,
//     View, Image, Text, TouchableOpacity
// } from 'react-native'
// import { appImages } from '../../../assets/utilities/index'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import { useIsFocused } from '@react-navigation/native';

// import {
//     Button,
//     TouchableRipple,
//     Appbar,
//     Divider, ProgressBar, Checkbox
// } from 'react-native-paper';
// import styles from './styles';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import YoutubePlayer from "react-native-youtube-iframe";

// const App = ({ navigation }) => {
//     const isFocused = useIsFocused()
//     const [playing, setPlaying] = useState(false);

//     const onStateChange = useCallback((state) => {
//         if (state === "ended") {
//             setPlaying(false);
//             Alert.alert("video has finished playing!");
//         }
//     }, []);

//     useEffect(() => {

//     }, [isFocused]);
//     return (
//         <ScrollView style={[styles.myBackground, { backgroundColor: 'white' }]}>
//             <Appbar.Header
//                 style={{ backgroundColor: '#14A800' }}
//             >
//                 <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
//                 <Appbar.Content color={'white'} title="Course Video" />
//                 <Appbar.Action onPress={() => { }} />
//             </Appbar.Header>

//             <View style={{ marginTop: '40%' }}>
//                 <YoutubePlayer
//                     height={300}  //required
//                     // width={100}
//                     play={playing}
//                     videoId={"w2ifba5_1qI"}
//                     onChangeState={onStateChange}
//                 // playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}
//                 // playListStartIndex={1}//number
//                 // playList={['QRt7LjqJ45k', 'fHsa9DqmId8']}
//                 // onPlaybackQualityChange={}
//                 // mute={false}
//                 // volume={30} //0 to 100
//                 // playbackRate={1}//number or floating point (speed)
//                 // forceAndroidAutoplay={false}
//                 // allowWebViewZoom={true}
//                 // contentScale={10}//zoom in or out

//                 />
//             </View>
//         </ScrollView >
//     )
// }

// export default App;


import React, { useState, useRef, useEffect } from 'react';

import { View, Alert, StyleSheet, Slider, TouchableOpacity, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar, Checkbox
} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
const App = () => {
    const [playing, setPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const controlRef = useRef();
    const isFocused = useIsFocused()
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const onSliderValueChange = (value) => {
        playerRef.current.seekTo(value);
        setCurrentTime(value);
    };
    useEffect(() => {
        playerRef.current.getCurrentTime().then((currentTime) => {
            setCurrentTime(currentTime);
        });
    }, [currentTime, isFocused]);


    const onStateChange = (state) => {
        playerRef.current.getDuration().then((duration) => {
            setDuration(duration);
        });
        playerRef.current.getCurrentTime().then((currentTime) => {
            setCurrentTime(currentTime);
        });
        console.log(state)
        if (state === 'ended') {
            setPlaying(false);
            playerRef.current.seekTo(0);
            setCurrentTime(0);
            Alert.alert('video has finished playing!');
        }
        if (state !== 'playing') {
            playerRef.current.getCurrentTime().then((currentTime) => {
                setCurrentTime(currentTime);
            });
            // playerRef.current.getDuration().then((duration) => {
            //     setDuration(duration);
            // });
            setPlaying(false);
        }
        if (state === 'buffering') {
            playerRef.current.getCurrentTime().then((currentTime) => {
                setCurrentTime(currentTime);
            });
        }
        if (state === 'video_cued') {
            playerRef.current.getDuration().then((duration) => {
                setDuration(duration);
            });
        }
    };
    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    };

    const muteVideo = () => setMute(!isMute);

    const ControlIcon = ({ name, onPress }) => (

        <Icon onPress={onPress} name={name} size={24} color="black" />
        // {/* <TouchableOpacity onPress={onPress} ><Text>sss</Text></TouchableOpacity> */}
    );

    return (

        <View style={styles.container}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Course Video" />
                <Appbar.Action onPress={() => { }} />
            </Appbar.Header>
            <View style={{ marginTop: '30%' }}>
                <YoutubePlayer
                    height={250}
                    ref={playerRef}
                    play={playing}
                    mute={isMute}
                    videoId={'84WIaK3bl_s'}
                    onChangeState={onStateChange}
                />
                <View style={{ marginTop: '10%' }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={duration}
                        value={currentTime}
                        onSlidingComplete={onSliderValueChange}
                        minimumTrackTintColor={'#14A800'}
                        maximumTrackTintColor={'#888'}
                        thumbTintColor={'#14A800'}
                    />
                    <View style={styles.controlContainer}>

                        <ControlIcon
                            onPress={togglePlaying}
                            name={playing ? 'pause' : 'play-arrow'}
                        />
                        <View style={{ marginHorizontal: '2%' }}>
                            <ControlIcon
                                onPress={muteVideo}
                                name={isMute ? 'volume-up' : 'volume-off'}
                            />
                        </View>
                        <Text style={{ alignSelf: 'center' }}>{duration.toFixed(0)}/{currentTime.toFixed(0)}</Text>

                    </View>
                </View>
            </View>
        </View>

    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    controlContainer: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '3%',
    },
});
export default App