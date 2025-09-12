import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BackArrowIcon, SearchBarWhiteIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import { Calendar } from 'react-native-calendars'

const CalendarScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Search by date</Text>
                </Pressable>
            </View>
            <View style={styles.searchbarcontainer}>
                <View style={styles.iconcontainer}>
                    <SearchBarWhiteIcon />
                </View>
                <TextInput
                    placeholder='Search here'
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                />
            </View>
            <View>
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: '#404042',
                        borderRadius: 17.91,
                        overflow: 'hidden',
                        backgroundColor: '#151515',
                    }}
                    theme={{
                        calendarBackground: '#151515',
                        arrowColor: '#FE632B',
                        textSectionTitleColor: '#fff',
                        textDayFontFamily: 'Urbanist',
                        textMonthFontFamily: 'Urbanist',
                        textDayHeaderFontFamily: 'Urbanist',
                        todayTextColor: '#FE632B',
                        dayTextColor: '#fff',
                        monthTextColor: '#fff'
                    }}
                />
            </View>
        </View>
    )
}

export default CalendarScreen

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
    searchbarcontainer: {
        height: 55,
        borderRadius: 10,
        backgroundColor: '#202125',
        borderWidth: 1,
        borderColor: '#2F2F2F',
        width: '100%',
        marginVertical: 16,
        flexDirection: 'row'
    },
    iconcontainer: {
        marginVertical: 'auto',
        marginLeft: 15,
        marginRight: 8
    },
    input: {
        width: '70%',
        marginVertical: 'auto'
    }
})