import { StyleSheet } from 'react-native'


const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: '#ffff',

    },
    v1: {
        backgroundColor: 'white',
        marginBottom: '30%'
    },
    txt1: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginVertical: '5%'
    },
    uv: {
        marginHorizontal: '5%'
    },
    txt20b: { alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: '5%' },
    txt17b: { alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: 'black', marginVertical: '5%' },
    txt15n: { alignSelf: 'center', textAlign: 'center', fontSize: 15, color: 'black', marginVertical: '2%' },
    txt17: { alignSelf: 'center', textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: 'black' },
    txt20: { alignSelf: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' },
    green: { alignSelf: 'center', textAlign: 'center', fontSize: 17, color: '#14A800' },
    img: { width: 300, height: 220 },
    v4: {
        marginHorizontal: '5%',
        marginVertical: '10%',
        alignItems: 'center'
    },
    v5: {
        flexDirection: 'row',
        width: '90%',
        marginVertical: '2%'
    },
    txt: { fontSize: 15, color: 'black', marginLeft: '2%' },
    v6: { backgroundColor: 'lightgray', marginHorizontal: '5%', alignItems: 'center' },
    img1: { width: 150, height: 170 },
    v7: { marginHorizontal: '5%', marginVertical: '2%', alignItems: 'center' },
    img2: { width: 200, height: 200, marginVertical: '2%' },
    bv1:{ marginHorizontal: '5%', marginTop: '5%', alignItems: 'center' },
    bhead:{ fontSize: 20, fontWeight: 'bold', marginTop: '5%', color: '#14A800' },
    bhead1:{ fontSize: 17, fontWeight: 'bold', color: '#14A800' },
    txtb:{ width: 180, color: 'black'},
    txtb1:{ width: 180, color: 'black',marginTop:'3%'},
    img3: { width: 120, height: 100, marginVertical: '2%' },
    
    
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
        width: 250, padding:'3%',
        borderRadius: 25,
        justifyContent: 'center',
        marginVertical: '5%'
    },
    txtlast: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center'
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
    logo: {
        width: 180,
        height: 76,
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
        width: '80%',
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
        marginTop: '5%',
        alignItems: "center"
    },
    v31: {
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
        width: '80%', height: 400,
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
        flexDirection:'row',
        justifyContent:'center',
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