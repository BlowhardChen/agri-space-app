import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from './src/screens/MapScreen';
import FieldScreen from './src/screens/FieldScreen';
import TaskScreen from './src/screens/TaskScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Fields') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} options={{ title: '地图' }} />
        <Tab.Screen name="Fields" component={FieldScreen} options={{ title: '地块' }} />
        <Tab.Screen name="Tasks" component={TaskScreen} options={{ title: '任务' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '我的' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
