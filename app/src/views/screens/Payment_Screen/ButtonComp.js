import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { } from 'react-native-gesture-handler'

const ButtonComp = ({ text = 'Done', onPress = () => { }, disabled = false }) => {
    return (
        <TouchableOpacity
            // style={styles.container}
            disabled={disabled}
            onPress={onPress}
            style={{
                ...styles.container,
                backgroundColor: !disabled ? '#D7654D' : 'gray'
            }}
        >
            <Text style={styles.textstyle}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 42,
        backgroundColor: '#D7654D',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textstyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
})
export default ButtonComp