    import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
    import React, { useState } from 'react'
    import { AuthAppleIcon, AuthfacebookIcon, AuthGoogleIcon, EmailIcon, HidePasswordIcon, LockIcon } from '../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const Login = ({setLogin}) => {

    const navigation = useNavigation()
    const [ secure , setSecure ] = useState(true)

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Please enter your details to Login!</Text>
                <View style={styles.inputcontainer}>
                    <EmailIcon style={styles.inputicon}/>
                    <TextInput style={styles.input} placeholder="Enter your Email" placeholderTextColor="#C3C3C3" />
                </View>
                <View style={styles.inputcontainer}>
                    <LockIcon style={styles.inputicon}/>
                    <TextInput style={styles.input} placeholder="Enter your Password" placeholderTextColor="#C3C3C3" secureTextEntry={secure} />
                    <HidePasswordIcon style={styles.hideicon} onPress={() => setSecure(!secure)} />
                </View>
                <Pressable onPress={() => {navigation.navigate('ForgotPasswordScreen')}}><Text style={styles.forgotpasswordbuttonText}>Forgot Password?</Text></Pressable>
                <Pressable style={styles.loginbutton} onPress={() => {navigation.navigate('SelectGenderScreen')}}><Text style={styles.loginbuttontext} >Login</Text></Pressable>
                <Text style={styles.orContinueWithText}>Or Continue with</Text>
                <View style={styles.socialIconsContainer}>
                    <Pressable style={styles.socialIcon}><AuthGoogleIcon /></Pressable>
                    <Pressable style={styles.socialIcon}><AuthAppleIcon /></Pressable>
                    <Pressable style={styles.socialIcon}><AuthfacebookIcon /></Pressable>
                </View>
            </View>
            <View style={styles.signupcontainer}>
                <Text style={{ color: 'white' }}>Don't have an account?</Text>
                <Pressable style={styles.signupbutton} onPress={()=>setLogin(false)}><Text style={styles.signupbuttontext}>Signup</Text></Pressable>
            </View>
        </View>
    )
}

export default Login

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
    forgotpasswordbuttonText: {
        color: '#FE632B',
        fontSize: 12,
        fontWeight: 'semi-bold',
        fontFamily: 'Urbanist',
        textAlign: 'right',
        marginTop: 10,
    },
    loginbutton: {
        backgroundColor: '#FE632B',
        borderRadius: 10,
        paddingVertical: 16,
        marginTop: 25,
    },
    loginbuttontext: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: 'white',
        textAlign: 'center',
    },
    orContinueWithText: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Urbanist',
        textAlign: 'center',
        fontWeight: 'semi-bold',
        marginTop: 20,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        marginTop: 25,
        gap: 15,
        marginHorizontal: 'auto'
    },
    socialIcon: {
        width: 73,
        height: 49,
        backgroundColor: '#202125',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 30,
    },
    signupbutton: {
        marginLeft: 2,
    },
    signupbuttontext: {
        color: '#FE632B',
        fontSize: 14,
        fontWeight: 'semi-bold',
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
    },
})