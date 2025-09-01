import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AbsCardImg, ArmsCardImg, ChestCardImg, FullBodyCardImg, LegsCardImg, ShouldersCardImg } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'

const FocusAreaScreen = ({navigation}) => {

    const { userData, updateData } = useContext(AppContext)
    const [selected, setSelected] = useState('')
    const [focusArea, setFocusArea] = useState('')
    const focusAreas = [{ id: 0, name: 'Full Body', img: FullBodyCardImg }, { id: 1, name: 'Shoulders', img: ShouldersCardImg }, { id: 2, name: 'Chest', img: ChestCardImg }, { id: 3, name: 'Arms', img: ArmsCardImg }, { id: 4, name: 'Abs', img: AbsCardImg }, { id: 5, name: 'Legs', img: LegsCardImg }]

    const renderItems = ({ item: focusArea }) => {
        return (
            <View style={styles.focusareacardscontainer}>
                <Pressable onPress={() => { setSelected(focusArea.name); setFocusArea(focusArea.name); }} style={{ borderWidth: 1, borderRadius: 15, borderColor: selected === focusArea.name ? '#FE632B' : 'transparent' }}>
                    <ImageBackground source={focusArea.img} style={styles.cardbackground}>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardtitle}>{focusArea.name}</Text>
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
                <Text style={styles.progressText}>2/6</Text>
            </View>
            <Text style={styles.title}>What’s Your Focus Area?</Text>
            <Text style={styles.subtitle}>What’s Your Focus Area?</Text>
            <FlatList
                style={styles.FlatList}
                data={focusAreas}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.dummydiv}></View>
            <QuestionnaireButton style={styles.questionnaireButton} title={"Continue"} onPress={() => {focusArea === '' ? alert("Please select your focus area") :  (updateData('focusArea', focusArea), navigation.navigate('ActualGoalScreen'))}} />
        </View>
    )
}

export default FocusAreaScreen

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
        width: '33.34%',
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
    focusareacardscontainer: {
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
        marginStart: 16,
        marginBottom: 'auto',
    },
    dummydiv:{
        height: 90,
    }
})