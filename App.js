import { NavigationContainer } from '@react-navigation/native';
import Screen01 from './components/Screen1';
import Screen02 from './components/Screen2';
import { createStackNavigator } from '@react-navigation/stack';

// Tạo đối tượng Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        {/* Định nghĩa màn hình 'Home' với component là 'Screen1' */}
        <Stack.Screen name='Home' component={Screen01} />
        {/* Định nghĩa màn hình 'Detail' với component là 'Screen2' */}
        <Stack.Screen name='Detail' component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
