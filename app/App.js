import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import StackScreen from './screens/StackScreen';
import TopicsScreen from './screens/TopicsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Stack" component={StackScreen} />
        <Tab.Screen name="Topics" component={TopicsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;