import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TickIcon } from '../../../assets/icons';
import QuestionnaireButton from '../../components/QuestionnaireButton';
import { AppContext } from '../../Context/AppContext';
import FeatureCard from '../../components/FeatureCard';

const SubscriptionScreen = ({navigation}) => {

    const [monthlyPlan, setMonthlyPlan] = useState(true);
    
    const { userData, updateData } = useContext(AppContext)

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <View style={styles.progresscontainer}>
                <View style={styles.progressbar}>
                    <View style={styles.progress} />
                </View>
                <Text style={styles.progressText}>6/6</Text>
            </View>
            <Text style={styles.title}>Choose Your Plan</Text>
            <Text style={styles.subtitle}>Unlock full access to premium workouts</Text>
            <View style={styles.paymentbuttoncontainer}>
                <Pressable style={[styles.paymentbutton, { backgroundColor: monthlyPlan ? '#FE632B' : 'white' }]} onPress={() => setMonthlyPlan(true)}>
                    <Text style={[styles.paymentbuttontext, { color: monthlyPlan ? 'white' : 'black' }]}>Monthly</Text>
                </Pressable>
                <Pressable style={[styles.paymentbutton, { backgroundColor: !monthlyPlan ? '#FE632B' : 'white' }]} onPress={() => setMonthlyPlan(false)}>
                    <Text style={[styles.paymentbuttontext, { color: !monthlyPlan ? 'white' : 'black' }]}>Yearly</Text>
                </Pressable>
            </View>
            <FeatureCard monthlyPlan={monthlyPlan} />
            <QuestionnaireButton title={monthlyPlan ? 'Continue $4.99' : 'Continue $49.99'} onPress={() => { updateData('subscriptionPlan', monthlyPlan ? 'monthly' : 'yearly'); updateData('page', 1); navigation.navigate('CardInformationScreen'); }} />
        </View>
    )
}

export default SubscriptionScreen

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
        width: '100%',
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
    paymentbuttoncontainer: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    paymentbutton: {
        height: 44,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    paymentbuttontext: {
        fontSize: 16,
        fontWeight: 'semi-bold',
    },
    
})