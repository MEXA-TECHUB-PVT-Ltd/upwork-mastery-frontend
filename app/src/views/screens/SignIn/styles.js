import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
import {
    Dimensions,
} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const STYLES = StyleSheet.create({

    myBackground: {
        flex: 1,
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
        position: 'absolute',
        bottom: '5%',
        marginHorizontal: '5%'
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#14A800',
        borderRadius: 25,
        padding: '4.5%',
        width: 320,
        justifyContent: 'center'
    },

    img: {
        height: 53,
        width: 53,
        borderRadius: 50,
    },
    lastview: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '5%',
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

})

export default STYLES; 