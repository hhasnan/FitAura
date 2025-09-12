import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ReportCard from './ReportCard'
import { GoldMedalIcon, ReportScreenPlayIcon, WeeklyWorkoutScreensImg } from '../../assets/icons'

const MonthReportCom = () => {

    const weekOne = [{ id: 1, streak: false }, { id: 2, streak: false }, { id: 3, streak: false }, { id: 4, streak: true }, { id: 5, streak: true }, { id: 6, streak: true }, { id: 7, streak: false }]
    const weekTwo = [{ id: 1, streak: false }, { id: 2, streak: false }, { id: 3, streak: false }, { id: 4, streak: true }, { id: 5, streak: true }, { id: 6, streak: true }, { id: 7, streak: false }]
    const weekThree = [{ id: 1, streak: false }, { id: 2, streak: false }, { id: 3, streak: false }, { id: 4, streak: true }, { id: 5, streak: true }, { id: 6, streak: true }, { id: 7, streak: true }]
    const weekFour = [{ id: 1, streak: true }, { id: 2, streak: true }, { id: 3, streak: true }, { id: 4, streak: true }, { id: 5, streak: true }, { id: 6, streak: true }, { id: 7, streak: false }]

    const [ width, setWidth ] = useState(40)

    return (
        <View>
            <Text style={styles.title}>Monthly Report</Text>
            <ReportCard report={'month'} />
            <Text style={[styles.title, { marginTop: 24, marginBottom: 5 }]}>Monthly Streak</Text>
            <Text style={styles.subtitle}>
                A month of consistency, a lifetime of peace. Celebrate your progress.
            </Text>
            <View style={styles.goalstreakcontainer}>
                <View style={styles.goalstreaktextcontainer}>
                    <Text style={styles.goalstreaktextone}>Goal streak</Text>
                    <Text style={styles.goalstreaktexttwo}>10 days in a row</Text>
                </View>
                <View style={styles.streakbarcontainer}>
                    {weekOne.map(day => {
                        return <View key={day.id} style={[styles.streakbar, { backgroundColor: day.streak ? '#FE632B' : '#fff' }]}></View>
                    })}
                </View>
                <View style={styles.streakbarcontainer}>
                    {weekTwo.map(day => {
                        return <View key={day.id} style={[styles.streakbar, { backgroundColor: day.streak ? '#FE632B' : '#fff' }]}></View>
                    })}
                </View>
                <View style={styles.streakbarcontainer}>
                    {weekThree.map(day => {
                        return <View key={day.id} style={[styles.streakbar, { backgroundColor: day.streak ? '#FE632B' : '#fff' }]}></View>
                    })}
                </View>
                <View style={styles.streakbarcontainer}>
                    {weekFour.map(day => {
                        return <View key={day.id} style={[styles.streakbar, { backgroundColor: day.streak ? '#FE632B' : '#fff' }]}></View>
                    })}
                </View>
            </View>
            <Text style={[styles.title, { marginTop: 20, marginBottom: 10 }]}>Achievements</Text>
            <View style={styles.workoutinfocard}>
                <View>
                    <Text style={styles.textone}>Achievements</Text>
                    <Text style={styles.texttwo}>You Earned Badge After Completing a Day</Text>
                    <View style={styles.progressbardiv}>
                        <View style={[styles.progressbarcircleone, {backgroundColor: width < 10 ? '#FE632B' : '#EDF5FF'}]}></View>
                        <View style={[styles.progressbarcircletwo, {backgroundColor: width < 25 ? '#FE632B' : '#EDF5FF'}]}></View>
                        <View style={[styles.progressbarcirclethree, {backgroundColor: width < 55 ? '#FE632B' : '#EDF5FF'}]}></View>
                        <View style={[styles.progressbarcirclefour, {backgroundColor: width < 80 ? '#FE632B' : '#EDF5FF'}]}></View>
                        <View style={[styles.progressbar, {width: `${width}%`}]}>
                        </View>
                    </View>
                </View>
                <View style={styles.playicon}>
                    <GoldMedalIcon />
                </View>
            </View>
        </View>
    )
}

export default MonthReportCom

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
        borderColor: '#FE632B',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    textone: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 600,
        marginTop: 'auto'
    },
    texttwo: {
        fontSize: 10,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 500,
        marginTop: 8,
        marginBottom: 11
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
    },
    progressbardiv: {
        width: '110%',
        height: 7.86,
        borderRadius: 41,
        backgroundColor: '#fff',
        marginBottom: 'auto',
        overflow: 'hidden',
        position: 'relative'
    },
    progressbar: {
        height: '7.86',
        borderRadius: 41,
        backgroundColor: '#FE632B',
    },
    progressbarcircleone: {
        width: 3,
        height: 3,
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 10,
        top: '30%',
        left: '10%'
    },
    progressbarcircletwo: {
        width: 3,
        height: 3,
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 10,
        top: '30%',
        left: '25%'
    },
    progressbarcirclethree: {
        width: 3,
        height: 3,
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 10,
        top: '30%',
        left: '55%'
    },
    progressbarcirclefour: {
        width: 3,
        height: 3,
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 10,
        top: '30%',
        left: '80%'
    },
})