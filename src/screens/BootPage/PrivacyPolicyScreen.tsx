import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PrivacyPolicy'>;
};

const PrivacyPolicyScreen: React.FC<Props> = ({ navigation }) => {
  const handleAgree = async () => {
    await AsyncStorage.setItem('userAgreed', 'true');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>隐私政策</Text>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>
          欢迎使用我们的应用。我们重视您的隐私，致力于保护您的个人信息。
          本隐私政策解释了我们如何收集、使用和保护您的信息。
        </Text>
        <Text style={styles.text}>
          1. 我们收集的信息：
          - 您的用户名和密码
          - 您的设备信息
          - 您的使用数据
        </Text>
        <Text style={styles.text}>
          2. 我们如何使用您的信息：
          - 提供和改进我们的服务
          - 保护您的账户安全
          - 与您沟通
        </Text>
        <Text style={styles.text}>
          3. 我们如何保护您的信息：
          - 使用加密技术
          - 限制访问
          - 定期更新安全措施
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleAgree}>
        <Text style={styles.buttonText}>同意并继续</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyScreen;