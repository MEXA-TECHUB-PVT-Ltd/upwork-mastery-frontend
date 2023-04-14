import React, { useState, useEffect } from 'react';


import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [userid, setuserid] = useState()
    const [username, setusername] = useState()
    const [useremail, setuseremail] = useState()
    const [userimage, setuserimage] = useState()
    const [check, setcheck] = useState(false)

    const [all, setall] = useState([]);

    const alllist = async () => {
        try {
            const response = await fetch(global.url + "auth/GetAllUser.php")
            const json = await response.json();
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
            const exsist = all.result.filter((item) => {
                if (item.id == userid) {
                    setcheck(true)
                    return item
                } else {
                    return null
                }
            })
            console.log(all)


        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }

    const gett = async () => {
        setuserid(await AsyncStorage.getItem('userid'))
        setusername(await AsyncStorage.getItem('username'))
        setuseremail(await AsyncStorage.getItem('useremail'))
        setuserimage(await AsyncStorage.getItem('password'))
    }

    const ckecking = async () => {

        if (await AsyncStorage.getItem('userid') != null) {
            setTimeout(() => {
                console.log('home')
                navigation.replace("Home")
            }, 500)
        }
        if (await AsyncStorage.getItem('userid') == null) {
            setTimeout(() => {
                navigation.replace("Onbording")
                console.log('Onbording')
            }, 500)
        }
        // if (check === true) {
        //     setTimeout(() => {
        //         navigation.replace("Onbording")
        //         console.log('Onbording')
        //     }, 500)
        // }
    }

    useEffect(() => {
        gett()
        // alllist()
        ckecking()

    }, [isFocused]);

    return (
        <ScrollView >
            {/* <ActivityIndicator
                // color={global.color}
                size="large"
                // style={}
            /> */}
        </ScrollView>
    );
};

export default Home  
