import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MasterCardLogoIcon, PlusIcon } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton'
import { AppContext } from '../../Context/AppContext'

const AddScreenScreen = ({ navigation }) => {

    const { userData } = useContext(AppContext);
    const value = userData.aboutData.cardNumber.slice(-4);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <Text style={styles.title}>Payment Method</Text>
            <Text style={styles.subtitle}>Add a payment method for subscription</Text>
            <View style={styles.cardinfocontainer}>
                <MasterCardLogoIcon />
                <Text style={styles.cardinfotext}>.... .... .... {value}</Text>
            </View>
            <Pressable style={styles.addcardbutton} onPress={() => navigation.navigate('CardInformationScreen')}><PlusIcon/><Text style={styles.addcardbuttontext}>Add New Card</Text></Pressable>
            <QuestionnaireButton title={'Pay Now'} onPress={() => {navigation.navigate('ReviewSubscriptionScreen')}} />
        </View>
    )
}

export default AddScreenScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181717',
        paddingHorizontal: 20,
        position: 'relative',
        paddingTop: 30,
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
        marginTop: 20,
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
    addcardbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        height: 55,
        borderRadius: 10,
        borderColor: '#313131',
        borderWidth: 1,
        marginTop: 'auto',
        marginBottom: 120
    },
    addcardbuttontext: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        fontFamily: 'Urbanist',
        paddingLeft: 10
    }
})