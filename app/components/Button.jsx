import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({ title, onPress }) => {
    return (
        <Pressable style={styles.loginbutton} onPress={onPress}>
            <Text style={styles.loginbuttontext}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    loginbutton: {
        backgroundColor: '#FE632B',
        borderRadius: 10,
        paddingVertical: 16,
    },
    loginbuttontext: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: 'white',
        textAlign: 'center',
    }
})