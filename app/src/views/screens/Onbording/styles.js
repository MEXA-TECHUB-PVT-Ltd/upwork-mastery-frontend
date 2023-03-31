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
        marginRight: '20%'
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
        textAlign: 'center'
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
        marginHorizontal: '5%'
    },
   
    txt3: {
        fontSize: 18,
        color: '#242424'
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
        margin: 20,
        width: '80%', height: 230,
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