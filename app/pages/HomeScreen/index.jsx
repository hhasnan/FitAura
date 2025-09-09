import { FlatList, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BellHomeIcon, CalendarHomeIcon, HeartHomeIcon, HomeScreenCardImg2, HomeScreenCardImgOne, HomeScreenCardImgThree, HomeScreenCardImgTwo, LockSessionHomeScreenIcon, SubtitleHomeScreenIcon, UnlockSessionHomeScreenIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()
  const date = new Date();
  const month = date.toLocaleDateString('en-US', { month: 'short' });

  const getDates = (n) => {
    const dates = [];
    const today = new Date();

    const half = Math.floor(n / 2);

    for (let i = -half; i < half; i++) {

      const d = new Date();
      d.setDate(today.getDate() + i);

      const day = d.toLocaleDateString('en-US', { weekday: 'short' })
      const date = d.getDate();

      dates.push({ id: i, day, date, istoday: i === 0 });
    }

    return dates
  }

  const dates = getDates(8);
  const finishedArr = dates.slice(1);

  const data = [
    { id: 1, title: 'Week 1: Muscle Group Split', subtitle: ' Beginner / 5 Set', bgimg : HomeScreenCardImgOne, active: true },
    { id: 2, title: 'Week 2: Bodybuilder Split', subtitle: ' Beginner / 5 Set', bgimg : HomeScreenCardImgTwo, active: false },
    { id: 3, title: 'Week 3: Upper/Lower Body', subtitle: ' Beginner / 5 Set', bgimg : HomeScreenCardImgThree, active: false },
    { id: 4, title: 'Week 4: Push/Pull/Legs', subtitle: ' Beginner / 5 Set', bgimg : HomeScreenCardImgTwo, active: false },
  ]

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
      <View style={styles.containerpadding}>
        <View style={styles.topbarcontainer}>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.title}>Andrew Ainsley</Text>
          </View>
          <View style={styles.iconContainer}>
            <Pressable>
              <HeartHomeIcon onPress={() => navigation.navigate('BookmarkScreen')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Notification')}>
              <BellHomeIcon />
            </Pressable>
          </View>
        </View>
        <View style={styles.calendercontainer}>
          <Pressable>
            <Text style={styles.calendertext}>{month}, {date.getFullYear()}</Text>
          </Pressable>
          <CalendarHomeIcon />
        </View>
      </View>
      <View style={{ position: 'relative', height: 80 }}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.datecardcontainer}>
            {finishedArr.map((date, index) => {
              return (
                <View style={[styles.datecard, { backgroundColor: date.istoday ? '#FE632B' : '#202125', width: date.istoday ? 57 : 50, height: date.istoday ? 80 : 70 }]} key={index}>
                  <Text style={styles.datetext}>{date.date}</Text>
                  <Text style={styles.daytext}>{date.day}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerpaddingflex}>
        <View style={styles.workouttopcontainer}>
          <Text style={styles.workoutactivitytitle}>Workout activity</Text>
          <Pressable><Text style={styles.workoutcontainerbuttontext}>see all</Text></Pressable>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activitycardoutside}>
              <ImageBackground style={styles.workoutactivitycard} source={item.bgimg}>
                <View style={[styles.activitycardinside, {backgroundColor: item.active ? 'transparent' : '#00000059'}]}>
                  <Text style={styles.workoutactivitycardtitle}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                    <SubtitleHomeScreenIcon />
                    <Text style={styles.workoutactivitycardsubtitle}> {item.subtitle}</Text>
                  </View>
                  <Pressable onPress={() => item.active === true && navigation.navigate('SessionDetailsScreen')} style={[styles.cardbutton, { backgroundColor: item.active ? '#FE632B' : '#FE632B73' }]}>
                    <Text style={styles.carbbuttontext}>Start Session</Text>
                    {item.active === true ? <UnlockSessionHomeScreenIcon /> : <LockSessionHomeScreenIcon />}
                  </Pressable>
                </View>
              </ImageBackground>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#181717',
    position: 'relative',
    paddingTop: 40,
  },
  containerpadding: {
    paddingHorizontal: 20
  },
  containerpaddingflex: {
    paddingHorizontal: 20,
    flex: 1
  },
  topbarcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Urbanist',
    marginRight: 'auto'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 8,
  },
  scrollview: {
    position: 'absolute'
  },
  calendercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-between'
  },
  calendertext: {
    fontWeight: 'medium',
    fontSize: 17,
    fontFamily: 'Urbanist',
    color: '#FFFFFF'
  },
  datecardcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
    justifyContent: 'center'
  },
  datecard: {
    backgroundColor: '#202125',
    width: 50,
    height: 70,
    borderRadius: 10.91,
    justifyContent: 'center'
  },
  datetext: {
    fontSize: 20,
    fontFamily: 'Urbanist',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600'
  },
  daytext: {
    fontSize: 16,
    fontFamily: 'Urbanist',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600'
  },
  workouttopcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'flex-end',
    marginBottom: 12
  },
  workoutactivitytitle: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
    fontFamily: 'Urbanist'
  },
  workoutcontainerbuttontext: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FE632B',
    fontFamily: 'Urbanist'
  },
  activitycardinside: {
    height: 140,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activitycardoutside: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  workoutactivitycard: {
    borderRadius: 10
  },
  workoutactivitycardtitle: {
    fontSize: 15,
    fontWeight: 600,
    color: 'white'
  },
  workoutactivitycardsubtitle: {
    fontSize: 12,
    fontWeight: 600,
    color: 'white',
    marginStart: 5
  },
  cardbutton: {
    height: 32,
    borderRadius: 6,
    backgroundColor: '#FE632B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 5
  },
  carbbuttontext: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: 'white',
    marginEnd: 3
  }
})