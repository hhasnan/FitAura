import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        aboutData: {
            gender: '',
            age: 0,
            focusArea: '',
            actualGoal: '',
            workoutLevel: '',
            weight: '',
            height: '',
            subscriptionPlan: '',
            cardNumber: '',
            page: null
        }
    });

    const updateData = (key, value) => {
        setUserData((prev) => ({ ...prev, aboutData: { ...prev.aboutData, [key]: value } }))
    }

    return (
        <AppContext.Provider value={{ userData, updateData }}>
            {children}
        </AppContext.Provider>
    )
}
