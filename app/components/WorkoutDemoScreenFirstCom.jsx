import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { LeftArrowIcon } from '../../assets/icons'

const WorkoutDemoScreenFirstCom = ({ setFirstCounter }) => {

    const [counter, setCounter] = useState(15)
    const circularRef = useRef(null)

    useEffect(() => {
        circularRef.current.animate(100, 18000)

        const timer = setInterval(() => {
            setCounter((prev) => {
                if (prev === 0) {
                    clearInterval(timer)
                    return 0
                }
                return prev - 1
            }
            )
        }, 1000);

    }, [])

    return (
        <View>
            <Text style={styles.title}>Ready To Go!</Text>
            <Text style={styles.subtitle}>Strength Starter</Text>
            <View style={styles.circlecountercontainer}>
                <AnimatedCircularProgress
                    ref={circularRef}
                    size={85}
                    width={8}
                    fill={100}
                    tintColor='#FE632B'
                    backgroundColor='#202125'
                    rotation={180}
                    lineCap='round'
                >
                    {
                        (fill) => (
                            <Text style={styles.countertext}>
                                {counter}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <Pressable style={{padding: 24}} onPress={() => setFirstCounter?.(false)}>
                    <LeftArrowIcon />
                </Pressable>
            </View>
        </View>
    )
}

export default WorkoutDemoScreenFirstCom

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        color: '#fff',
        textAlign: 'center',
        marginTop: 24
    },
    subtitle: {
        fontSize: 21,
        fontWeight: 500,
        fontFamily: 'Urbanist',
        color: '#fff',
        textAlign: 'center',
        marginTop: 14
    },
    countertext: {
        fontSize: 45,
        fontWeight: 600,
        fontFamily: 'Urbanist',
        color: '#fff'
    },
    circlecountercontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 54
    },
})