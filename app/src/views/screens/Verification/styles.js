import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({
    myBackground: {
        backgroundColor: 'white'
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
        height: 45,
        alignItems: 'center'
    },
    btn: {
        alignItems: 'center',
        marginTop: '95%',       //uper sa margen
        justifyContent: "center",  // for middle writting
        marginHorizontal: '5%',
        height: 52,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: '#14A800',
        marginBottom: '5%'
    },

    // ------------------------verification styling-------------------------------
    root: { flex: 1,marginTop:'5%'},
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 10 },
    cell: {
        width: 50,
        height: 50,
        lineHeight: 38,
        fontSize: 24,
        backgroundColor: 'white',
        borderColor:'#D1D1D1',
        borderWidth:1,
        borderRadius: 5,
        textAlign: 'center',
        margin: 20,
        paddingTop: 5
    },
    focusCell: {
        borderColor: '#D1D1D1',
    },
    navigate_next: {
        //    backgroundColor:'pink',
        width: 20,
        marginTop: '5%',
        marginLeft: '5%'
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
        margin: 20,
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
        fontSize: 17,
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