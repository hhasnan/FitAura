import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { BackArrowIcon, BuildMuscleImg, GainWeightImg, ImproveFlexibilityImg, ImproveOverallFitnessImg, IncreaseEnduranceImg, LoseWeightImg } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'
import { useNavigation } from '@react-navigation/native'

const ChangeWorkoutPlanScreen = () => {

    const navigation = useNavigation()
    const { userData, updateData } = useContext(AppContext)
    const [selected, setSelected] = useState('')
    const [actualGoal, setActualGoal] = useState('')
    const ActualGoals = [{ id: 0, name: 'Lose Weight', img: LoseWeightImg }, { id: 1, name: 'Gain Weight', img: GainWeightImg }, { id: 2, name: 'Improve Flexibility', img: ImproveFlexibilityImg }, { id: 3, name: 'Build Muscle', img: BuildMuscleImg }, { id: 4, name: 'Increase Endurance', img: IncreaseEnduranceImg }, { id: 5, name: 'Improve Overall Fitness', img: ImproveOverallFitnessImg }]

    const renderItems = ({ item: actualGoal }) => {
        return (
            <View style={styles.actualgoalscardscontainer}>
                <Pressable onPress={() => { setSelected(actualGoal.name); setActualGoal(actualGoal.name); }} style={{ borderWidth: 1, borderRadius: 15, borderColor: selected === actualGoal.name ? '#FE632B' : 'transparent' }}>
                    <ImageBackground source={actualGoal.img} style={styles.cardbackground}>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardtitle}>{actualGoal.name}</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <View>
                <Pressable onPress={() => navigation.navigate('MainTabs',{ screen: 'Profile'})} style={styles.headercontent}>
                    <BackArrowIcon />
                </Pressable>
            </View>
            <Text style={styles.title}>Change Workout Plan</Text>
            <Text style={styles.subtitle}>Where would you like  to build your focus?</Text>
            <FlatList
                style={styles.FlatList}
                data={ActualGoals}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.dummydiv}></View>
            <QuestionnaireButton style={styles.questionnaireButton} title={"Continue"} onPress={() => { actualGoal === '' ? alert("Please select your actual goal") : (updateData('actualGoal', actualGoal), console.log(userData), navigation.navigate('MainTabs',{ screen: 'Profile'})) }} />
        </View>
    )
}

export default ChangeWorkoutPlanScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
        position: 'relative',
        paddingTop: 40
    },
    headercontent: {
        flexDirection: 'row',
        alignItems: 'center',
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
    FlatList: {
        marginTop: 24,
    },
    actualgoalscardscontainer: {
        marginBottom: 7,
    },
    cardbackground: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardcontent: {
        borderRadius: 15,
        height: 110,
        width: '100%',
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: 'semi-bold',
        color: 'white',
        fontFamily: 'Urbanist',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginStart: 16,
    },
    dummydiv: {
        height: 90,
    }
})