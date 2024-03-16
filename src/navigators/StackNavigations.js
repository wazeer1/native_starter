import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './TabNavigations';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={MainTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
