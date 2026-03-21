import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskStackParamList } from '@/types/navigation';
import TaskManagementScreen from '@/screens/TaskScreen/TaskManagementScreen';

const Stack = createStackNavigator<TaskStackParamList>();

const TaskStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TaskList" component={TaskManagementScreen} />
      {/* 可以在这里添加更多的任务管理相关页面 */}
    </Stack.Navigator>
  );
};

export default TaskStackNavigator;