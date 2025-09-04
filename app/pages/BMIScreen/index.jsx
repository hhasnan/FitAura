import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import WeightSliderKg from '../../components/WeightSliderKg'
import WeightSliderLbs from '../../components/WeightSliderLbs'
import HeightSliderCm from '../../components/heightSliderCm'
import HeightSliderFtIn from '../../components/heightSliderFt'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'

const BMIScreen = ({navigation}) => {

  const { userData, updateData } = useContext(AppContext)

  const [weightKg, setWeightKg] = useState(30.0);
  const [weightLbs, setWeightLbs] = useState(66.14);
  const [weightInKg, setWeightInKg] = useState(true);
  const [heightCm, setHeightCm] = useState(100);
  const [heightFt, setHeightFt] = useState(36)
  const [heightInCm, setHeightInCm] = useState(true);

  const feet = Math.floor(heightFt / 12);
  const inches = heightFt % 12;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
      <View style={styles.progresscontainer}>
        <View style={styles.progressbar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.progressText}>5/6</Text>
      </View>
      <Text style={styles.title}>Select Your Weight and Height</Text>
      <Text style={styles.subtitle}>Share your weight and height with us</Text>
      <View style={styles.slidercontainer}>
        <View style={styles.slidertopbar}>
          <Text style={styles.slidertitle}>Weight</Text>
          <Pressable onPress={() => setWeightInKg(true)} style={[styles.unitbutton1, { backgroundColor: weightInKg ? '#FE632B' : 'white' }]}><Text style={[styles.unitbutton1text, { color: weightInKg ? 'white' : 'black' }]}>kg</Text></Pressable>
          <Pressable onPress={() => setWeightInKg(false)} style={[styles.unitbutton2, { backgroundColor: !weightInKg ? '#FE632B' : 'white' }]}><Text style={[styles.unitbutton2text, { color: !weightInKg ? 'white' : 'black' }]}>lbs</Text></Pressable>
        </View>
        <View>
          <View style={{ display: weightInKg ? 'flex' : 'none' }}>
            <WeightSliderKg weight={weightKg} setWeight={setWeightKg} />
          </View>
          <View style={{ display: !weightInKg ? 'flex' : 'none' }}>
            <WeightSliderLbs weight={weightLbs} setWeight={setWeightLbs} />
          </View>
        </View>
      </View>
      <View style={styles.slidercontainer}>
        <View style={styles.slidertopbar}>
          <Text style={styles.slidertitle}>Height</Text>
          <Pressable onPress={() => setHeightInCm(true)} style={[styles.unitbutton1, { backgroundColor: heightInCm ? '#FE632B' : 'white' }]}><Text style={[styles.unitbutton1text, { color: heightInCm ? 'white' : 'black' }]}>cm</Text></Pressable>
          <Pressable onPress={() => setHeightInCm(false)} style={[styles.unitbutton2, { backgroundColor: !heightInCm ? '#FE632B' : 'white' }]}><Text style={[styles.unitbutton2text, { color: !heightInCm ? 'white' : 'black' }]}>ft</Text></Pressable>
        </View>
        <View>
          <View style={{ display: heightInCm ? 'flex' : 'none' }}>
            <HeightSliderCm height={heightCm} setHeight={setHeightCm} />
          </View>
          <View style={{ display: !heightInCm ? 'flex' : 'none' }}>
            <HeightSliderFtIn heightInInches={heightFt} setHeightInInches={setHeightFt} />
          </View>
        </View>
      </View>
      <QuestionnaireButton title={'Continue'} onPress={() => { updateData('weight', weightInKg ? weightKg + ' kg' : weightLbs + ' lbs'); updateData('height', heightInCm ? heightCm + ' cm' : feet + ' ft ' + inches + ' in');navigation.navigate('SubscriptionScreen');
        console.log(userData)
      }}/>
    </View>
  )
}

export default BMIScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#181717',
    paddingHorizontal: 20,
    position: 'relative',
  },
  progresscontainer: {
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressbar: {
    width: 230,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    width: '82.02%',
    height: '100%',
    backgroundColor: '#FE632B',
    borderRadius: 5,
  },
  progressText: {
    color: '#fff',
    marginStart: 30,
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#FE632B'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Urbanist',
    paddingTop: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'regular',
    color: 'white',
    fontFamily: 'Urbanist',
    paddingTop: 5,
    textAlign: 'center',
  },
  slidercontainer: {
    marginTop: 20,
    backgroundColor: "#202125",
    borderRadius: 10,
  },
  slidertopbar: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: 'row',
  },
  slidertitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "semi-bold",
    fontFamily: "Urbanist",
    width: '50%'
  },
  unitbutton1: {
    backgroundColor: 'white',
    width: 45,
    height: 25,
    marginStart: 'auto',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5
  },
  unitbutton2: {
    backgroundColor: 'white',
    width: 45,
    height: 25,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5
  },
  unitbutton1text: {
    color: 'black',
    fontWeight: 'semi-bold',
    fontSize: 17,
    textAlign: 'center'
  },
  unitbutton2text: {
    color: 'black',
    fontWeight: 'semi-bold',
    fontSize: 17,
    textAlign: 'center'
  }
})