import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const BookmarkScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>Bookmarks</Text>
                </Pressable>
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
})