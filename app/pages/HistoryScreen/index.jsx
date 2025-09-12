import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BackArrowIcon, CalendarHomeIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import HIstoryActiveWorkout from '../../components/HIstoryActiveWorkout'
import HIstoryCompletedWorkout from '../../components/HIstoryCompletedWorkout'

const HistoryScreen = () => {
    const navigation = useNavigation()
    const [completed, setCompleted] = useState(false)

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date()
    const month = today.getMonth()
    const monthName = monthNames[month]
    const year = today.getFullYear()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>History</Text>
                </Pressable>
            </View>
            <View style={styles.topbarbuttoncontainer}>
                <Pressable onPress={() => setCompleted(false)} style={[styles.topbarbuttonone, { backgroundColor: completed ? '#FFFFFF' : '#FE632B' }]}>
                    <Text style={[styles.topbarbuttontext, { color: completed ? '#000' : '#ffffff' }]}>Active</Text>
                </Pressable>
                <Pressable onPress={() => setCompleted(true)} style={[styles.topbarbuttontwo, { backgroundColor: completed ? '#54B07A' : '#ffffff' }]}>
                    <Text style={[styles.topbarbuttontext, { color: completed ? '#FFFFFF' : '#000' }]}>Completed</Text>
                </Pressable>
            </View>
            <View style={styles.calendarbar}>
                <Text style={styles.monthyeartext}>{monthName + ', ' + year}</Text>
                <Pressable onPress={() => navigation.navigate('CalendarScreen')}>
                    <CalendarHomeIcon />
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                {completed === false && <HIstoryActiveWorkout />}
                {completed === true && <HIstoryCompletedWorkout />}
            </ScrollView>
        </View>
    )
}

export default HistoryScreen

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
    topbarbuttoncontainer: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 24
    },
    topbarbuttonone: {
        width: 88,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 106,
    },
    topbarbuttontwo: {
        width: 105,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 106,
    },
    topbarbuttontext: {
        fontSize: 17,
        fontWeight: 600,
        fontFamily: 'Urbanist',
        color: '#fff',
        marginVertical: 'auto'
    },
    calendarbar: {
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    monthyeartext: {
        fontSize: 17,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff',
        width: '50%'
    },
    scroll: {
        marginTop: 16,
    }
})