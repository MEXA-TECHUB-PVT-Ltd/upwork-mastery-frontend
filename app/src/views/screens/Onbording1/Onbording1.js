import React, { useState, useRef, useEffect, useCallback } from 'react'
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
    Modal, Pressable, FlatList, TextInput
} from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe';
import {
    Button, Appbar, Checkbox, Divider, Snackbar
} from 'react-native-paper';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appImages } from '../../../assets/utilities/index'
import SVGImg from './../../../assets/images/home1.svg';
import Star from './../../../assets/images/star.svg';
import Alertt from './../../../assets/images/alert.svg';
import { collectBankAccountForPayment } from '@stripe/stripe-react-native';

import PaymentScreen from './../Payment_Screen/Payment_Screen'
LogBox.ignoreAllLogs();
import { StripeProvider } from '@stripe/stripe-react-native';
import { SP_KEY } from '@env'
import WebView from 'react-native-webview'
import paypalApi from './../apis/paypalApi'
import { ActivityIndicator } from 'react-native-paper'
import queryString from 'query-string';
const App = ({ navigation }) => {
    // alert(SP_KEY)
    const [checked, setChecked] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

    const [playing, setPlaying] = useState(false);

    const [color, setcolor] = useState('gray')





    const [email, setemail] = useState('')
    const [fil, setfil] = useState('')


    const input = useRef(null);
    const onPress = () => {
        input.current.focus();
        if (email != '')
            openmodel1()
    };



    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const openmodel = async () => {
        // setModalVisible(true)
        navigation.replace('Complete_Profile', { e: email })
    }
    const openmodel1 = async () => {
        setModalVisible1(true)
    }

    const [l, setl] = useState();

    const alll = async () => {
        try {
            const response = await fetch(global.url + "policy/GetLicence.php")
            const json = await response.json();
            setl(json.licence.agreement);            //json.id to sub ides ayan ge

            // console.log(json.result[0]._id)

        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
    useEffect(() => {
        alll()
    }, []);

    const [points, setpoints] = useState([
        {
            id: 1,
            head: 'The *sure-fire* secret to making your Profile stand out like crazy while having more fun than you ever thought possible!',
        },
        {
            id: 2,
            head: 'Get a lot of Visibility on the Upwork/Fiverr rankings which means clients will come to you instead of the other way around.',
        },
        {
            id: 3,
            head: 'emplate of a Winning Proposal that yo  can use right away and start getting ne clients FAST.',
        },
        {
            id: 4,
            head: 'ow to message a possible n w client so you c n set up an interview ASAP.'
        },
        {
            id: 5,
            head: 'H w to close clients on 20-mi ute interv ews so you don’t waste your time.'
        },
        {
            id: 6,
            head: 'How to justif the lack of Reviews so you can charge more.'
        },
        {
            id: 7,
            head: 'The “right” way of using your Rate to get clie ts paying more than your  riginal proposal.'
        },
        {
            id: 8,
            head: 'How to  uickly identify the type of clients yo want to avoid working wi h, so that you never have a bad experience again.'
        },
        {
            id: 9,
            head: 'The #1 counter-intuitive hack to make potential cli nts see you as he ultimate expert in y ur field.'
        },
        {
            id: 10,
            head: 'How having one simple “magic” trait virtually guarantees your success and lets you charge big bucks.'
        },
        {
            id: 11,
            head: 'and Much, Much More!'
        },
    ])
    const [points1, setpoints1] = useState([
        {
            id: 1,
            head: 'Designer & web Designer',
        },
        {
            id: 2,
            head: 'Copywriting',
        },
        {
            id: 3,
            head: 'Web Development & IT ',
        },
        {
            id: 4,
            head: 'Social Media Manager'
        },
        {
            id: 5,
            head: 'Marketing & Digital Marketing '
        },
        {
            id: 6,
            head: 'Virtual Assistant'
        },
        {
            id: 7,
            head: 'Translation & Proofreading'
        },
        {
            id: 8,
            head: 'Language Teaching '
        },
        {
            id: 9,
            head: 'Transcription'
        },
        {
            id: 10,
            head: 'Data Entry'
        },
        {
            id: 11,
            head: 'Video Editor'
        },
    ])
    const [points2, setpoints2] = useState([
        {
            id: 1,
            head: 'What Makes Your Profile Stand Out',
        },
        {
            id: 2,
            head: 'Template Of A Winning Proposal That Get Clients Hunger',
        },
        {
            id: 3,
            head: 'What To Do When A Potential Client Sends The First Message Or Email',
        },
        {
            id: 4,
            head: 'How To Close Clients In Interviews No Longer Than 30 Minutes'
        },
        {
            id: 5,
            head: 'BONUS: Profile Optimization Worksheet'
        },
        {
            id: 6,
            head: 'BONUS: Real Case Studies To Replicate'
        },
        {
            id: 7,
            head: 'BONUS: 5 Minute Daily Workflow To Get New Clients'
        },
        {
            id: 8,
            head: 'BONUS: Script For A Killer Video Intro'
        }
    ])


    const [points3, setpoints3] = useState([
        {
            id: 1,
            q: 'Is the Course live or recorded?',
            a: 'The Course is recorded so you can do it at your own pace and come back to it anytime. After paying the one-time fee you get lifetime access to all Course materials.'
        },
        {
            id: 2,
            q: 'What validations does the course have?',
            a: 'The course was created out of years of experience through a successful Digital journey. The Course was complemented with knowledge from current industry leaders, which provide an insight into the key elements required to succeed in the Digital World.'
        },
        {
            id: 3,
            q: 'Who is this Course for?',
            a: 'The course was created for absolutely anyone who desires to start a successful Digital Career without the challenges, waste of money and time of a self-discovery journey. We believe that freedom of place, time and money should be available to anyone, even if the decision is to stick with the 9 to 5 full of dreams.'
        },
        {
            id: 4,
            q: 'Do you promise any results?',
            a: 'Yes, we promise that if you understand your Digital options and the opportunities that are out there waiting for you, you WILL succeed. But we cannot do the work for you; we can only show you the way. You have to take action to see improvements. In order to get the desired results, you need to put into practice what you have learned. What we promise is to provide you with proven tools and knowledge to increase your self-knowledge and work towards a more balanced life, but it depends on you to apply this knowledge and take your first steps into the Digital World of opportunities.'
        },
        {
            id: 5,
            q: 'How much does it cost?',
            a: 'The Course is recorded so you can do it at your own pace and come back to it anytime. After paying the one-time fee you get lifetime access to all Course materials.'
        },
        {
            id: 6,
            q: 'Is the Course live or recorded?',
            a: 'The course regular price is $532 which includes lifetime access to all program materials. Occasionally we can do limited discounts for special occasions. Currently, we are accepting payments with credit cards via Stripe.'
        },

    ])
    // ----------------------paypal------------------------------
    const [loading, setloading] = useState(false)
    const [paypalurl, setpaypalurl] = useState(null)
    const [accesstoken, setaccesstoken] = useState(null)
    const onPressPaypal = async () => {
        setloading(true)
        try {
            const token = await paypalApi.generateToken()
            // console.log("res++++++", token)
            const res = await paypalApi.createOrder(token)
            setaccesstoken(token)
            console.log("res++++++", res)

            if (!!res?.links) {
                const findUrl = res.links.find(data => data?.rel == "approve")
                //    console.log("findUrl--------------",findUrl)
                setpaypalurl(findUrl.href)
            }


            setloading(false)
        } catch (error) {
            console.log("error", error)
            setloading(true)
        }
    }


    // console.log('paypalurl--', paypalurl)

    const onurlchange = (webviewState) => {
        const { url } = webviewState;
        console.log('webviewState--' + url)
        if (webviewState.url.includes('https://example.com/cancel')) {
            clearpaypalstate()
            return;
        }
        if (webviewState.url.includes('https://example.com/return')) {
            const urlValues = queryString.parseUrl(webviewState.url)
            console.log('my urls value  ', urlValues)
            const { token } = urlValues.query
            if (!!token) {
                paymentSucess(token)
            }
        }
    }

    const paymentSucess = async (id) => {
        try {
            const res = paypalApi.capturePayment(id, accesstoken)
            console.log(' capturePayment res+++++++++', res)
            // alert("payment sucessfull")
            openmodel()
            clearpaypalstate()
        } catch (error) {
            console.log('error raised in payment capture', error)
        }
    }

    const clearpaypalstate = () => {
        setpaypalurl(null)
        setaccesstoken(null)
    }
    return (
            <ScrollView style={styles.myBackground}>

                <View style={{ alignSelf: 'center', marginVertical: '10%' }}>
                    <Image source={appImages.logo} style={styles.logo} resizeMode={'contain'} />
                </View>
                <View style={styles.v1}>
                    <View>
                        <Text style={styles.txt1}>
                            The Secret Method To Get As Many Clients As You Can Possibly Handle Without Facing Instability Ever Again
                        </Text>
                        <View style={styles.uv}>
                            <YoutubePlayer
                                height={200}
                                // width={360}
                                play={playing}
                                // mute={isMute}
                                videoId={'IpoPqNfy7JU'}
                                onChangeState={onStateChange}
                            />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={styles.txt20b}>
                            Ever wondered how so many people are killing it on Upwork and Fiverr?
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={appImages.a2} style={styles.img1} />
                            <Image source={appImages.a1} style={styles.img1} />
                        </View>
                        <Text style={styles.txt17b}>
                            Designers, copywriters, social media managers, web developers, between many others!
                        </Text>
                    </View>

                    <View style={{ marginHorizontal: '5%', backgroundColor: 'lightgray' }}>
                        <Text style={styles.txt15n}>
                            Only profile with all the right elements to climb the Upwork and Fiverr rankings will appear in front of Clients eyes.
                        </Text>
                        <Text style={styles.txt17b}>
                            This means that over time, you will find it harder and harder to get new clients...
                        </Text>
                        <Text style={styles.txt15n}>
                            If you don't take action, the day will come when you will never close a new client again.
                        </Text>
                    </View>


                    <View style={styles.v7}>
                        <Text style={styles.txt17}>
                            Luckily for you, there’s now a solution:
                        </Text>
                        <Text style={styles.txt20}>
                            FREELANCE MASTERY</Text>
                        <Text style={[styles.txt20, { fontWeight: 'normal' }]}>
                            COURSE</Text>
                        <Text style={styles.green}>
                            The Bulletproof Roadmap for Client Acquisition and Economical Stability
                        </Text>
                        <Image source={appImages.a3} style={styles.img} resizeMode='stretch' />

                    </View>

                    <View style={styles.v4}>
                        <Text style={styles.txt20b}>
                            Some Of The Counter-intuitive Secrets, Tips & Techniques This Course Will Teach You To Get As Many Clients As You Want (Regardless Of Hourly Rate)
                        </Text>
                        <FlatList
                            data={points}
                            // ItemSeparatorComponent={Divider}
                            renderItem={({ item, index }) => {
                                return <View style={styles.v5}>
                                    <MaterialIcons name={'check'} color={'#14A800'} size={24} />
                                    <Text style={styles.txt}>
                                        {item.head}
                                    </Text>
                                </View>
                            }}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={styles.v6}>
                        <Text style={styles.txt20}>
                            You Need Proven Experts To Guide You Straight Through The Process…
                        </Text>
                        <Text style={styles.txt20}>
                            With No Bull
                        </Text>



                        <View style={[styles.v5, { justifyContent: 'space-between' }]}>
                            <Image source={appImages.person} style={{ width: 100, height: 110 }} resizeMode='stretch' />
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={[{ width: 180, color: 'black', fontWeight: 'bold' }]}>
                                    Tony Del Toro as helped th usands of freelancers launch, optimize, improve and scale their online profiles.
                                </Text>
                                <Text style={[{ width: 180, color: 'black', fontWeight: 'bold', marginTop: '2%' }]}>
                                    Tony is a 12-year sales consultant whose reputation for closing clients is legendary!
                                </Text>
                            </View>
                        </View>


                        <View style={styles.v5}>
                            <MaterialIcons name={'navigate-next'} color={'#14A800'} size={24} />
                            <Text style={styles.txt}>
                                Freelancers have paid him as much as $700 an hour to consult with them about their own Profiles and businesses.
                            </Text>

                        </View>
                        <View style={styles.v5}>
                            <MaterialIcons name={'navigate-next'} color={'#14A800'} size={24} />
                            <Text style={styles.txt}>
                                Just one of Tony's clients pays him $7,500 per month.
                            </Text>

                        </View>
                    </View>


                    <View style={styles.v3}>
                        <Text style={styles.txt20}>
                            Don't Just Take Our Word For It.
                        </Text>
                        <Text style={styles.txt20}>
                            Success Stories After Fresslance Mastery
                        </Text>
                        <Text style={{ marginTop: '2%', Color: 'black' }}>
                            Hear from people below who have used our proven ways to get consistent clients, build their online business and much more!
                        </Text>
                    </View>

                    <View style={styles.v3}>
                        <Image source={appImages.a4} style={styles.img2} resizeMode='stretch' />
                        <Text style={[styles.txt15n, { fontWeight: 'bold' }]}>
                            Mikael was desperate when he contacted us for the first time. After loosing everything, he had to start as a Freelance Maketeer with 0 reviews!
                        </Text>


                        <Image source={appImages.a5} style={styles.img2} resizeMode='stretch' />
                        <Text style={[styles.txt15n, { fontWeight: 'bold' }]}>
                            Alex is the living proof of how anyone can explode with the right structure.
                        </Text>

                        <Image source={appImages.a6} style={styles.img2} resizeMode='stretch' />
                        <Text style={[styles.txt15n, { fontWeight: 'bold' }]}>
                            When we asked Joana for a testimonial she send us this print back :)
                        </Text>


                        <Image source={appImages.a7} style={styles.img2} resizeMode='stretch' />
                        <Text style={[styles.txt15n, { fontWeight: 'bold' }]}>
                            Michael found her way to start closing retainer jobs that made her life much more predictable and stable
                        </Text>


                        <Image source={appImages.a8} style={styles.img2} resizeMode='stretch' />
                        <Text style={[styles.txt15n, { fontWeight: 'bold' }]}>
                            Another Stellar Freelance that was able to 3x her hourly rate.
                        </Text>
                    </View>

                    <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
                            Results were impressive in all these areas:
                        </Text>
                        <FlatList
                            data={points1}
                            // ItemSeparatorComponent={Divider}
                            renderItem={({ item, index }) => {
                                return <View style={styles.v5}>
                                    <MaterialIcons name={'check'} color={'#14A800'} size={24} />
                                    <Text style={styles.txt}>
                                        {item.head}
                                    </Text>
                                </View>
                            }}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={styles.v3}>
                        <Text style={[styles.txt20, { borderBottomWidth: 1, borderBottomColor: 'black' }]}>
                            THATS'S NOT ALL!
                        </Text>
                        <Text style={[styles.txt17, { fontWeight: 'normal', marginVertical: '1%' }]}>
                            We want to do whatever it took to
                        </Text>
                        <Text style={styles.txt17}>
                            Push You Over The Edge And Sign Up Today!
                        </Text>

                        <Image source={appImages.a3} style={styles.img} resizeMode='stretch' />



                        <Text style={{ color: 'black', textAlign: 'center' }}>
                            Listen, we know these teachings can transform any life overnight. That's why we're not holding back and throwing in MORE high-level material... </Text>
                    </View>


                    <View style={{ marginHorizontal: '5%', marginTop: '5%', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#14A800', width: '100%' }}>
                            <Text style={[styles.txt17, { color: 'white' }]}>
                                Here A re The BONUS FREE GIFTS When You
                            </Text>
                            <Text style={[styles.txt17, { color: 'white' }]}>
                                Sign Up Today:
                            </Text>
                        </View>
                    </View>

                    {/* -----------------------------------bonus 1--------------------------------------- */}
                    <View style={styles.bv1}>

                        <Text style={styles.bhead}>
                            Bonus #1
                        </Text>

                        <Text style={styles.bhead1}>
                            ($19 Value)
                        </Text>

                        <Text style={styles.txt20}>
                            Profile optimization Worksheet
                        </Text>

                        <View style={styles.v5}>
                            <Image source={appImages.a9} style={styles.img1} resizeMode='stretch' />
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={styles.txtb}>
                                    You will get exclusive access to the PDF version where we reveal the checklist with all the mandatory elements your Profile need to have.
                                </Text>
                                <Text style={styles.txtb1}>
                                    Use this to upgrade your Upwork Profile to Superstar level!
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* ----------------------bonus 2-------------------------------- */}
                    <View style={styles.bv1}>

                        <Text style={styles.bhead}>
                            Bonus #2
                        </Text>

                        <Text style={styles.bhead1}>
                            ($99 Value)
                        </Text>

                        <Text style={styles.txt20}>
                            Real Case Studies So Yu Can Replicate Their Success
                        </Text>

                        <View style={styles.v5}>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={styles.txtb}>
                                    Get access to the top Stellar Profile that make over $100k/year.
                                </Text>
                                <Text style={styles.txtb1}>
                                    You'll be avle to analyze and replicate the what Stellar Freelanceuse as their Profile.
                                </Text>
                                <Text style={styles.txtb1}>
                                    Not only tha but we also guid you to Na1 Freelance Platform that has the best opportunities.
                                </Text>
                            </View>
                            <Image source={appImages.a10} style={styles.img1} resizeMode='stretch' />
                        </View>

                    </View>


                    {/* ----------------------bonus 3-------------------------------- */}
                    <View style={styles.bv1}>

                        <Text style={styles.bhead}>
                            Bonus #3
                        </Text>

                        <Text style={styles.bhead1}>
                            ($97 Value)
                        </Text>

                        <Text style={[styles.txt20, { width: '100%' }]}>
                            5 Minute Daily Workflow To Get New Clients Without Wasting Countless Hours
                        </Text>

                        <View style={styles.v5}>
                            <Image source={appImages.a11} style={styles.img1} resizeMode='stretch' />

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={styles.txtb}>
                                    Follow our 3x3 method to apply to jobs like an absolute Stellar Freelancer!
                                </Text>
                                <Text style={styles.txtb1}>
                                    When done properly, you will only need to dedicate 5 minutes per day to make sure you wipe all the opportunities.
                                </Text>
                                <Text style={styles.txtb1}>
                                    That is exactly what we share on this bonus.
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* ----------------------bonus 4-------------------------------- */}
                    <View style={styles.bv1}>

                        <Text style={styles.bhead}>
                            Bonus #4
                        </Text>

                        <Text style={styles.bhead1}>
                            ($197 Value)
                        </Text>

                        <Text style={[styles.txt20, { width: '100%' }]}>
                            Script for A Killer Introductory Video That Will Make Client Want To Hire You Right Away
                        </Text>

                        <View style={styles.v5}>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={styles.txtb}>
                                    We honestly wanted to give our step-by-step method for you to be able to start closing new clients.
                                </Text>
                                <Text style={styles.txtb1}>
                                    Ans this is the final step...
                                </Text>
                                <Text style={styles.txtb1}>
                                    How to make a short intro video that will warm up ypur future clients?
                                </Text>
                                <Text style={styles.txtb1}>
                                    The answer to that question is on this crazy Bonus!
                                </Text>
                            </View>
                            <Image source={appImages.a12} style={styles.img1} resizeMode='stretch' />

                        </View>

                    </View>

                    {/* ----------------------------------------------------------------------------------- */}
                    <View style={{ marginHorizontal: '5%', marginTop: '5%', alignItems: 'center' }}>

                        <Text style={styles.txt20b}>
                            So, What Are You Waiting For?
                        </Text>
                        <Image source={appImages.a3} style={styles.img} resizeMode='stretch' />


                        <Text style={[styles.txt15n, { marginBottom: '0%', fontWeight: 'bold' }]}>
                            We have put together EVERYTHING you need to start a Stellar Freelance business!
                        </Text>
                        <Text style={[styles.txt15n, { fontWeight: 'bold', marginTop: '0%' }]}>
                            All you have to do is thake action!
                        </Text>
                    </View>



                    <View style={{ marginHorizontal: '5%', marginTop: '5%', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 17 }}>
                            TOTAL VALUE :<Text style={{ textDecorationLine: 'line-through' }}>$532</Text>
                        </Text>
                        <Text style={{ color: '#14A800', fontSize: 20, fontWeight: 'bold' }}>
                            GET TODAY $27
                        </Text>
                    </View>



                    <View style={{ marginHorizontal: '5%', marginTop: '5%', borderWidth: 1, borderColor: 'lightgray' }}>
                        <View style={{ alignItems: 'center', marginBottom: '5%' }}>
                            <Text style={styles.txt20b}>
                                Our Rock Solid 100% Money Back Guarantee
                            </Text>

                            <Image source={appImages.a100} style={styles.img3} resizeMode='stretch' />


                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                We have such confidence in the Course we are offering, that when you join us, you can invest with trust because you’ll always be covered by our money back guarantee.
                            </Text>


                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                In the extremely unlikely event where you watch all the classes, apply all the learnings and our proven guide cannot help you take your first steps successfully, we will refund every cent you have invested with us - no questions asked.
                            </Text>

                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                Imagine if you used just ONE piece of advice from Mastery Upwork... and you begin to see positive results in your digital career almost instantly... Freeing you from the instability you suffered until now!
                            </Text>


                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                How much would you pay for the ONE piece of advice?
                            </Text>

                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                $10,000...? $20,000...?
                            </Text>


                            <Text style={{ color: 'black', textAlign: 'center', marginTop: '3%' }}>
                                Well, today, all you have to do is take action!
                            </Text>
                        </View>
                    </View>


                    <View style={{ marginHorizontal: '5%', marginTop: '5%', alignItems: 'center' }}>

                        <Image source={appImages.a11} style={styles.img} resizeMode='stretch' />
                        <Text style={{ color: 'blue', fontSize: 20 }}>
                            What You'll Get Today
                        </Text>
                        <FlatList
                            data={points2}
                            // ItemSeparatorComponent={Divider}
                            renderItem={({ item, index }) => {
                                return <View style={styles.v5}>
                                    <MaterialIcons name={'check'} color={'blue'} size={24} />
                                    <Text style={styles.txt}>
                                        {item.head}
                                    </Text>
                                </View>
                            }}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>


                    
                    <View style={{ backgroundColor: 'lightgray', marginHorizontal: '5%', marginVertical: '10%' }}>
                        <Text style={styles.txt20b}>
                            Frequently Asked Questions
                        </Text>
                        <FlatList
                            data={points3}
                            // ItemSeparatorComponent={Divider}
                            renderItem={({ item, index }) => {
                                return <View style={{ marginHorizontal: '2%', marginBottom: '3%' }}>
                                    <View style={styles.v5}>
                                        <MaterialIcons name={'contact-support'} color={'black'} size={20} />
                                        <Text style={styles.txt}>
                                            {item.q}
                                        </Text>
                                    </View>
                                    <Text style={{ color: 'gray' }}>
                                        {item.a}
                                    </Text>
                                </View>
                            }}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>


                    <View style={{ marginHorizontal: '5%' }}>
                        <View style={{ alignSelf: 'center', marginVertical: '10%' }}>
                            <Image source={appImages.logo} style={styles.logo} resizeMode={'contain'} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginBottom: '3%' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Term_condition') }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#14A800' }}>
                                    TERM & CONDITION
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Privacy_Policy') }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#14A800' }}>
                                    PRIVACY POLICY
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'black', textAlign: 'center' }}>
                            We don't create or promote products to get rich overnight. We also cannot promise result, and we warn you that our results or testimonials are not the average results. Therefore, whoever hires our services will not necessarily obtain similar results. You may not get any results, especially id you don't put into practice what you have learned.
                        </Text>
                        <Text style={{ color: 'black', textAlign: 'center', marginTop: '2%' }}>
                            This site is not a part of the Facebook website or Meta Inc.
                            Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of Meta, Inc
                        </Text>
                    </View>


                </View>

            </ScrollView >
      
    )
}
export default App;