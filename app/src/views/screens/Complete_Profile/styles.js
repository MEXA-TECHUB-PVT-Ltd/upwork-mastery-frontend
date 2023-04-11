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
    txt: {
        marginLeft: 8,
        color: '#969AA8'
    },
    op: {
        alignItems: "center",
        marginVertical: '4%'
    },
    btnv: {
        marginTop: '98%',
        marginBottom: '5%',
        marginHorizontal: '5%'
    },
    btn1: {
        backgroundColor: '#14A800',
        borderRadius: 25,
        height: 55,
        justifyContent: 'center'
    },
    txt1: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 17
    },

    // ------------------------------------------------------------
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
        padding: '4%',
        elevation: 2,
        width: 230,
        marginTop: '13%',
        backgroundColor: '#14A800',
    },

    textStyle: {
        fontSize: 21,
        textAlign: "center",
        color: '#14A800', margin: 5
    },
    textStyle1: {
        fontSize: 18,
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
    icon: {
        marginHorizontal: '3%', alignSelf: 'center'
    },
    // ----------------recomendation Model----------------------
    // ----------------------------model styleing licence----------------------
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    modalView1: {
        // margin: 10,
        width: '80%',
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5
    },
    model1: {

        width: 100,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: -50,
        elevation: 5
    },
    button1: {
        borderRadius: 25,
        padding: 10,
        elevation: 2,
        marginVertical: 15,
        width: 230,
        marginTop: '5%',
        backgroundColor: '#14A800',
    },

    textStyle1: {
        fontSize: 17,
        textAlign: "center",
        color: '#14A800',
    },

    modalText1: {
        marginBottom: 10,
        textAlign: "center"
    },


    txt5: {
        color: '#333333',
        fontSize: 18,
        marginTop: '3%'
    },
})

export default STYLES; 