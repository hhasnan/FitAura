import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TickIcon } from '../../assets/icons'

const FeatureCard = ({ monthlyPlan }) => {

    const data = ['Ad-free experience', 'Unlimited goals: Set and manage an unlimited number of goals', 'Advanced habit and task tracking features', 'Customizable goal templates', 'Advanced AI-powered features', 'Priority customer support']

  return (
    <View style={styles.featurecontainer}>
                <View style={[styles.discounttag, {display: monthlyPlan ? 'none' : 'flex' }]}>
                    <Text style={styles.discounttagtext}>SAVE 17%</Text>
                </View>
                <View style={styles.featuretitle}>
                    <Text style={styles.featuretitletext}>FitAura Premium</Text>
                    <Text style={styles.featurepackagetext}>{monthlyPlan ? '$4.99' : '$49.99'}<Text style={styles.featurepackagetext1}>/Monthly</Text></Text>
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
  )
}

export default FeatureCard

const styles = StyleSheet.create({
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
        width: 68,
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
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: 'medium',
        color: 'white'
    }
})