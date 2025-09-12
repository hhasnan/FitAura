import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReportCard from './ReportCard'
import { ReportScreenPlayIcon, WeeklyWorkoutScreensImg } from '../../assets/icons'

const WeekReportCom = () => {

    const weekOne = [{id: 1, streak: false}, {id: 2, streak: false}, {id: 3, streak: false}, {id: 4, streak: true}, {id: 5, streak: true}, {id: 6, streak: true}, {id: 7, streak: false}]

    return (
        <View>
            <Text style={styles.title}>Weekly Report</Text>
            <ReportCard report={'week'}/>
            <Text style={[styles.title, { marginTop: 24, marginBottom: 5 }]}>Weekly Streak</Text>
            <Text style={styles.subtitle}>
                A week of mindfulness makes a difference. Keep going and stay on track.
            </Text>
            <View style={styles.goalstreakcontainer}>
                <View style={styles.goalstreaktextcontainer}>
                    <Text style={styles.goalstreaktextone}>Goal streak</Text>
                    <Text style={styles.goalstreaktexttwo}>3 days in a row</Text>
                </View>
                <View style={styles.streakbarcontainer}>
                    {weekOne.map(day => {
                        return <View key={day.id} style={[styles.streakbar, {backgroundColor: day.streak ? '#FE632B' : '#fff' }]}></View>
                    })}
                </View>
            </View>
            <Text style={[styles.title, { marginTop: 24, marginBottom: 5 }]}>Weekly Workout</Text>
            <View style={styles.workoutinfocard}>
                <View style={styles.imgcontainer}>
                    <ImageBackground source={WeeklyWorkoutScreensImg} style={{ width: '100%', height: '100%' }} />
                </View>
                <View>
                    <Text style={styles.textone}>Strength Starter</Text>
                    <Text style={styles.texttwo}>Muscle build</Text>
                    <View style={styles.whitebadge}>
                        <Text style={styles.whitebadgetext}>5 days</Text>
                    </View>
                </View>
                <View style={styles.playicon}>
                    <ReportScreenPlayIcon />
                </View>
            </View>
        </View>
    )
}

export default WeekReportCom

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: 'Urbanist',
        color: '#fff',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 13,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff',
        marginBottom: 16,
        color: '#DADADA'
    },
    workoutinfocard: {
        height: 100,
        backgroundColor: '#202125',
        borderWidth: 1,
        borderColor: '#2F2F2F',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    imgcontainer: {
        borderRadius: 6,
        width: 80,
        height: 80,
        overflow: 'hidden',
        marginEnd: 12
    },
    textone: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 600
    },
    texttwo: {
        fontSize: 13,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 500,
        marginTop: 8,
        marginBottom: 6
    },
    whitebadge: {
        width: 72,
        height: 28,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whitebadgetext: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: '#FE632B',
        fontWeight: 600,
    },
    playicon: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginRight: 5
    },
    goalstreakcontainer: {
        paddingHorizontal: 12,
        height: 66,
        width: '100%',
        backgroundColor: '#FE632BB2',
        borderRadius: 6,
        flexDirection: 'row'
    },
    goalstreaktextcontainer: {
        marginVertical: 'auto',
        marginEnd: 'auto'
    },
    goalstreaktextone: {
        fontSize: 14,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 400,
    },
    goalstreaktexttwo: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 600,
    },
    streakbarcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: '5',
    },
    streakbar: {
        width: 3,
        height: 10,
        borderRadius: 2.17,
        marginStart: 2  
    }
})