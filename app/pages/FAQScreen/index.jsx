import { ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, DownArrowOrangeIcon, FAQScreenImg } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'


const FAQScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>FAQs</Text>
                </Pressable>
            </View>
            <View style={styles.img}>
                <ImageBackground source={FAQScreenImg} style={styles.img} />
            </View>
            <ScrollView style={styles.nextpagedivscontainer}>
                <Pressable style={styles.nextpagediv}>
                    <Text style={styles.textthree}>How does FitAura work?</Text>
                    <DownArrowOrangeIcon />
                </Pressable>
                <Pressable style={styles.nextpagediv}>
                    <Text style={styles.textthree}>Is FitAura free to use?</Text>
                    <DownArrowOrangeIcon />
                </Pressable>
                <Pressable style={styles.nextpagediv} >
                    <Text style={styles.textthree}>Can I use FitAura offline?</Text>
                    <DownArrowOrangeIcon />
                </Pressable>
                <Pressable style={styles.nextpagediv}>
                    <Text style={styles.textthree}>Is my data secure with FitAura?</Text>
                    <DownArrowOrangeIcon />
                </Pressable>
                <Pressable style={styles.nextpagediv} >
                    <Text style={styles.textthree}>Can I export my FitAura data?</Text>
                    <DownArrowOrangeIcon />
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default FAQScreen

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
    img: {
        height: 217,
        width: '100%',
        marginTop: 28,
        marginBottom: 42
    },
    nextpagediv: {
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 14,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 11,
        flexDirection: 'row',
        backgroundColor: '#202125'
    },
    textthree: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Urbanist',
    },
})