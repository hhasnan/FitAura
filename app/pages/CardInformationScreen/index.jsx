import { StatusBar, StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { DemoCardImg } from '../../../assets/icons'
import QuestionnaireButton from '../../components/QuestionnaireButton';
import { AppContext } from '../../Context/AppContext';

const CardInformationScreen = ({navigation}) => {

    const { userData, updateData } = useContext(AppContext);
    const [value, setValue] = useState("");

    const handleChange = (text) => {
        // remove all spaces first
        let newText = text.replace(/\s/g, "");

        // add space after every 4 characters
        newText = newText.match(/.{1,4}/g)?.join(" ") || "";

        setValue(newText);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#181717" translucent />
            <Text style={styles.title}>Add Payment Method</Text>
            <Text style={styles.subtitle}>Add a payment method for subscription</Text>
            
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS = padding, Android = height
            >
                <ScrollView>
                    <Image source={DemoCardImg} style={styles.image} />
                    <View style={styles.inputscontainer}>
                        <Text style={styles.inputLabel}>Name On Card</Text>
                        <TextInput style={styles.input} placeholder="Enter Name On Card" placeholderTextColor="#888" />
                        <Text style={styles.inputLabel}>Card Number</Text>
                        <TextInput style={styles.input} placeholder="Enter Card Number" placeholderTextColor="#888" value={value} onChangeText={handleChange} keyboardType="numeric" maxLength={19} />
                        <View style={styles.expiryContainer}>
                            <View style={styles.smallInputcontainer}>
                                <Text style={styles.inputLabel}>Exp Date</Text>
                                <TextInput style={[styles.input, styles.smallInput]} placeholder="Expiry Date" placeholderTextColor="#888" />
                            </View>
                            <View style={[styles.smallInputcontainer, { marginLeft: 'auto', marginRight: 3 }]}>
                                <Text style={styles.inputLabel}>CVC</Text>
                                <TextInput style={[styles.input, styles.smallInput]} placeholder="Enter CVC" placeholderTextColor="#888" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <QuestionnaireButton title="Add Card" buttonPosition="relative" onPress={() => { navigation.navigate('AddCardScreen'); updateData('cardNumber', value); console.log(userData.aboutData.cardNumber) }} />
        </View>
    )
}

export default CardInformationScreen

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
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop: 20,
    },
    inputscontainer: {
        marginTop: 5,
        marginBottom: 80
    },
    inputLabel: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        color: 'white',
        fontWeight: 'semibold',
        paddingBottom: 10
    },
    input: {
        fontSize: 18,
        fontFamily: 'Urbanist',
        color: 'white',
        borderWidth: 0.4,
        borderColor: 'grey',
        paddingStart: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    expiryContainer: {
        flexDirection: 'row',
    },
    smallInputcontainer: {
        width: '47%',
    }
})