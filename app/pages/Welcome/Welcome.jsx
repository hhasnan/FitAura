import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WelcomeScreenBgImg } from '../../../assets/icons'

const Welcome = () => {
  return (
    <ImageBackground source={WelcomeScreenBgImg} style={styles.background}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={'transparent'}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to 👋</Text>
          <Text style={styles.subtitle}>FitAura</Text>
          <Text style={styles.paragraph}>"Get ready to embark on a transformative fitness journey with BodyHub.</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%' 
    },
    container: {
      width: '100%',
      height: '100%',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 37,
        color: '#FFFFFF',
        fontFamily: 'Urbanist-Regular',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 46,
        color: '#FFFFFF',
        fontFamily: 'Urbanist-ExtraBold',
        fontWeight: 'bold'
    },
    paragraph: {
      color: '#FFFFFF',
      fontFamily: 'Urbanist-Regular',
      fontWeight: 'normal',
      fontSize: 14,
      marginTop: 15,
      marginBottom: 25
    }
})