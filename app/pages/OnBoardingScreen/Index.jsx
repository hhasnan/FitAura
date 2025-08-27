import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import OnBoardingOne from '../../components/OnBoardingOne'
import { OnBoarding1BgImg } from '../../../assets/icons';
import { OnBoarding2BgImg } from '../../../assets/icons';
import { OnBoarding3BgImg } from '../../../assets/icons';

const Index = () => {

    useEffect(() => {
        Image.prefetch(Image.resolveAssetSource(OnBoarding1BgImg).uri);
        Image.prefetch(Image.resolveAssetSource(OnBoarding2BgImg).uri);
        Image.prefetch(Image.resolveAssetSource(OnBoarding3BgImg).uri);
    }, [])

    const [ activePage, setActivePage ] = useState(0);

  return (
    <View style={styles.container}>
      {activePage === 0 && <OnBoardingOne activePage={activePage} setActivePage={setActivePage} img={OnBoarding1BgImg} title="Awaken Your Inner Strength with FitAura" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..." />}
      {activePage === 1 && <OnBoardingOne activePage={activePage} setActivePage={setActivePage} img={OnBoarding2BgImg} title="Transforming Goals into Gains, One Workout at a time" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..." />}
      {activePage === 2 && <OnBoardingOne activePage={activePage} setActivePage={setActivePage} img={OnBoarding3BgImg} title="Get Stronger, Healthier, and Happier with Every Step." subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..." />}
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
})