import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BackArrowIcon } from '../../../assets/icons'
import ReportCard from '../../components/ReportCard'
import DayReportCom from '../../components/DayReportCom'
import WeekReportCom from '../../components/WeekReportCom'
import MonthReportCom from '../../components/MonthReportCom'

const ReportScreen = () => {

  const navigation = useNavigation()
  const [report, setReport] = useState('day')

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#181717'} />
      <View>
        <Pressable onPress={() => navigation.goBack()} style={styles.headercontent}>
          <BackArrowIcon />
          <Text style={styles.headertext}>Report</Text>
        </Pressable>
      </View>
      <View style={styles.topbuttoncontainer}>
        <Pressable
          style={[styles.topbutton, { backgroundColor: report === 'day' ? '#FE632B' : '#fff' }]}
          onPress={() => setReport('day')}
        >
          <Text style={[styles.topbuttontext, { color: report === 'day' ? '#fff' : '#FE632B' }]}>Day</Text>
        </Pressable>
        <Pressable
          style={[styles.topbutton, { backgroundColor: report === 'week' ? '#FE632B' : '#fff' }]}
          onPress={() => setReport('week')}
        >
          <Text style={[styles.topbuttontext, { color: report === 'week' ? '#fff' : '#FE632B' }]}>Week</Text>
        </Pressable>
        <Pressable
          style={[styles.topbutton, { backgroundColor: report === 'month' ? '#FE632B' : '#fff' }]}
          onPress={() => setReport('month')}
        >
          <Text style={[styles.topbuttontext, { color: report === 'month' ? '#fff' : '#FE632B' }]}>Month</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={{display: report === 'day' ? 'flex' : 'none'}}><DayReportCom/></View>
        <View style={{display: report === 'week' ? 'flex' : 'none'}}><WeekReportCom/></View>
        <View style={{display: report === 'month' ? 'flex' : 'none'}}><MonthReportCom/></View>
      </ScrollView>
    </View>
  )
}

export default ReportScreen

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
  topbuttoncontainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#212121',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#454545'
  },
  topbutton: {
    width: 98,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topbuttontext: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Urbanist',
    color: '#FE632B',
    textAlign: 'center'
  },
  scroll: {
    marginTop: 24
  }
})