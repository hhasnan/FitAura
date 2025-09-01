import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AdvancedLevelImg, BeginnerLevelImg, IntermediateLevelImg } from '../../../assets/icons'
import { AppContext } from '../../Context/AppContext'
import QuestionnaireButton from '../../components/QuestionnaireButton'

const WorkoutLevelScreen = ({ navigation }) => {

    const {userData, updateData} = useContext(AppContext)
    const [workoutLevel, setWorkoutLevel] = useState('')
    const [selected, setSelected] = useState('')
    const options = [{ name: 'Beginner Level', img: BeginnerLevelImg }, { name: 'Intermediate Level', img: IntermediateLevelImg }, { name: 'Advanced Level', img: AdvancedLevelImg }]

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <View style={styles.progresscontainer}>
                <View style={styles.progressbar}>
                    <View style={styles.progress} />
                </View>
                <Text style={styles.progressText}>4/6</Text>
            </View>
            <Text style={styles.title}>Select Your Workout Level</Text>
            <Text style={styles.subtitle}>Pick a level that suits your goals</Text>
            <View style={styles.workoutlevelcardscontainer}>
                {options.map((workoutLevel, index) => (
                    <Pressable key={index} onPress={() => { setSelected(workoutLevel.name); setWorkoutLevel(workoutLevel.name); }} style={{ borderWidth: 1, borderRadius: 15, borderColor: selected === workoutLevel.name ? '#FE632B' : 'transparent' }}>
                        <ImageBackground source={workoutLevel.img} style={styles.cardbackground}>
                            <View style={styles.cardcontent}>
                                <View style={styles.cardtextcontainer}>
                                    <Text style={styles.cardtitle}>{workoutLevel.name}</Text>
                                    <Text style={styles.cardsubtitle}>Full Equipment</Text>
                                    <Text style={styles.cardsubtitle}>Strength</Text>
                                    <Text style={styles.cardsubtitle}>Total Time: 4 Weeks</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </Pressable>
                ))}
            </View>
            <QuestionnaireButton style={styles.questionnaireButton} title={"Continue"} onPress={() => { workoutLevel === '' ? alert("Please select your workout level") : (updateData('workoutLevel', workoutLevel),console.log(userData) ,navigation.navigate('FocusAreaScreen')) }} />
        </View>
    )
}

export default WorkoutLevelScreen

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
        width: '66.77%',
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
    workoutlevelcardscontainer: {
        gap: 10,
        marginTop: 24,
    },
    cardbackground: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardcontent: {
        borderRadius: 15,
        height: 155,
        width: '100%',
    },
    cardtextcontainer: {
        marginVertical: 'auto'
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: 'semi-bold',
        color: '#FE632B',
        fontFamily: 'Urbanist',
        marginStart: 16,
        marginBottom: 8,
    },
    cardsubtitle: {
        fontSize: 15,
        fontWeight: 'medium',
        color: 'white',
        fontFamily: 'Urbanist',
        marginStart: 16,
        marginBottom: 2,
    }
})