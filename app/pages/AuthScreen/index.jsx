    import { StyleSheet, Text, View } from 'react-native'
    import React, { useState } from 'react'
    import Login from '../../components/Login'
    import SignUp from '../../components/SignUp'


    const Index = () => {

        const [ login, setLogin ] = useState(true)

    return (
        <View>
            {login && <Login setLogin={setLogin}/>}
            {login === false && <SignUp setLogin={setLogin}/>}
        </View>
    )
    }

    export default Index

    const styles = StyleSheet.create({})