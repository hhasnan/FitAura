import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HistoryBottombarIcon, HomeBottombaricon, ProfileBottombarIcon, ReportBottomIcon } from "../../assets/icons";
import HomeScreen from "../pages/HomeScreen";
import ReportScreen from "../pages/ReportScreen";
import HistoryScreen from "../pages/HistoryScreen";
import ProfileScreen from "../pages/ProfileScreen";

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
        <Tab.Screen
            name="Report"
            component={ReportScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <ReportBottomIcon fill={color} width={28} height={28} />
                )
            }}
        />
        <Tab.Screen
            name='History'
            component={HistoryScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <HistoryBottombarIcon fill={color} width={28} height={28}/>
                )
            }}
        />
        <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <ProfileBottombarIcon fill={color} width={28} height={28}/>
                )
            }}
        />
    </Tab.Navigator>
)

const TabNavigator = () => (
    <MyTabs />
)

export default TabNavigator