import AsyncStorage from '@react-native-async-storage/async-storage';

export const isTokenValid = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('token');
    // 这里应该检查token的有效性，比如验证过期时间等
    // 目前简单返回是否存在token
    return !!token;
  } catch (error) {
    console.error('检查token失败:', error);
    return false;
  }
};