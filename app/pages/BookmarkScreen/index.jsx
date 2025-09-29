import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, HomeScreenCardImgOne, SubtitleHomeScreenIcon, UnlockSessionHomeScreenIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const BookmarkScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.navigate('MainTabs')} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Bookmarks</Text>
                </Pressable>
            </View>
            <View style={styles.activitycardoutside}>
                <ImageBackground style={styles.workoutactivitycard} source={HomeScreenCardImgOne}>
                    <View style={[styles.activitycardinside, { backgroundColor: 'transparent' }]}>
                        <Text style={styles.workoutactivitycardtitle}>Week 1: Muscle Group Split</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                            <SubtitleHomeScreenIcon />
                            <Text style={styles.workoutactivitycardsubtitle}> Beginner / 5 Set</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('SessionDetailsScreen')} style={[styles.cardbutton, { backgroundColor: '#FE632B' }]}>
                            <Text style={styles.carbbuttontext}>Start Session</Text>
                            <UnlockSessionHomeScreenIcon />
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default BookmarkScreen

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
    activitycardoutside: {
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 24
    },
    workoutactivitycard: {
        borderRadius: 10
    },
    workoutactivitycardtitle: {
        fontSize: 15,
        fontWeight: 600,
        color: 'white'
    },
    workoutactivitycardsubtitle: {
        fontSize: 12,
        fontWeight: 600,
        color: 'white',
        marginStart: 5
    },
    cardbutton: {
        height: 32,
        borderRadius: 6,
        backgroundColor: '#FE632B',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 5
    },
    carbbuttontext: {
        fontSize: 13,
        fontWeight: 'semibold',
        color: 'white',
        marginEnd: 3
    },
    activitycardinside: {
        height: 140,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
})