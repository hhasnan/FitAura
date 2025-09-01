import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const OnBoardingOne = ({ activePage, setActivePage, img, title, subtitle }) => {

    const navigation = useNavigation()

    return (
        <ImageBackground source={img} style={styles.background}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} translucent />
                {activePage === 2 ? null : (<View style={{ paddingTop: 50, alignItems: 'flex-end' }}>
                    <Pressable style={styles.skipbutton} onPress={() => navigation.navigate('AuthScreen')}><Text style={styles.skipbuttontext}>Skip</Text></Pressable>
                </View>)}
                <View style={styles.datacontainer}>
                    <Text style={styles.title}>"{title}"</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <View style={styles.CarouselbarContainer}>
                        <View style={activePage === 0 ? styles.activeCarouselBar : styles.inactiveCarouselBar}></View>
                        <View style={activePage === 1 ? styles.activeCarouselBar : styles.inactiveCarouselBar}></View>
                        <View style={activePage === 2 ? styles.activeCarouselBar : styles.inactiveCarouselBar}></View>
                    </View>
                    <Pressable
                        style={styles.button} 
                        onPress={activePage === 2 ? () => navigation.navigate('AuthScreen') : () => setActivePage(activePage + 1)}>
                    <Text style={styles.buttonText}>{activePage === 2 ? 'Get Started' : 'Next'}</Text>
                </Pressable>
            </View>
        </View>
        </ImageBackground >
    )
}

export default OnBoardingOne

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
    },
    skipbutton: {
        width: '35',
    },
    skipbuttontext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Urbanist-regular',
        fontWeight: 'semibold',
        textAlign: 'center',
    },
    datacontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Urbanist-regular',
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'Urbanist-regular',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 20
    },
    CarouselbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        gap: 6,
    },
    activeCarouselBar: {
        width: 25,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FE632B',
    },
    inactiveCarouselBar: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    }, button: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginTop: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'Urbanist-regular',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 12,
    }
})