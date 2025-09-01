import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { EmailIcon, OtpVerificationScreenIcon, } from '../../../assets/icons'
import Button from '../../components/Button'

const OtpVerificationScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        } else if (text === '' && index > 0) {
            inputs.current[index - 1].focus();
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod....</Text>
            <OtpVerificationScreenIcon style={styles.icon} />
            <View style={styles.otpinputcontainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpinputfield}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        ref={(el) => (inputs.current[index] = el)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>
            <View style={styles.resendotpcontainer}>
                <Text style={{ color: 'white' }}>Don't receive a code?</Text>
                <Pressable style={styles.resendotpbutton} ><Text style={styles.resendotpbuttontext}>Resend OTP</Text></Pressable>
            </View>
            <Button title="Continue" onPress={() => { navigation.navigate('PasswordResetScreen') }} style={styles.button} />
        </View>
    )
}

export default OtpVerificationScreen

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
    otpinputcontainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 18,
        marginHorizontal: 'auto'
    },
    otpinputfield: {
        width: 55,
        height: 55,
        backgroundColor: '#202125',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        color: 'white',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    resendotpcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 60,
    },
    resendotpbutton: {
        marginLeft: 2,
    },
    resendotpbuttontext: {
        color: '#FE632B',
        fontSize: 14,
        fontWeight: 'semi-bold',
        fontFamily: 'Urbanist',
    }

})