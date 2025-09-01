import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { EmailIcon, HidePasswordIcon, LockIcon, PasswordResetScreenIcon } from '../../../assets/icons'
import Button from '../../components/Button'

const PasswordResetScreen = ({ navigation }) => {

    const [secure, setSecure] = useState(true)
    const [confirmSecure, setConfirmSecure] = useState(true)

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Text style={styles.title}>Password Reset </Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod....</Text>
            <PasswordResetScreenIcon style={styles.icon} />
            <View style={styles.inputcontainer}>
                <LockIcon style={styles.inputicon} />
                <TextInput style={styles.input} placeholder="Enter your Password" placeholderTextColor="#C3C3C3" secureTextEntry={secure} />
                <HidePasswordIcon style={styles.hideicon} onPress={() => setSecure(!secure)} />
            </View>
            <View style={[styles.inputcontainer, { marginBottom: 33 }]}>
                <LockIcon style={styles.inputicon} />
                <TextInput style={styles.input} placeholder="Confirm your Password" placeholderTextColor="#C3C3C3" secureTextEntry={confirmSecure} />
                <HidePasswordIcon style={styles.hideicon} onPress={() => setConfirmSecure(!confirmSecure)} />
            </View>
            <Button title="Continue " onPress={() => { navigation.navigate('SuccessfullyResetScreen') }} style={styles.button} />
        </View>
    )
}

export default PasswordResetScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Urbanist',
        paddingTop: 55,
    },
    subtitle: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'medium',
        fontFamily: 'Urbanist',
        paddingTop: 6,
    },
    icon: {
        marginHorizontal: 'auto',
        marginTop: 32,
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#202125',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingStart: 53,
        marginTop: 20,
        color: 'white',
        fontFamily: 'Urbanist',
    },
    inputcontainer: {
        position: 'relative',
    },
    inputicon: {
        position: 'absolute',
        zIndex: 1,
        left: 20,
        top: 40,
    },
    hideicon: {
        position: 'absolute',
        zIndex: 1,
        right: 25,
        top: 42,
        padding: 10,
    },
})