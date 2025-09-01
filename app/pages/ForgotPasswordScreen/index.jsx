import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { EmailIcon, ForgotPasswordScreenIcon } from '../../../assets/icons'
import Button from '../../components/Button'


const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Text style={styles.title}>Forgot Password!</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod....</Text>
            <ForgotPasswordScreenIcon style={styles.icon} />
            <View style={styles.inputcontainer}>
                <EmailIcon style={styles.inputicon} />
                <TextInput style={styles.input} placeholder="Enter your Email" placeholderTextColor="#C3C3C3" />
            </View>
            <Button title="Send OTP" onPress={() => { navigation.navigate('OtpVerificationScreen') }} style={styles.button} />
        </View>
    )
}

export default ForgotPasswordScreen

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
        marginBottom: 100
    },
    inputicon: {
        position: 'absolute',
        zIndex: 1,
        left: 20,
        top: 40,
    },
})