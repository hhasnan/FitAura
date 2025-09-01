import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SuccessfullyResetScreenIcon } from '../../../assets/icons'
import Button from '../../components/Button'

const SuccessfullyResetScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View>
                <View style={styles.iconContainer}><SuccessfullyResetScreenIcon /></View>
                <Text style={styles.title}>Your Password has been successfully reset</Text>
                <Button title={'Login'} onPress={() => { navigation.navigate('AuthScreen') }}/>
            </View>
        </View>
    )
}

export default SuccessfullyResetScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    iconContainer: {
        marginHorizontal: 'auto'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: 'medium',
        marginTop: 66,
        marginBottom: 91,
        color: 'white',
        textAlign: 'center'
    }
})