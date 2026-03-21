import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileStackParamList } from '@/types/navigation';
import ProfileScreen from '@/screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} />
      {/* 可以在这里添加更多的个人中心相关页面 */}
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;