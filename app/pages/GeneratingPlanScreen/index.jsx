import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { GeneratingLoaderIcon } from '../../../assets/icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { useNavigation } from '@react-navigation/native'

const GeneratingPlanScreen = ({ navigation }) => {

    const circularRef = useRef(null)

    useEffect(() => {
        const timer = setInterval(() => {
            navigation.replace('MainTabs');
        }, 9000);
        setInterval(() => {
            clearInterval(timer)
        }, 9500);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <View>
                <Text style={styles.title}>Generating Your Workout Plan</Text>
                <Text style={styles.subtitle}>Please wait....</Text>
            </View>
            <AnimatedCircularProgress
                ref={circularRef}
                size={200}
                width={8}
                fill={100}
                tintColor='#FE632B'
                backgroundColor='#202125'
                rotation={0}
                lineCap='round'
                duration={9000}
                style={{marginVertical:157}}
            >
                {(fill) => (
                    <Text style={styles.countertext}>
                        {Math.round(fill)}%
                    </Text>
                )}
            </AnimatedCircularProgress>
            <Text style={styles.belowsidetitle}>This will just take a moment to generating your workouts plan.</Text>
        </View>
    )
}

export default GeneratingPlanScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
        position: 'relative',
        paddingVertical: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Urbanist',
        paddingTop: 15,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'regular',
        color: '#C3C3C3',
        fontFamily: 'Urbanist',
        paddingTop: 5,
        textAlign: 'center'
    },
    icon: {
        marginTop: 157,
        alignSelf: 'center'
    },
    belowsidetitle: {
        fontSize: 15,
        fontWeight: 'regular',
        color: '#C3C3C3',
        fontFamily: 'Urbanist',
        paddingTop: 5,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 30
    },
    countertext: {
        fontSize: 44,
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Urbanist',
    }
})