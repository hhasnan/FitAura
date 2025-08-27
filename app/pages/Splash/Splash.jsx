import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashLoaderIcon, SplashScreenDumbellIcon } from '../../../assets/icons'



const Splash = () => {


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FE632B'}></StatusBar>
      <View style={styles.logocontainer}>
        <SplashScreenDumbellIcon />
        <Text style={styles.logoText}>FitAura</Text>
      </View>
      <View style={{ marginHorizontal: 'auto', marginBottom: 30 }}>
        <SplashLoaderIcon  />
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FE632B'
  },
  logocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 37,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  }
})