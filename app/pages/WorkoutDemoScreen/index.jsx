import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BackArrowIcon, LeftArrowIcon, WeeklyWorkoutScreensImg, } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import WorkoutDemoScreenFirstCom from '../../components/WorkoutDemoScreenFirstCom'
import WorkoutdemoScreenSecondCom from '../../components/WorkoutdemoScreenSecondCom'

const WorkoutDemoScreen = () => {

    const navigation = useNavigation()
    const [ firstCounter, setFirstCounter ] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setFirstCounter(false)
            clearInterval(timer)
        }, 15000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Workouts</Text>
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.buttoncontainer}>
                    <Pressable style={[styles.button, { backgroundColor: '#FE632B' }]}><Text style={styles.buttontext}>Image</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.buttontext}>Video</Text></Pressable>
                </View>
                <View style={styles.workoutimgcontainer}>
                    <Image source={WeeklyWorkoutScreensImg} style={styles.workoutimg} />
                </View>
                {firstCounter ? <WorkoutDemoScreenFirstCom setFirstCounter={setFirstCounter}/> : <WorkoutdemoScreenSecondCom/>}
            </ScrollView>
        </View>
    )
}

export default WorkoutDemoScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 7,
        paddingBottom: 7
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
    buttoncontainer: {
        width: '100%',
        height: 50,
        borderRadius: 6,
        backgroundColor: '#212121',
        paddingHorizontal: 8,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24
    },
    button: {
        height: 40,
        width: '48%',
        backgroundColor: '#292929',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Urbanist'
    },
    workoutimgcontainer: {
        width: '100%',
        height: 353,
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 24
    },
    workoutimg: {
        width: '100%',
        height: '100%',
    },
    
})