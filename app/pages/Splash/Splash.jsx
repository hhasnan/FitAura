import { StatusBar, StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreenDumbellIcon } from '../../../assets/icons'
import { DotIndicator } from 'react-native-indicators'

// Suppress the specific warning
LogBox.ignoreLogs([
  'A props object containing a "key" prop is being spread into JSX',
]);

const Splash = () => {

  useEffect(() => {
    // You can add navigation timeout here if needed
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FE632B'} />
      <View style={styles.logocontainer}>
        <SplashScreenDumbellIcon />
        <Text style={styles.logoText}>FitAura</Text>
      </View>
      <View style={{ marginHorizontal: 'auto', marginBottom: 30 }}>
        <DotIndicator color='#fff' size={7} />
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
