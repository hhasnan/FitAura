import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor={'#181717'} translucent/>
            <Text>notification</Text>
        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})