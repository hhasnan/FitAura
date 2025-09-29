import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BackArrowIcon, TickIcon } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import FeatureCard from '../../components/FeatureCard'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'

const UpgradePlanScreen = () => {
    const navigation = useNavigation()
    const data = ['Ad-free experience', 'Unlimited goals: Set and manage an unlimited number of goals', 'Advanced habit and task tracking features', 'Customizable goal templates', 'Advanced AI-powered features', 'Priority customer support']
    const { updateData } = useContext(AppContext)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#181717'} />
            <View>
                <Pressable onPress={() => navigation.navigate('MainTabs', { screen: 'Profile' })} style={styles.headercontent}>
                    <BackArrowIcon />
                </Pressable>
            </View>
            <Text style={styles.title}>Upgarde to Premium</Text>
            <Text style={styles.subtitle}>Unlock full access to premium workouts</Text>
            <View style={styles.featurecontainer}>
                <View style={[styles.discounttag, { display: 'flex' }]}>
                    <Text style={styles.discounttagtext}>Most Popular</Text>
                </View>
                <View style={styles.featuretitle}>
                    <Text style={styles.featuretitletext}>FitAura Premium</Text>
                    <Text style={styles.featurepackagetext}>$44.99<Text style={styles.featurepackagetext1}>/Monthly</Text></Text>
                </View>
                <View style={styles.servicescontainer}>
                    {data.map((item, index) => (
                        <View style={styles.service} key={index}>
                            <TickIcon />
                            <Text style={styles.servicetext}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <QuestionnaireButton title={'Continue $49.99'} onPress={() => {updateData('page', 2); navigation.navigate('CardInformationScreen')}} />
        </View>
    )
}

export default UpgradePlanScreen

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
    title: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        textAlign: 'center',
        marginTop: 16,
    },
    subtitle: {
        color: '#C3C3C3',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Urbanist',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 32
    },
    headertext: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 700,
        fontFamily: 'Urbanist',
        marginStart: 15
    },
    featurecontainer: {
        backgroundColor: '#202125',
        borderRadius: 5,
        marginTop: 20,
    },
    featuretitletext: {
        fontSize: 21,
        fontWeight: 'semi-bold',
        color: 'white',
        fontFamily: 'Urbanist',
        textAlign: 'center',
        paddingVertical: 20,
    },
    featuretitle: {
        width: '90%',
        marginHorizontal: 'auto'
    },
    featurepackagetext: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Urbanist',
        textAlign: 'center',
        paddingBottom: 18,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: 1,
    },
    featurepackagetext1: {
        fontSize: 16,
        fontWeight: 'semi-bold',
        color: 'white',
        fontFamily: 'Urbanist',
    },
    servicescontainer: {
        paddingHorizontal: '5%',
        paddingBottom: 20
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
    discounttag: {
        width: 78,
        height: 27,
        backgroundColor: '#FE632B',
        borderTopEndRadius: 5,
        borderBottomStartRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10
    },
    discounttagtext: {
        fontSize: 12,
        fontFamily: 'Urbanist',
        fontWeight: 'medium',
        color: 'white'
    }
})