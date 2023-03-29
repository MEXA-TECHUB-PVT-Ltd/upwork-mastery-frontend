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
        width: 200,
        height: 150
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
        marginTop: '70%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        marginHorizontal: '5%',
        height: 58,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginBottom: '5%'
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        color:'#242424'
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
})

export default STYLES; 