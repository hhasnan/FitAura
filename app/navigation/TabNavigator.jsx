import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../pages/HomeScreen";
import { HomeBottombaricon } from "../../assets/icons";

const Tab = createBottomTabNavigator();

const MyTabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FE632B',
            tabBarInactiveTintColor: '#FFFFFFA3',
            tabBarStyle: {
                backgroundColor: '#181717',
                height: 80
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'semi-bold',
                marginBottom: 'auto'
            },
            tabBarIconStyle: {
                marginTop: 'auto'
            }
        }
        }>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <HomeBottombaricon fill={color} width={28} height={28} />
                )
            }}
        />
    </Tab.Navigator>
)

const TabNavigator = () => (
    <MyTabs />
)

export default TabNavigator