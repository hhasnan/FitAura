import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CongratulationIcon, TickIcon } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { useNavigation } from '@react-navigation/native'

const PlanUpdateSuccesfullyScreen = () => {

  const data = ['Ad-free experience', 'Unlimited goals: Set and manage an unlimited number of goals', 'Advanced habit and task tracking features', 'Customizable goal templates', 'Advanced AI-powered features', 'Priority customer support']
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styles.iconcontainer}>
        <CongratulationIcon />
      </View>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.subtitle}>You’ve Upgraded to the Yearly SUbscription</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textthree}>Benefits Unlocked:</Text>
        <View style={styles.servicescontainer}>
          {data.map((item, index) => (
            <View style={styles.service} key={index}>
              <TickIcon />
              <Text style={styles.servicetext}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.textfour}>
          Your subscription will automatically renew
          annual unless canceled. Manage your
          subscription in your account settings.
        </Text>
        <View style={{width: '100%', height: 60}}/>
      </ScrollView>
      <QuestionnaireButton title={'Start Exploring Premium Features'} onPress={() => navigation.navigate('MainTabs')} />

    </View>
  )
}

export default PlanUpdateSuccesfullyScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181717',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  iconcontainer: {
    marginTop: 18,
    marginHorizontal: 'auto'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 600,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginTop: 24,
  },
  subtitle: {
    color: '#C3C3C3',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginTop: 17,
    marginBottom: 53
  },
  textthree: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 600,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginBottom: 23
  },
  servicescontainer: {
    paddingHorizontal: '5%',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2F2F2F'
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  servicetext: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'Urbanist',
    paddingLeft: 10,
  },
  textfour: {
    color: '#C3C3C3',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginTop: 17,
    marginBottom: 60
  }
})