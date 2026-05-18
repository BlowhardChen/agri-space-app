import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FieldStackParamList } from '@/types/navigation';
import FieldManagementScreen from '@/screens/FieldScreen/FieldManagementScreen';

const Stack = createStackNavigator<FieldStackParamList>();

const FieldStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FieldList" component={FieldManagementScreen} />
      {/* 可以在这里添加更多的土地管理相关页面 */}
    </Stack.Navigator>
  );
};

export default FieldStackNavigator;