import { Pressable, StatusBar, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { BackArrowIcon, HidePasswordIcon, LockIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {

    const navigation = useNavigation()
    const [isChecked, setIsChecked] = useState(false)
    const [secure, setSecure] = useState(true)
    const [confirmSecure, setConfirmSecure] = useState(true)
    const [showModal, setShowModal] = useState(false)

    return (
        <View style={{ position: 'relative', width: '100%', height: '100%' }}>
            {showModal && <View style={styles.logoutmodal}>
                <Pressable style={styles.modalbg} onPress={() => setShowModal(!showModal)}></Pressable>
                <View style={styles.modalbody}>
                    <View style={styles.modalbar}></View>
                    <Text style={styles.modaltextone}>Logout</Text>
                    <Text style={styles.modaltexttwo}>Sure you want to log out?</Text>
                    <Text style={styles.modaltextthree}>You can always sign back in later to resume your fitness journey.</Text>
                    <View style={styles.modalbuttoncontainer}>
                        <Pressable style={styles.modalbuttonone} onPress={() => setShowModal(!showModal)}><Text style={styles.modalbuttontextone}>Cancel</Text></Pressable>
                        <Pressable style={styles.modalbuttontwo} onPress={() => navigation.navigate('AuthScreen')}><Text style={styles.modalbuttontexttwo}>Yes, Logout</Text></Pressable>
                    </View>
                </View>
            </View>}
            <View style={styles.container}>

                <StatusBar backgroundColor={'#181717'} />
                <View>
                    <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                        <BackArrowIcon />
                        <Text style={styles.headertext}>Setting</Text>
                    </Pressable>
                </View>
                <View style={styles.notificationalertcontainer}>
                    <Text style={styles.notificationalerttext}>
                        Notification Alert
                    </Text>
                    <Switch
                        value={isChecked}
                        onValueChange={() => setIsChecked(!isChecked)}
                        thumbColor={'#fff'}
                        trackColor={{ false: '#767577', true: '#FE632B' }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Change Password</Text>
                    <Text style={styles.subtitle}>Old Password</Text>
                    <View style={styles.inputcontainer}>
                        <LockIcon style={styles.inputicon} />
                        <TextInput style={styles.input} placeholder="Enter your Password" placeholderTextColor="#C3C3C3" secureTextEntry={secure} />
                        <HidePasswordIcon style={styles.hideicon} onPress={() => setSecure(!secure)} />
                    </View>
                    <Text style={styles.subtitle}>New Password</Text>
                    <View style={styles.inputcontainer}>
                        <LockIcon style={styles.inputicon} />
                        <TextInput style={styles.input} placeholder="Confirm your Password" placeholderTextColor="#C3C3C3" secureTextEntry={confirmSecure} />
                        <HidePasswordIcon style={styles.hideicon} onPress={() => setConfirmSecure(!confirmSecure)} />
                    </View>
                </View>
                <Pressable style={styles.loginbutton} onPress={() => setShowModal(!showModal)}><Text style={styles.loginbuttontext}>Logout</Text></Pressable>
            </View>
        </View>

    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    headercontent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        marginStart: 15
    },
    notificationalertcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#202125',
        height: 60,
        borderRadius: 10,
        marginTop: 24
    },
    notificationalerttext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Urbanist',
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#202125',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingStart: 53,
        marginTop: 10,
        marginBottom: 16,
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
        top: 28,
    },
    hideicon: {
        position: 'absolute',
        zIndex: 1,
        right: 25,
        top: 30,
        padding: 10,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 600,
        fontFamily: 'Urbanist',
        marginTop: 32,
        marginBottom: 24
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Urbanist',
    },
    loginbutton: {
        backgroundColor: '#FE632B',
        borderRadius: 10,
        paddingVertical: 16,
        marginTop: 'auto',
        marginBottom: 50
    },
    loginbuttontext: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: 'white',
        textAlign: 'center',
    },
    logoutmodal: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20
    },
    modalbg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#0000004b'
    },
    modalbody: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#181717',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: '100%'
    },
    modalbar: {
        width: 40,
        height: 3,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 32,
        marginHorizontal: 'auto'
    },
    modaltextone: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        textAlign: 'center'
    },
    modaltexttwo: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 12
    },
    modaltextthree: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Urbanist',
        textAlign: 'center',
        marginBottom: 31
    },
    modalbuttoncontainer: {
        height: 90,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopColor: '#2F2F2F',
        borderTopWidth: 1
    },
    modalbuttonone: {
        width: '48%',
        height: 51,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    modalbuttontextone: {
        color: '#FE632B',
        fontSize: 18,
        fontWeight: 600,
        fontFamily: 'Urbanist',
    },
    modalbuttontwo: {
        width: '48%',
        height: 51,
        backgroundColor: '#FE632B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    modalbuttontexttwo: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 600,
        fontFamily: 'Urbanist',
    },
})