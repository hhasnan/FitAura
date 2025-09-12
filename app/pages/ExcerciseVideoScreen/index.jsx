import { ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WeeklyWorkoutScreensImg } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const ExcerciseVideoScreen = () => {

    const navigation = useNavigation()
    const [counter, setCounter] = useState(20)
    const nav = () => navigation.navigate('RestartExcerciseScreen')

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(
                (prev) => {
                    if (prev === 0) {
                        clearInterval(timer)
                        nav()
                        return 0
                    }
                    return prev - 1
                }
            )
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <ImageBackground source={WeeklyWorkoutScreensImg} style={styles.workoutcard}>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bottomcontainer}>
                    <Text style={styles.textthree}>Next 2/7</Text>
                    <View style={styles.textcontainer}>
                        <Text style={styles.texttwo}>Strength Starter</Text>
                        <Text style={styles.texttwo}>x14</Text>
                    </View>
                    <Text style={styles.textone}>REST</Text>
                    <Text style={styles.countertext}>00:{counter < 10 ? `0${counter}` : counter}</Text>
                    <View style={styles.buttoncontainer}>
                        <Pressable style={styles.button1} onPress={() => setCounter(prev => prev + 20)}><Text style={styles.buttontext}>+20s</Text></Pressable>
                        <Pressable style={styles.button2} onPress={() => navigation.navigate('RestartExcerciseScreen')}><Text style={styles.buttontext}>SKIP</Text></Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ExcerciseVideoScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
    },
    workoutcard: {
        height: 381,
        width: '100%'
    },
    bottomcontainer: {
        paddingHorizontal: 20,
        paddingTop: 18
    },
    textone: {
        fontSize: 24,
        fontFamily: 'Urbanist',
        fontWeight: 500,
        color: '#fff',
        textAlign: 'center',
        marginTop: 48
    },
    texttwo: {
        fontSize: 21,
        fontFamily: 'Urbanist',
        fontWeight: 500,
        color: '#fff',
        marginTop: 8
    },
    textthree: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: 500,
        color: '#fff'
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countertext: {
        fontSize: 32,
        fontFamily: 'Urbanist',
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
        marginTop: 24,
    },
    buttoncontainer: {
        marginTop: 64
    },
    button1: {
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#2F2F2F',
        backgroundColor: '#202125'
    },
    button2: {
        height: 55,
        borderRadius: 8,
        backgroundColor: '#FE632B',
        marginTop: 16,
        marginBottom: 20
    },
    buttontext: {
        textAlign: 'center',
        marginVertical: 'auto',
        fontSize: 20,
        fontWeight: 700,
        color: '#fff'
    }
})