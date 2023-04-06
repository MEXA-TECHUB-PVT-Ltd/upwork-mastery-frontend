import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';

const STYLES = StyleSheet.create({

    myBackground: {
        flex: 1,
    },
    v1: {
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        width: 280,
        height: 110,
        borderRadius: 10,
        marginTop: '20%',
        alignItems: 'center'
    },
    v2: {
        marginTop: '15%',
        alignItems: 'center'
    },
    v3: {
        position: 'absolute',
        backgroundColor: '#14A800',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    v4: {
        marginHorizontal: '5%',
        marginBottom: '5%'
    },
    v5: {
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        width: 280,
        height: 60,
        borderRadius: 10,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    v6: {
        flexDirection: 'row',
        marginLeft: '5%',
        justifyContent: 'center'
    },
    txt1: {
        fontSize: 18,
        color: '#242424'
    },
    txt2: {
        fontSize: 14,
        color: '#242424',
        marginTop: '1%'
    },
    txt3: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    },
    txt4: {
        marginLeft: '10%',
        alignSelf: 'center',
        color:'#242424',
        fontSize:15
    },
    m1: {
        alignSelf: 'center'
    },
    m2: {
        alignSelf: 'center',
        marginRight: '5%'
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
        // margin: 20,
        width: '83%', height: 220,
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
    main:{
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
        padding: 10,
    },

    buttonClose: {
        // marginTop:10,
        width: 110,
        height: 50,
        // backgroundColor: COLORS.orange,
        borderWidth: 1,
        borderColor: '#14A800',
        margin: 10
    },
    button1: {
        borderRadius: 25,
        padding: 10,
        elevation: 2,
    },

    buttonClose1: {
        // marginTop:10,
        width: 110,
        height: 50,
        backgroundColor: '#14A800',
        margin: 10
    },
    textStyle: {
        fontSize: 17,
        textAlign: "center",
        color: '#040404', margin: 5
    },
    textStyle1: {
        fontSize: 16,
        textAlign: "center",
        color: '#fff', margin: 5
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center"
    },
    modelimg: {
        width: 80,
        height: 80,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },

})

export default STYLES; 