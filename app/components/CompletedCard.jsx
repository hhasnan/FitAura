import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DeleteWhiteIcon, FireSessionScreenIcon, HeartWhiteIcon, ReloadCardIcon, WeeklyWorkoutScreensImg } from '../../assets/icons'

const CompletedCard = () => {

    const today = new Date()
    const date = today.getDate()
    const month = today.toLocaleString('default', { month: 'short' })
    const year = today.getFullYear()

    return (
        <View style={styles.container}>
            <View style={styles.datebadge}><Text style={styles.datebadgetext}>{date + ' ' + month + ' ' + year}</Text></View>
            <View style={styles.excercise}>
                <View style={styles.imgcontainer}>
                    <ImageBackground source={WeeklyWorkoutScreensImg} style={styles.cardimg} />
                </View>
                <View>
                    <Text style={styles.title}>Strength Starter</Text>
                    <Text style={styles.subtitle}>5x reps</Text>
                </View>
            </View>
            <View style={styles.thirdcontainer}>
                <View style={styles.cardinfodiv}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                        <FireSessionScreenIcon />
                        <Text style={styles.thirdcontainertextone}>Day</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 'auto' }}>
                        <Text style={styles.thirdcontainertexttwo}>5</Text>
                        <Text style={styles.thirdcontainertextthree}>Days</Text>
                    </View>
                </View>
                <View style={[styles.cardinfodiv, { width: '40%', borderLeftColor: '#CECECE', borderRightColor: '#CECECE', borderLeftWidth: 1, borderRightWidth: 1 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                        <FireSessionScreenIcon />
                        <Text style={styles.thirdcontainertextone}>Workout</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 'auto' }}>
                        <Text style={styles.thirdcontainertexttwo}>15</Text>
                        <Text style={styles.thirdcontainertextthree}>Workouts</Text>
                    </View>
                </View>
                <View style={styles.cardinfodiv}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                        <FireSessionScreenIcon />
                        <Text style={styles.thirdcontainertextone}>Calories</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 'auto' }}>
                        <Text style={styles.thirdcontainertexttwo}>420</Text>
                        <Text style={styles.thirdcontainertextthree}>Kcal</Text>
                    </View>
                </View>
            </View>
            <View style={styles.iconbottomsection}>
                <Pressable><ReloadCardIcon /></Pressable>
                <Pressable><HeartWhiteIcon /></Pressable>
                <Pressable><DeleteWhiteIcon /></Pressable>
            </View>
        </View>
    )
}

export default CompletedCard

const styles = StyleSheet.create({
    container: {
        height: 235,
        backgroundColor: '#202125',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 24
    },
    datebadge: {
        width: 88,
        height: 24,
        backgroundColor: '#FE632B',
        borderEndEndRadius: 8,
    },
    datebadgetext: {
        fontSize: 12,
        fontFamily: 'Urbanist',
        fontWeight: 400,
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 'auto'
    },
    excercise: {
        paddingHorizontal: 10,
        paddingTop: 16,
        flexDirection: 'row',
        gap: 12
    },
    imgcontainer: {
        width: 64,
        height: 64,
        borderRadius: 6,
        overflow: 'hidden'
    },
    cardimg: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 19,
        fontWeight: 600,
        fontFamily: 'Urbanist',
        color: '#fff',
        marginBottom: 8
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Urbanist',
        color: '#fff'
    },
    thirdcontainer: {
        height: 75,
        width: '97%',
        borderRadius: 8,
        marginHorizontal: 'auto',
        marginTop: 10,
        flexDirection: 'row'
    },
    cardinfodiv: {
        height: 59,
        width: '30%',
        marginVertical: 'auto',
        gap: 4
    },
    thirdcontainertextone: {
        fontSize: 11,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff'
    },
    thirdcontainertexttwo: {
        fontSize: 19,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff'
    },
    thirdcontainertextthree: {
        fontSize: 13,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff'
    },
    iconbottomsection: {
        backgroundColor: '#FE632B99',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
})