import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AboutUsScreenImg, BackArrowIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const AboutUsScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
                    <BackArrowIcon />
                    <Text style={styles.headertext}>About Us</Text>
                </Pressable>
            </View>
            <ImageBackground source={AboutUsScreenImg} style={{ marginHorizontal: 'auto', width: 217, height: 217, marginTop: 48, marginBottom: 32 }} />
            <Text style={styles.textone}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante
            </Text>
            <Text style={styles.textone}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros ante.Lorem ipsum dolor sit amet
            </Text>
        </View>
    )
}

export default AboutUsScreen

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
    textone: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Urbanist',
    }
})