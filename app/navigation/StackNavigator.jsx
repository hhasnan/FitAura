import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import SubscriptionScreen from "../pages/SubscrptionScreen";
import CardInformationScreen from "../pages/CardInformationScreen";
import AddScreenScreen from "../pages/AddCardScreen";
import ReviewSubscriptionScreen from "../pages/ReviewSubscriptionScreen";
import GeneratingPlanScreen from "../pages/GeneratingPlanScreen";
import NotificationScreen from "../pages/NotificationScreen";
import BookmarkScreen from "../pages/BookmarkScreen";
import SessionDetailScreen from "../pages/SessionDetailScreen";
import WeeklyWorkoutsScreen from "../pages/WeeklyWorkoutsScreen";
import WorkoutDemoScreen from "../pages/WorkoutDemoScreen";
import ExcerciseVideoScreen from "../pages/ExcerciseVideoScreen";
import RestartExcerciseScreen from "../pages/RestartExcerciseScreen";
import CalendarScreen from "../pages/CalendarScreen";
import FAQScreen from "../pages/FAQScreen";
import AboutUsScreen from "../pages/AboutUsScreen";
import SettingScreen from "../pages/SettingScreen";
import ChangeWorkoutPlanScreen from "../pages/ChangeWorkoutPlanScreen";
import CurrentPlanScreen from "../pages/CurrentPlanScreen";
import UpgradePlanScreen from "../pages/UpgradePlanScreen";
import PlanUpdateSuccesfullyScreen from "../pages/PlanUpdateSuccesfullyScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const navigation = useNavigation()
    const [splash, setSplash] = useState(true)
    const [welcome, setWelcome] = useState(true)

    useEffect(() => {
        const splashTimer = setTimeout(() => {
            navigation.navigate('Welcome');
            setSplash(false)
        }, 3000);

        const onboardingTimer = setTimeout(() => {
            navigation.navigate('OnboardingScreen');
            setWelcome(false)
        }, 6000);

        return () => {
            clearTimeout(splashTimer);
            clearTimeout(onboardingTimer);
        };
    }, []);

    return (
        <AppProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
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
                <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
                <Stack.Screen name="CardInformationScreen" component={CardInformationScreen} />
                <Stack.Screen name="AddCardScreen" component={AddScreenScreen} />
                <Stack.Screen name="ReviewSubscriptionScreen" component={ReviewSubscriptionScreen} />
                <Stack.Screen name="GeneratingPlanScreen" component={GeneratingPlanScreen} />
                <Stack.Screen name="Notification" component={NotificationScreen} 
                // options={{ headerShown: true, headerStyle: {backgroundColor: '#181717', elevation: 0, shadowColor: 'transparent', }, headerTintColor: '#fff'}}  
                />
                <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
                <Stack.Screen name="SessionDetailsScreen" component={SessionDetailScreen} />
                <Stack.Screen name="WeeklyWorkoutsScreen" component={WeeklyWorkoutsScreen} />
                <Stack.Screen name="WorkoutDemoScreen" component={WorkoutDemoScreen} />
                <Stack.Screen name="ExcerciseVideoScreen" component={ExcerciseVideoScreen} />
                <Stack.Screen name="RestartExcerciseScreen" component={RestartExcerciseScreen} />
                <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
                <Stack.Screen name="FAQScreen" component={FAQScreen} />
                <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
                <Stack.Screen name="ChangeWorkoutPlanScreen" component={ChangeWorkoutPlanScreen} />
                <Stack.Screen name="CurrentPlanScreen" component={CurrentPlanScreen} />
                <Stack.Screen name="UpgradePlanScreen" component={UpgradePlanScreen} />
                <Stack.Screen name="PlanUpdateSuccesfullyScreen" component={PlanUpdateSuccesfullyScreen} />
                <Stack.Screen name="MainTabs" component={TabNavigator} />
            </Stack.Navigator>
        </AppProvider>

    );
};

export default StackNavigator;
