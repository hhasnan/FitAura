import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, ClockSessionScreenIcon, FireSessionScreenIcon, HDumbellSessionScreenIcon, SessionDetailsScreenBg } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const SessionDetailScreen = () => {

    const navigation = useNavigation()

    return (
        <ImageBackground source={SessionDetailsScreenBg}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backbutton}>
                    <BackArrowIcon />
                </Pressable>
                <View style={styles.textcontainer}>
                    <Text style={styles.title}>Muscle Group Split</Text>
                    <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</Text>
                    <View style={styles.cardcontainer}>
                        <View style={styles.card}>
                            <ClockSessionScreenIcon/>
                            <Text style={styles.cardtitle}>7 Day</Text>
                            <Text style={styles.cardsubtitle}>Time</Text>
                        </View>
                        <View style={[styles.card, {borderWidth: 1, borderRightColor: '#454545', borderLeftColor: '#454545'}]}>
                            <FireSessionScreenIcon/>
                            <Text style={styles.cardtitle}>Beginner</Text>
                            <Text style={styles.cardsubtitle}>Workout Level</Text>
                        </View>
                        <View style={styles.card}>
                            <HDumbellSessionScreenIcon/>
                            <Text style={styles.cardtitle}>5 x 6</Text>
                            <Text style={styles.cardsubtitle}>Sets</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SessionDetailScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    backbutton: {
        padding: 20,
        paddingTop: 50
    },
    textcontainer: {
        marginTop: 'auto',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 700,
        fontFamily: 'Urbanist'
    },
    subtitle: {
        fontSize: 12,
        color: '#D1D1D1',
        fontWeight: 500,
        fontFamily: 'Urbanist',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 24
    },
    cardcontainer: {
        flexDirection: 'row',
        marginBottom: 47
    },
    card: {
        height: 86,
        width: 118,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: 600,
        color: 'white',
        fontFamily: 'Urbanist'
    },
    cardsubtitle: {
        fontSize: 10,
        fontWeight: 400,
        color: '#B5B4B4',
        fontFamily: 'Urbanist'
    }
})