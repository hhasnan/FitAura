import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Splash from "../pages/Splash/Splash";
import Welcome from "../pages/Welcome/Welcome";
import OnBoardingScreen from "../pages/OnBoardingScreen/Index";
import AuthScreen from "../pages/AuthScreen";
import ForgotPasswordScreen from "../pages/ForgotPasswordScreen";
import OtpVerificationScreen from '../pages/OtpVerficationScreen'
import PasswordResetScreen from "../pages/PasswordresetScreen";
import SuccessfullyResetScreen from "../pages/SuccessfullyResetScreen";
import SelectGenderScreen from "../pages/SelectGenderScreen";
import { AppProvider } from "../Context/AppContext";
import FocusAreaScreen from "../pages/FocuseAreaScreen";
import ActualGoalScreen from "../pages/ActualGoalScreen";
import WorkoutLevelScreen from "../pages/WorkoutLevelScreen";
import BMIScreen from "../pages/BMIScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const navigation = useNavigation()
    const [splash, setSplash] = useState(true)
    const [welcome, setWelcome] = useState(true)

    // useEffect(() => {
    //     const splashTimer = setTimeout(() => {
    //         navigation.navigate('Welcome');
    //         setSplash(false)
    //     }, 3000);

    //     const onboardingTimer = setTimeout(() => {
    //         navigation.navigate('OnboardingScreen');
    //         setWelcome(false)
    //     }, 6000);

    //     return () => {
    //         clearTimeout(splashTimer);
    //         clearTimeout(onboardingTimer);
    //     };
    // }, []);

    return (
        <AppProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BMIScreen">
                {splash && <Stack.Screen name="Splash" component={Splash} />}
                {welcome && <Stack.Screen name="Welcome" component={Welcome} />}
                <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
                <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
                <Stack.Screen name="SuccessfullyResetScreen" component={SuccessfullyResetScreen} />
                <Stack.Screen name="SelectGenderScreen" component={SelectGenderScreen} />
                <Stack.Screen name="FocusAreaScreen" component={FocusAreaScreen} />
                <Stack.Screen name="ActualGoalScreen" component={ActualGoalScreen} />
                <Stack.Screen name="WorkoutLevelScreen" component={WorkoutLevelScreen} />
                <Stack.Screen name="BMIScreen" component={BMIScreen} />
                <Stack.Screen name="MainTabs" component={TabNavigator} />
            </Stack.Navigator>
        </AppProvider>

    );
};

export default StackNavigator;
