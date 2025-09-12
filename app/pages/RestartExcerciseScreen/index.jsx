import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, WeeklyWorkoutScreensImg } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const RestartExcerciseScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={[styles.headercontent,{paddingVertical: 5}]}>
                    <BackArrowIcon />
                </Pressable>
            </View>
            <Text style={styles.textone}>Workouts</Text>
            <Text style={styles.texttwo}>Strength Starter</Text>
            <View style={styles.imgcardcontainer}>
                <ImageBackground source={WeeklyWorkoutScreensImg} style={styles.imgcard} />
            </View>
            <View style={styles.buttoncontainer}>
                <Pressable style={styles.button1} onPress={() => navigation.navigate('WorkoutDemoScreen')}><Text style={styles.buttontext}>Restart Exercise</Text></Pressable>
                <Pressable style={styles.button1} onPress={() => navigation.navigate('MainTabs', {screen: 'Home'})}><Text style={styles.buttontext}>Quit</Text></Pressable>
                <Pressable style={styles.button2} onPress={() => navigation.navigate('WeeklyWorkoutsScreen')}><Text style={styles.buttontext}>Keep Exercising</Text></Pressable>
            </View>
        </View>
    )
}

export default RestartExcerciseScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 40
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
    textone: {
        fontWeight: 700,
        fontSize: 19,
        color: '#fff',
        fontFamily: 'Urbanist',
        marginTop: 14
    },
    texttwo: {
        fontWeight: 500,
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Urbanist',
        marginTop: 8,
        marginBottom: 32
    },
    imgcardcontainer: {
        height: 353,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 18
    },
    imgcard: {
        height: 353,
        borderRadius: 12,
        width: '100%',
    },
    buttoncontainer: {
        marginTop: 43,
        gap: 16
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