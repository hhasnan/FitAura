import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReportCard from './ReportCard'
import { DeleteWhiteIcon, FireSessionScreenIcon, HeartWhiteIcon, MiniClockWhiteIcon, ReloadCardIcon } from '../../assets/icons'

const HIstoryActiveWorkout = () => {

    const listText = [
        'Uses your body weight or light resistance (dumbbells, bands) to safely stimulate muscle contraction—ideal for beginners',
        'Incorporates movements that work major muscle groups—chest, back, legs, core, shoulders, and arms—for balanced strength development .',
        'Start with 2 sets of 10–15 reps per exercise, progressively increasing weight or reps over time to build strength and confidence',
        'Emphasizes basic exercises—squats (hinge), push-ups (push), rows (pull), and planks (core)—to establish a strong movement foundation',
        'Gradually increase workload (reps, weight, or sets) to continually challenge your muscles and encourage growth',
    ]

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.firstbar}>
                    <Text style={styles.textone}>Strength Starter</Text>
                    <Text style={styles.texttwo}>
                        Today
                    </Text>
                </View>
                <View style={styles.secondbar}>
                    <View style={styles.secondbargroup}>
                        <View style={styles.secondbarcomponent}>
                            <MiniClockWhiteIcon />
                            <Text style={styles.textthree}>15 Minutes</Text>
                        </View>
                        <View style={styles.secondbarcomponent}>
                            <MiniClockWhiteIcon />
                            <Text style={styles.textthree}>5x reps</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.thirdcontainer}>
                    <View style={styles.cardinfodiv}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                            <FireSessionScreenIcon />
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', gap: 1, marginBottom: 'auto' }}>
                            <Text style={styles.thirdcontainertexttwo}>7 Day</Text>
                            <Text style={styles.thirdcontainertextthree}>Time</Text>
                        </View>
                    </View>
                    <View style={[styles.cardinfodiv, { width: '40%', borderLeftColor: '#CECECE', borderRightColor: '#CECECE', borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                            <FireSessionScreenIcon />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 1, marginBottom: 'auto' }}>
                            <Text style={styles.thirdcontainertexttwo}>Beginner</Text>
                            <Text style={styles.thirdcontainertextthree}>Workout Level</Text>
                        </View>
                    </View>
                    <View style={styles.cardinfodiv}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 'auto' }}>
                            <FireSessionScreenIcon />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 1, marginBottom: 'auto' }}>
                            <Text style={styles.thirdcontainertexttwo}>5 x 6</Text>
                            <Text style={styles.thirdcontainertextthree}>Reps</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>About</Text>
            {listText.map((text, index) => {
                return (
                    <View style={styles.list} key={index}>
                        <View style={styles.listcircle} />
                        <Text style={styles.listtext}>
                            {text}
                        </Text>
                    </View>
                )
            })}
        </View>
    )
}

export default HIstoryActiveWorkout

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Urbanist',
        marginTop: 16
    },
    list: {
        marginTop: 16,
        flexDirection: 'row',
    },
    listcircle: {
        width: 8,
        height: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: '50%',
        margin: 8
    },
    listtext: {
        flex: 1,
        fontSize: 13,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        color: '#fff',
    },
    container: {
        height: 169,
        backgroundColor: '#FE632B',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#2F2F2F',
        paddingHorizontal: 10,
        paddingTop: 16
    },
    firstbar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textone: {
        fontSize: 16,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 600
    },
    texttwo: {
        fontSize: 12,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 400
    },
    secondbargroup: {
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center',
        marginTop: 10
    },
    secondbarcomponent: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    textthree: {
        fontSize: 12,
        fontFamily: 'Urbanist',
        color: '#fff',
        fontWeight: 500
    },
    thirdcontainer: {
        height: 75,
        width: '97%',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginHorizontal: 'auto',
        marginTop: 16,
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
        color: '#000'
    },
    thirdcontainertexttwo: {
        fontSize: 19,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#000'
    },
    thirdcontainertextthree: {
        fontSize: 13,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#9E9E9E'
    }
})