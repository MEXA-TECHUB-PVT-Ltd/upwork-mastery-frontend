import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
import {
    Dimensions,
} from 'react-native';
const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: 'white'
    },
    drawericonstyle: {
        marginHorizontal: '3%'
    },
    imagetop: {
        width: 30,
        height: 30,
    },
    textwl: {
        color: 'black',
        fontSize: 15
    },
    divider: {
        backgroundColor: '#fff',
        height: 1,
        width: '100%',
        marginTop: 15
        // alignSelf: 'center',
    },
    btnop: {
        backgroundColor: 'white',
        borderColor: '#fff',
        borderWidth: 1,
        fontSize: 14,
        width: '100%',
        height: 50,
    },
    btnop1: {
        backgroundColor: '#F1F1F1',
        // borderColor: '#383358',
        borderWidth: 1,
        fontSize: 14,
        borderRadius: 10,
    },



    txt1: {
        color: 'pink'
    },
    img: {
        height: 140,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'stretch',
        alignItems: 'flex-end',
    },
    optionsView: {
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 3,
        borderColor: "#E1E1E14F",
        marginHorizontal: '2%',
        marginTop: 10,
        // backgroundColor:'#D2D2D2',
        width: 105,
        height: 200.8,
    },
    v1: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    v2: {
        height: 65,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 0,
        backgroundColor: '#14A800'
    },
    v3: {
        marginTop: '10%',
        marginHorizontal: '5%'
    },
    v4: {
        marginTop: 17,
        flex: 1,
        marginBottom: '5%'
    },
    v5: {
        marginVertical: 5,
        marginHorizontal: '5%'
    },
    txt2: {
        color: 'gray',
        fontSize: 15
    },
    txt3: {
        color: '#171717',
        fontSize: 20,
        fontWeight:'bold'
    },
    txt4: {
        fontSize: 10,
        color: '#828282',
        marginLeft: 2
    },
    input: {
        backgroundColor: '#F1F1F1',
        width: '75%',
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    img: {
        position: 'absolute',
        width: 20,
        height: 20,
        marginLeft: 75
    },

})

export default STYLES; 