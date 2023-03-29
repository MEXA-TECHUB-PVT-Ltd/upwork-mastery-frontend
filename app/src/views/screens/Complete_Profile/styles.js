import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: 'white',

    },
    inputstyle: {
        marginHorizontal: '5%',
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D1D1D1'
    },

    btn: {
        marginHorizontal: '5%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#D1D1D1',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        height: 55
    },
    arrowdown: {
        marginRight: 10,

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
        width: '80%', height: 250,
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
    selectpaymentView:{
// backgroundColor:'#14A800',

    },
    selectpayment:{
        color:'#14A800',
        fontSize:20
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        marginTop: 10,
        width: 220,
        backgroundColor: COLORS.orange,
    },
    textStyle: {
        fontSize: 15,
        textAlign: "center",
        color: '#fff', margin: 5
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center"
    },
    modelimg: {
        width: 80, height: 80, marginTop: 10
    },
    navigate_next: {
        right: 150,
        top: 10
    }
})

export default STYLES; 