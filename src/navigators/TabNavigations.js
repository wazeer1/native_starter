import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/HomeScreen';
import ProfileScreen from '../modules/home/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
