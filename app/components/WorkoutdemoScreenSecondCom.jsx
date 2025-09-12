import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PauseIcon, PlayIcon, PreviousArrowIcon, SkipArrowIcon } from '../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const WorkoutdemoScreenSecondCom = () => {

    const navigation = useNavigation()
    const [play, setPlay] = useState(true)
    const [counter, setCounter] = useState(20)

    useEffect(() => {

        let timer

        if (play) {
            timer = setInterval(() => {
                setCounter(prev => {
                    if (prev === 0) {
                        clearInterval(timer)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
        }

        return () => clearInterval(timer)

    }, [play])

    // counter===0 && navigation.navigate('ExcerciseVideoScreen')

    return (
        <View>
            <Text style={styles.secondparttitle}>Strength Starter</Text>
            <Text style={styles.secondpartcountertext}>00:{counter < 10 ? `0${counter}` : counter}</Text>
            <Pressable style={styles.button} onPress={() => setPlay(!play)}>{play ? <PauseIcon /> : <PlayIcon />}<Text style={styles.buttontext}>{play ? 'PAUSE' : 'PLAY'}</Text></Pressable>
            <View style={styles.prevforwbuttoncontainer}>
                <View style={styles.prevbutton}><PreviousArrowIcon/><Text style={styles.prevbuttontext}>Previous</Text></View>
                <Pressable onPress={() => navigation.navigate('ExcerciseVideoScreen')} style={styles.forwbutton}><SkipArrowIcon/><Text style={styles.forwbuttontext}>Skip</Text></Pressable>
            </View>
            {counter === 0 && navigation.navigate('ExcerciseVideoScreen')}
        </View>
    )
}

export default WorkoutdemoScreenSecondCom

const styles = StyleSheet.create({
    secondparttitle: {
        fontSize: 24,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff',
        textAlign: 'center',
        marginTop: 16
    },
    secondpartcountertext: {
        fontSize: 32,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        color: '#fff',
        textAlign: 'center',
        marginTop: 24
    },
    button: {
        width: 255,
        height: 55,
        backgroundColor: '#FE632B',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flexDirection: 'row',
        marginTop: 24,
        marginHorizontal: 'auto'
    },
    buttontext: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        color: '#fff',
    },
    prevforwbuttoncontainer: {
        flexDirection: 'row',
        marginTop: 30,
        paddingHorizontal: 20
    },
    prevbutton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10
    },
    forwbutton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        borderStartColor: '#6C6C6C',
        borderStartWidth: 1
    },
    prevbuttontext: {
        fontWeight: 400,
        fontSize: 16,
        color: '#BCBBBB',
    },
    forwbuttontext: {
        fontWeight: 400,
        fontSize: 16,
        color: '#fff',
    }
})