import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>农事管理</Text>
      <Text style={styles.description}>这里将显示农事任务列表和相关功能</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default TaskScreen;