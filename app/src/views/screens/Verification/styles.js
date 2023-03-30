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
        marginTop: '70%',       //uper sa margen
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
    }
})

export default STYLES; 