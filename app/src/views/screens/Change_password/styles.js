import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

import {
    Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('screen')
const STYLES = StyleSheet.create({

    container: {
        backgroundColor: 'white'
    },

    myBox: {
        marginTop: 10,
        marginVertical: 20,
        height: 45,
        // backgroundColor:'pink'
        //padding:20
    },
    bigview: {
        marginTop: '10%',
        marginHorizontal: '5%'
    },
    btn: {
        alignItems: 'center',
        marginTop: '50%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        height: 58,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: COLORS.orange,
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
    button1: {
        alignItems: 'center',
        marginTop: '90%',       //uper sa margen
        marginBottom: '5%',
        justifyContent: "center",  // for middle writting
        height: 58,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginHorizontal: '5%'
    },
    // ----------------------------model styleing----------------------
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    modalView: {
        marginHorizontal: '5%',
        width: '85%', height: 230,
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
    model: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: -50,
        elevation: 5
    },
    button: {
        borderRadius: 25,
        padding: 3,
        elevation: 2,
        marginTop: 10,
        width: 230,
        marginTop: '13%',
        backgroundColor: '#14A800',
    },

    textStyle: {
        fontSize: 23,
        textAlign: "center",
        color: '#14A800', margin: 5
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center"
    },
    modelimg: {
        width: 80,
        height: 80,
        marginTop: 10
    },
    navigate_next: {
        right: 150,
        top: 10
    },
    v3: {
        marginTop: '15%',
        alignItems: "center"
    },
    txt5: {
        color: '#333333',
        fontSize: 18,
        marginTop: '3%'
    },
})

export default STYLES; 