import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReportCard from './ReportCard'
import { ReportScreenPlayIcon, WeeklyWorkoutScreensImg } from '../../assets/icons'

const DayReportCom = () => {
    return (
        <View>
            <Text style={styles.title}>Today’s Report</Text>
            <ReportCard report={'day'}/>
            <Text style={[styles.title, { marginTop: 24, marginBottom: 5 }]}>Today’s Workout</Text>
            <Text style={styles.subtitle}>
                Stay consistent on your journey. Complete today’s workout and keep your progress going
            </Text>
            <View style={styles.workoutinfocard}>
                <View style={styles.imgcontainer}>
                    <ImageBackground source={WeeklyWorkoutScreensImg} style={{ width: '100%', height: '100%' }} />
                </View>
                <View>
                    <Text style={styles.textone}>Strength Starter</Text>
                    <Text style={styles.texttwo}>Muscle build</Text>
                    <View style={styles.whitebadge}>
                        <Text style={styles.whitebadgetext}>10:00 min</Text>
                    </View>
                </View>
                <View style={styles.playicon}>
                    <ReportScreenPlayIcon/>
                </View>
            </View>
        </View>
    )
}

export default DayReportCom

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
    }
})