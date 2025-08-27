import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./app/navigation/StackNavigator"

const App = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
)

export default App