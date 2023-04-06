import React, { useEffect, useState, useCallback, useRef } from 'react'
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
import Thumnail from './../../../assets/images/thumnail.svg';
import YoutubePlayer from 'react-native-youtube-iframe';
import Star from './../../../assets/images/img3.svg';
import img1 from './../../../assets/images/img1.svg';
import img2 from './../../../assets/images/img2.svg';
import img3 from './../../../assets/images/img3.svg';
import img4 from './../../../assets/images/img4.svg';
const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [currentIndex, setCurrentIndex] = useState(0);

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    useEffect(() => {

    }, [isFocused]);

    const [TEMP_DATA, setTEMP_DATA] = useState([
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        }])

    return (
        <ScrollView style={[styles.myBackground]}>
            <Appbar.Header
                style={{ backgroundColor: '#14A800' }}
            >
                <Appbar.Action icon="chevron-left" color={'white'} onPress={() => { navigation.goBack() }} />
                <Appbar.Content color={'white'} title="Video Title" />
                <Appbar.Action onPress={() => { }} />

            </Appbar.Header>
            <YoutubePlayer
                height={200}
                // ref={controlRef}
                play={playing}
                // mute={isMute}
                videoId={'84WIaK3bl_s'}
                onChangeState={onStateChange}
            />

            <View style={styles.v1}>
                <View style={styles.v11}>
                    <Text style={styles.txt1}>Course Description</Text>
                    <TouchableOpacity
                        onPress={() => { }}>
                        <MaterialIcons name="bookmark-outline" size={25} color={'#9D9D9D'} />
                    </TouchableOpacity >
                </View>

                <View>
                    <Text style={styles.txt3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</Text>
                </View>
            </View>


            <View style={styles.v2}>
                <TouchableOpacity style={styles.btnl} onPress={() => { decrementIndex() }}>
                    <Text style={styles.txtl}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnl} onPress={() => { incrementIndex() }}>
                    <Text style={styles.txtl}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default App;


