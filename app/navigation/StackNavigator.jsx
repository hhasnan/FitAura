import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabNavigator from "./TabNavigator";
import Splash from "../pages/Splash/Splash";
import Welcome from "../pages/Welcome/Welcome";
import OnBoardingScreen from "../pages/OnBoardingScreen/Index";

const Stack = createNativeStackNavigator();

const MyStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
)

const StackNavigator = () => (
    <MyStack />
)

export default StackNavigator
