import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({
    myBackground: {
        backgroundColor: '#ffff',
        paddingHorizontal: '5%',//is sa cheezan dono sides sa mid ma a jiyan ge
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
        alignItems: 'center'

    },

    view1: {
        marginTop: '5%'
    },
    view11: {
        alignItems: 'center'
    },
    view12: {
        alignItems: 'center'
    },
    f1: {
        color: COLORS.blue,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '700'
    },
    f2: {
        color: COLORS.gray,
        fontSize: 15,
        textAlign: 'center',
    },
    bigview: {
        marginTop: '10%',

    },
    btn: {
        alignItems: 'center',
        marginTop: '50%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        height: 58,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginBottom: '5%'
    },

    inputstyle: {
        justifyContent: 'space-between',
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
    // ----------------------------model styleing----------------------
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    modalView: {
        // margin: 20,
        width: 250, height: 280,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },


    button: {
        width: 220,
        height: 48,
        marginTop: '9%',
        backgroundColor: COLORS.orange,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems: 'center'

    },
    textStyle: {
        fontSize: 15,
        color: '#242424'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modelimg: {
        width: 100, height: 100
    },
    navigate_next: {
        width: 20,
        marginTop: '5%',
    }
})

export default STYLES; 