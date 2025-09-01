import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaleGenderCardImg, FemaleGenderCardImg } from '../../../assets/icons'
import AgeRuler from '../../components/AgeSlider'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'


const SelectGenderScreen = ({navigation}) => {

    const {userData, updateData} = useContext(AppContext)

    const [selected, setSelected] = useState('')
    const [age, setAge] = useState(10)
    const [gender, setGender] = useState('')
    const options = [{name: 'Male', img: MaleGenderCardImg}, {name: 'Female', img: FemaleGenderCardImg}]


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <View style={styles.progresscontainer}>
                <View style={styles.progressbar}>
                    <View style={styles.progress} />
                </View>
                <Text style={styles.progressText}>1/6</Text>
            </View>
            <Text style={styles.title}>Tell us About Yourself</Text>
            <Text style={styles.subtitle}>Let’s start by understanding you</Text>
            <View style={styles.gendercardscontainer}>
                {options.map((gender, index) => (
                    <Pressable key={index} onPress={() => {setSelected(gender.name); setGender(gender.name);}} style={{borderWidth: 1,borderRadius: 15, borderColor: selected === gender.name ? '#FE632B' : 'transparent'}}>
                        <ImageBackground source={gender.img} style={styles.cardbackground}>
                            <View style={styles.cardcontent}>
                                <Text style={styles.cardtitle}>{gender.name}</Text>
                            </View>
                        </ImageBackground>
                    </Pressable>
                ))}
            </View>
            <View style={styles.agecontainer}>
                <Text style={styles.agetitle}>Age</Text>
                <AgeRuler age={age} setAge={setAge} />
            </View>
            <View style={styles.dummydiv}></View>
            <QuestionnaireButton style={styles.questionnaireButton} title={"Continue"} onPress={() => {gender === '' ? alert("Please select your gender") :  (updateData('age', age), updateData('gender', gender), navigation.navigate('FocusAreaScreen'))}} />
        </View>
    )
}

export default SelectGenderScreen

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
        width: '16.67%',
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
    gendercardscontainer: {
        gap: 10,
        marginTop: 24,
    },
    cardbackground: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardcontent: {
        borderRadius: 15,
        height: 130,
        width: '100%',
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: 'semi-bold',
        color: 'white',
        fontFamily: 'Urbanist',
        marginTop: 'auto',
        marginStart: 16,
        marginBottom: 16,
    },
    agecontainer: {
        marginTop: 40,
    },
    agetitle: {
        fontSize: 24,
        fontWeight: 'semi-bold',
        color: 'white',
        fontFamily: 'Urbanist',
        marginBottom: 16,
    },
    dummydiv:{
        height: 90,
    }
})