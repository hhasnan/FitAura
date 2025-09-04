import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EllipseLoaderIcon } from '../../assets/icons'

const Loader = ({title}) => {
    return (
        <View style={styles.loadercontainer}>
            <View style={styles.loader}>
                <EllipseLoaderIcon />
                <Text style={styles.loadingText}>{title}</Text>
            </View>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    loadercontainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(24, 23, 23, 0.4)',
        marginVertical: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 1000,
    },
    loader: {
        width: 294,
        height: 169,
        backgroundColor: '#181717',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingTop: 5
    },
    loadingText: {
        marginTop: 30,
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 600,
        textAlign: 'center'
    }
})