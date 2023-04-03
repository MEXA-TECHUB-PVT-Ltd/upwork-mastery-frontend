import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
import {
    Dimensions,
} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const STYLES = StyleSheet.create({

    myBackground: {
        // flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '7%',

    },
    logo: {
        width: 180,
        height: 76,
    },
    view1: {

    },
    view11: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view12: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bigview: {
        marginTop: '10%'
    },
    buttonview: {
        // marginVertical: '10%',
        // marginBottom: '5%'
    },
    btn: {
        alignItems: 'center',
        marginTop: '5%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        height: 52,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginBottom: '5%'
    },
    divider: {
        backgroundColor: '#EFEFEF',
        height: 1,
        width: '25%',
        alignSelf: 'center',
    },
    imgview: {
    },
    img: {
        height: 53,
        width: 53,
        borderRadius: 50,
    },
    lastview: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '5%',
    },
    inputstyle: {

        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E6E6E6'
    },
    icon: {
        marginHorizontal: '3%', alignSelf: 'center'
    },
    search: {

        alignItems: 'center',
        height: 55,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        justifyContent: 'center',
        marginVertical: '3%'
    },
    googleimg: {
        width: 40, height: 40,
        marginRight: '4%'
    },
})

export default STYLES; 