import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({
    myBackground: {
        backgroundColor: 'white',
    },
    imageView: {
        alignItems: 'center',
        alignSelf: 'center',

    },
    image: {
        width: 180,
        height: 76
    },

    myBox: {
        marginTop: 10,
        marginVertical: 20,
        marginHorizontal: '5%',
        alignContent: 'center',
    },
    button1: {
        alignItems: 'center',
        marginTop: 10,       //uper sa margen
        alignSelf: "center",
        justifyContent: "center",  // for middle writting

        width: 290,
        height: 40,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: COLORS.orange
    },
    btn: {
        alignItems: 'center',
        marginTop: '90%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        marginHorizontal: '5%',
        height: 52,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginBottom: '5%'
    },
    btnv: {
        marginTop: '69%',
        marginBottom: '5%',
        marginHorizontal: '5%'
    },
    btn1: {
        flexDirection: 'row',
        backgroundColor: '#14A800',
        borderRadius: 25,
        padding: '4.5%',
        width: 320,
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        alignSelf: 'center',
        color: '#242424'
    },
    navigate_next: {
        //    backgroundColor:'pink',
        width: 20,
        marginTop: '5%',
        marginLeft: '5%'
    },
    buttonview: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

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
    inputstyle1: {
        marginLeft: '5%',
        color: '#969AA8',
        height: 55,
        width: '80%',
    },
    txt: {
        fontSize: 24,
        alignSelf: 'center',
        color: '#001E00',
        marginBottom: '5%',
        fontWeight: 'bold'
    },
    txtl: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 17
    }
})

export default STYLES; 