import { Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, ClockSessionScreenIcon, DayFourCardImg, DownArrowIcon, WeeklyWorkoutScreenPlayIcon, WeeklyWorkoutScreensImg } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'


const SimpleDay = ({ day }) => {
    
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('WorkoutDemoScreen')} style={styles.workoutdaycard}>
            <Image source={WeeklyWorkoutScreensImg} style={styles.cardimg} />
            <View style={styles.workoutdaycardtextcontainer}>
                <Text style={styles.workoutdaycardtextone}>Strength Starter</Text>
                <View style={styles.workoutdaycardtextsecondcontainer}>
                    <Text style={styles.workoutdaycardtexttwo}>{day.day}</Text>
                    <ClockSessionScreenIcon />
                    <Text style={styles.workoutdaycardtextthree}>15 Minutes</Text>
                </View>
            </View>
            <Pressable style={styles.cardinconcontainer}>
                <WeeklyWorkoutScreenPlayIcon />
            </Pressable>
        </Pressable>
    )
}

const DayFour = ({ day }) => {
    return (
        <View style={styles.dayfourcard} key={day.id}>
            <ImageBackground source={DayFourCardImg} style={styles.dayfourcardbg}>
                <Text style={styles.dayfourcardtext}>{day.day}</Text>
                <View style={styles.dayfourcarddiv}><Text style={[styles.workoutdaycardtextone, { textAlign: 'center' }]}>Rest</Text></View>
            </ImageBackground>
        </View>
    )
}


const WeeklyWorkoutsScreen = () => {

    const navigation = useNavigation()

    const data = [
        { id: 1, day: 'Day 1' },
        { id: 2, day: 'Day 2' },
        { id: 3, day: 'Day 3' },
        { id: 4, day: 'Day 4' },
        { id: 5, day: 'Day 5' },
        { id: 6, day: 'Day 6' },
        { id: 7, day: 'Day 7' },
    ]



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Workouts</Text>
                </Pressable>
                <View style={styles.headerweekdiv}>
                    <Text style={styles.headerweekdivtext}>Week 1</Text>
                    <DownArrowIcon />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
            >
                {data.map((day) =>
                    day.id === 4 ? (
                        <DayFour day={day} />
                    ) : (
                        <SimpleDay day={day} />
                    )
                )}
                <View style={styles.dummydiv}></View>
            </ScrollView>
        </View>
    )
}

export default WeeklyWorkoutsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    headercontent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dummydiv: {
        height: 10
    },
    headertext: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        marginStart: 15
    },
    headerweekdiv: {
        width: 75,
        height: 30,
        backgroundColor: '#FE632B',
        borderRadius: 280,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    headerweekdivtext: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 2
    },
    workoutdaycard: {
        height: 107,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#202125',
        borderWidth: 1,
        borderColor: '#2F2F2F',
        borderRadius: 10,
        marginTop: 16
    },
    cardimg: {
        width: 87,
        height: 87,
        borderRadius: 6,
        marginEnd: 10
    },
    workoutdaycardtextcontainer: {
        marginVertical: 'auto',
        // flexDirection: 'row'
    },
    workoutdaycardtextone: {
        fontSize: 19,
        fontWeight: 600,
        color: "#fff",
        marginBottom: 8,
    },
    workoutdaycardtextsecondcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    workoutdaycardtexttwo: {
        fontSize: 12,
        fontWeight: 500,
        color: '#FE632B',
        marginEnd: 8,
    },
    workoutdaycardtextthree: {
        fontSize: 12,
        fontWeight: 500,
        color: '#9A9898',
        marginStart: 4,
    },
    cardinconcontainer: {
        marginVertical: 'auto',
        marginStart: 'auto',
        marginEnd: 10
    },
    dayfourcard: {
        height: 107,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2F2F2F',
        marginTop: 16,
        overflow: 'hidden'
    },
    dayfourcardbg: {
        height: '100%',
        borderRadius: 10,
    },
    dayfourcardtext: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        margintop: 8,
        marginStart: 8,
    },
    dayfourcarddiv: {
        width: '100%',
        height: 30,
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152, 59, 26, 0.6)'
    }
})