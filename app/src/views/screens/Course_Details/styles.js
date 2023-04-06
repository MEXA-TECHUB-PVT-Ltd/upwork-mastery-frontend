import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: 'white'
    },
    play: {
        position: 'absolute',
        backgroundColor: '#14A800',
        alignSelf: 'center',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    v1: {
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    v11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '2%'
    },
    txt1: {
        color: '#000000',
        fontSize: 16
    },
    txt2: {
        fontSize: 14,
        color: '#000000',
        marginBottom: '2%'
    },
    txt3: {
        fontSize: 11,
        color: '#000000'
    },
    v2: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        justifyContent: 'space-between',
        marginVertical: '10%'
    },
    btnl: {
        backgroundColor: '#14A800',
        height: 48,
        width: 130,
        borderRadius: 25,
        justifyContent: 'center'
    },
    txtl: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center'
    }
})

export default STYLES; 