import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewProfileImgIcon, ProfileImg, ProfileScreenUpgradePlanImg, SmallRightArrowIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {

  const naivgation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styles.imagecontainer}>
        <View style={styles.image}>
          <ImageBackground source={ProfileImg} style={styles.image} />
        </View>
        <Pressable style={styles.newimgicon}><NewProfileImgIcon /></Pressable>
      </View>
      <Text style={styles.textone}>Andrew Ainsley</Text>
      <Text style={styles.texttwo}>@andrewainsleygmail.com</Text>
      <View style={styles.nextpagedivscontainer}>
        <Pressable style={styles.nextpagediv}>
          <Text style={styles.textthree}>Settings</Text>
          <SmallRightArrowIcon/>
        </Pressable>
        <Pressable style={styles.nextpagediv}>
          <Text style={styles.textthree}>Change Workout Plan</Text>
          <SmallRightArrowIcon/>
        </Pressable>
        <Pressable style={styles.nextpagediv} onPress={() => naivgation.navigate('FAQScreen')}>
          <Text style={styles.textthree}>FAQs</Text>
          <SmallRightArrowIcon/>
        </Pressable>
        <Pressable style={styles.nextpagediv} onPress={() => naivgation.navigate('AboutUsScreen')}>
          <Text style={styles.textthree}>About us</Text>
          <SmallRightArrowIcon/>
        </Pressable>
      </View>
      <View style={styles.lastimg}>
        <ImageBackground source={ProfileScreenUpgradePlanImg} style={{width: '100%', height: 80}}/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181717',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  imagecontainer: {
    width: 89,
    height: 89,
    position: 'relative',
    marginTop: 61,
    marginHorizontal: 'auto'
  },
  image: {
    width: 89,
    height: 89,
    borderRadius: '50%',
    overflow: 'hidden'
  },
  newimgicon: {
    position: 'absolute',
    right: '-5',
    bottom: '-5'
  },
  textone: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 6
  },
  texttwo: {
    color: '#FFFFFFCF',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginBottom: 24,
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
  lastimg: {
    marginTop: 24,
    borderRadius: 8,
    overflow: 'hidden'
  }
})