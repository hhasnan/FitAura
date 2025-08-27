import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Splash from "../pages/Splash/Splash";
import Welcome from "../pages/Welcome/Welcome";
import OnBoardingScreen from "../pages/OnBoardingScreen/Index";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            {splash && <Stack.Screen name="Splash" component={Splash} />}
            {welcome && <Stack.Screen name="Welcome" component={Welcome} />}
            <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="MainTabs" component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
