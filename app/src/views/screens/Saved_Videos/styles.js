import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({

    myBackground: {
        flex: 1,
    },
    myBox1: {
        marginHorizontal: '5%',
        marginVertical: '4%',
    },
    myBox: {
        backgroundColor: 'gray'
    },
    image: {
        width: 90,
        height: 120,
        borderRadius: 10,
        marginLeft: '10%',
        marginTop: '10%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '20%',
        marginVertical: '5%'
    },
    txt17: {
        fontSize: 17
    },
    txt14: {
        fontSize: 15,
        color: '#14A800'
    },
    txt12: {
        fontSize: 11,
        color: '#000000',
        marginVertical: '2%'
    },
    txt11: {
        fontSize: 11,
        color: 'gray',

    },
    rowBack: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        backgroundColor: "#fff",

    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 12,
    },
    btn: {
        position: 'absolute',
        marginLeft: '90%',
        marginTop: '5%'
    },
    v2:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        width: '100%',
        height: 132,
        borderRadius: 10,
        marginVertical: '3%',
        justifyContent: 'space-between'
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
        width: 270, height: 270,
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


    buttonmodal: {
        width: 180,
        height: 40,
        backgroundColor: '#233973',
        marginTop: '15%',
        borderRadius: 15,
        // textAlign:'center',
        elevation: 2,
    },
    textStyle: {
        // fontSize:15,
        textAlign: "center",
        color: 'black',
        marginTop: '8%'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modelimg: {
        width: 140, height: 100
    },
    v1: { marginTop: 25, width: '60%', marginRight: '10%', marginLeft: '3%' }
})

export default STYLES; 