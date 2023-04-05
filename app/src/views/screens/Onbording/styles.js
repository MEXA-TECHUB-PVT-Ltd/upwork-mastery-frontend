import { StyleSheet } from 'react-native'


const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: '#ffff',

    },
    top: {
        position: 'absolute'
    },
    txtb: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500'
    },
    txtg: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    bigview: {
        marginTop: '5%',

    },
    header: {
        color: '#242424',
        fontSize: 24,
        marginRight: '20%',
        fontWeight: 'bold'
    },
    down: {
        color: '#242424',
        fontSize: 12
    },
    choose:
    {
        backgroundColor: '#ACDDA6',
        width: 110, height: 35,
        borderRadius: 25,
        justifyContent: 'center',
        marginHorizontal: '5%',
        marginTop: '7%',
        marginBottom: '3%'
    },
    choose1: {
        textAlign: 'center',
        color: '#14A800'
    },
    txt1: {
        fontSize: 24,
        color: '#242424',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txt2: {
        fontSize: 14,
        marginTop: '5%',
        color: '#242424',
        textAlign: 'center'
    },
    vbtnlast: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 5
    },
    btnlast: {
        backgroundColor: '#14A800',
        width: 250, height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        marginVertical: '5%'
    },
    txtlast: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center'
    },
    v1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '15%',
        marginTop: '5%',
        marginBottom: '7%'
    },
    v2: {
        marginTop: 5,
        position: 'absolute',
        marginHorizontal: '5%',
        width: '65%',
        // backgroundColor: 'pink'
    },

    txt3: {
        fontSize: 18,
        color: '#242424',
        fontWeight: 'bold'
    },
    txt4: {
        fontSize: 12,
        color: '#242424',
        marginRight: '12%',
        marginTop: '3%'
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
        // margin: 10,
        width: '80%', height: 230,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
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
        padding: 10,
        elevation: 2,
        marginTop: 10,
        width: 230,
        marginTop: '13%',
        backgroundColor: '#14A800',
    },

    textStyle: {
        fontSize: 17,
        textAlign: "center",
        color: '#14A800',
    },
    textStyle1: {
        fontSize: 23,
        textAlign: "center",
        color: '#14A800',
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
    // ------------------------promo code styling-------------------------------
    root: { flex: 1, marginTop: '0%' },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 10 },
    cell: {
        width: 40,
        height: 46,
        lineHeight: 38,
        fontSize: 24,
        backgroundColor: 'white',
        borderColor: '#D1D1D1',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        margin: 5,
        paddingTop: 5
    },
    focusCell: {
        borderColor: '#D1D1D1',
    },

    centeredView2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    modalView2: {
        // margin: 10,
        width: '90%', height: 240,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        elevation: 5
    },
    model2: {
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
})

export default STYLES; 