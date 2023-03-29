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
        paddingHorizontal: '5%',

    },
    logo: {
        width: 200,
        height: 100,
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
        marginBottom: '10%'
    },
    divider: {
        backgroundColor: '#969AA8',
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
        marginHorizontal: '5%',
        height: 58,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#D1D1D1',
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