import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const MyTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
    </Tab.Navigator>
)

const TabNavigator = () => (
    <MyTabs />
)

export default TabNavigator