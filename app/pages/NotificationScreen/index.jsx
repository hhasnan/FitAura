import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, NotificationScreenIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const NotificationScreen = () => {
    // hooks ***
    const navigation = useNavigation();

    const datalist = [
        { read: false },
        { read: false },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
        { read: true },
    ]

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#181717'} />
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Notification</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    {datalist.map((data, index) => {
                        return (
                            <View style={styles.notifcation} key={index}>
                                <View style={styles.notificationdiv}>
                                    <View style={styles.icondiv}>
                                        <NotificationScreenIcon/>
                                    </View>
                                    <View style={styles.notficationtextdata}>
                                        <View style={styles.toptext}>
                                            <Text style={styles.notifcationtitle}>Missed Your Session?</Text>
                                            <Text style={styles.notifcationtime}>8:05 Am</Text>
                                        </View>
                                        <View style={styles.bottomtext}>
                                            <Text style={styles.notifcationsummary}>A few minutes of mindfulness can make a big difference. Tap to continue....</Text>
                                            {data.read === true ? null : <View style={styles.notificationmark}></View>}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#181717',
        padding: 10
    },
    headercontent: {
        marginTop: 10,
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        paddingStart: 10
    },
    headertext: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        marginStart: 15
    },
    container: {
        backgroundColor: '#181717',
        width: '100%',
        height: '100%',
    },
    notifcation: {
        borderBottomColor: '#313131',
        borderWidth: 1,
        paddingVertical: 16
    },
    notificationdiv: {
        flexDirection: 'row',
        width: 335,
        paddingHorizontal: 15
    },
    scroll: {
        flex: 1,
        marginBottom: 60
    },
    icondiv: {
        width: 45,
        height: 45,
        backgroundColor: '#FE632B',
        borderRadius: 62,
        marginTop: 3
    },
    notficationtextdata: {
        width: 260,
        marginStart: 15
    },
    toptext: {
        flexDirection: 'row',
        marginBottom: 7
    },
    bottomtext: {
        flexDirection: 'row'
    },
    notifcationtitle: {
        fontFamily: 'Urbanist',
        fontWeight: 500,
        fontSize: 16,
        color: '#FFFFFF'
    },
    notifcationtime: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: 12,
        color: '#CECECE',
        marginStart: 'auto'
    },
    notifcationsummary: {
        fontFamily: 'Urbanist',
        fontWeight: 500,
        fontSize: 12,
        color: '#DADADA'
    },
    notificationmark: {
        width: 14,
        height: 14,
        backgroundColor: '#FE632B',
        marginStart: 10,
        borderRadius: 10,
        marginVertical: 'auto'
    }
})