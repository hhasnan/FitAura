import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionnaireButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default QuestionnaireButton

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        borderTopColor: '#242323',
        borderTopWidth: 2,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 15,
        backgroundColor: '#FE632B',
        borderRadius: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    }
})