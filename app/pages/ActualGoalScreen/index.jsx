import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { BuildMuscleImg, GainWeightImg, ImproveFlexibilityImg, ImproveOverallFitnessImg, IncreaseEnduranceImg, LoseWeightImg } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'

const ActualGoalScreen = ({navigation}) => {

    const { userData, updateData } = useContext(AppContext)
    const [selected, setSelected] = useState('')
    const [actualGoal, setActualGoal] = useState('')
    const ActualGoals = [{ id: 0, name: 'Lose Weight', img: LoseWeightImg }, { id: 1, name: 'Gain Weight', img: GainWeightImg }, { id: 2, name: 'Improve Flexibility', img: ImproveFlexibilityImg }, { id: 3, name: 'Build Muscle', img: BuildMuscleImg  }, { id: 4, name: 'Increase Endurance', img: IncreaseEnduranceImg }, { id: 5, name: 'Improve Overall Fitness', img: ImproveOverallFitnessImg }]

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
            <View style={styles.progresscontainer}>
                <View style={styles.progressbar}>
                    <View style={styles.progress} />
                </View>
                <Text style={styles.progressText}>3/6</Text>
            </View>
            <Text style={styles.title}>What’s Your Actual Goal?</Text>
            <Text style={styles.subtitle}>Where would you like  to build your focus?</Text>
            <FlatList
                style={styles.FlatList}
                data={ActualGoals}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.dummydiv}></View>
            <QuestionnaireButton style={styles.questionnaireButton} title={"Continue"} onPress={() => {actualGoal === '' ? alert("Please select your actual goal") :  (updateData('actualGoal', actualGoal), console.log(userData), navigation.navigate('WorkoutLevelScreen'))}} />
        </View>
    )
}

export default ActualGoalScreen

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
        width: '50.01%',
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
    dummydiv:{
        height: 90,
    }
})