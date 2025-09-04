import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FeatureCard from '../../components/FeatureCard'
import { AppContext } from '../../Context/AppContext';
import QuestionnaireButton from '../../components/QuestionnaireButton';
import { MasterCardLogoIcon } from '../../../assets/icons';
import Loader from '../../components/Loader';

const ReviewSubscriptionScreen = ({ navigation }) => {

    const { userData } = useContext(AppContext);
    const [monthlyPlan, setMonthlyPlan] = useState(true);

    useEffect(() => {
        setMonthlyPlan(userData.aboutData.subscriptionPlan === 'monthly' ? true : false);
    }, [userData.aboutData.subscriptionPlan])

    return (
        <View>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
                <Text style={styles.title}>Review Summary</Text>
                <Text style={styles.subtitle}>Review your plan before subscription</Text>
                <FeatureCard monthlyPlan={monthlyPlan} />
                <ScrollView>
                    <View style={styles.cardinfotextContainer}>
                        <Text style={styles.cardInfoText}>Payment Method</Text>
                        <Pressable onPress={() => navigation.navigate('CardInformationScreen')}><Text style={styles.cardInfobuttontext}>Change</Text></Pressable>
                    </View>
                    <View style={styles.cardinfocontainer}>
                        <MasterCardLogoIcon />
                        <Text style={styles.cardinfotext}>.... .... .... {userData.aboutData.cardNumber.slice(-4)}</Text>
                    </View>
                    <View style={{ height: 90 }}><Text>dummy</Text></View>
                </ScrollView>
                <QuestionnaireButton title={'Continue'} onPress={() => navigation.navigate('GeneratingPlanScreen')} />
            </View>
        </View>
    )
}

export default ReviewSubscriptionScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
        position: 'relative',
        paddingTop: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Urbanist',
        paddingTop: 15,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'regular',
        color: 'white',
        fontFamily: 'Urbanist',
        paddingTop: 5,
    },
    cardinfocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#202125',
        height: 80,
        paddingHorizontal: 15,
        borderColor: '#FE632B',
        borderWidth: 0.4,
        borderRadius: 10
    },
    cardinfotext: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        fontFamily: 'Urbanist',
        paddingLeft: 10
    },
    cardinfotextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    cardInfoText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Urbanist',
    },
    cardInfobuttontext: {
        fontSize: 12,
        fontWeight: 'semi-bold',
        color: '#FE632B',
        fontFamily: 'Urbanist',
    }
})