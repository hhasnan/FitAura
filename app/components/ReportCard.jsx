import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FireSessionScreenIcon, MiniClockWhiteIcon } from '../../assets/icons';

const ReportCard = ({ report }) => {

    const today = new Date()

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const currentMonth = monthNames[today.getMonth()]
    const year = today.getFullYear()

    return (
        <View style={styles.container}>
            <View style={styles.firstbar}>
                <Text style={styles.textone}>Strength Starter</Text>
                <Text style={styles.texttwo}>
                    {report === 'today' && `Today`}
                    {report === 'day' && ` ${ date }/${ month }/${ year }`}
                    {report === 'week' && 'Week 1'}
                    {report === 'month' && currentMonth + ` ` + year}
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
        </View>
    )
}

export default ReportCard

const styles = StyleSheet.create({
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