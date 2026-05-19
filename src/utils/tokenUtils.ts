import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserInfo} from "@/types/user";

const TOKEN_KEY = "userToken";
const TOKEN_EXPIRES_AT_KEY = "tokenExpiresAt";
const USER_INFO_KEY = "userInfo";

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const setToken = async (token: string) => {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(TOKEN_EXPIRES_AT_KEY, expiresAt.toString());
};

export const removeToken = async () => {
  await AsyncStorage.multiRemove([TOKEN_KEY, TOKEN_EXPIRES_AT_KEY, USER_INFO_KEY]);
};

export const setUserInfo = async (userInfo: UserInfo) => {
  await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

export const removeUserInfo = async () => {
  await AsyncStorage.removeItem(USER_INFO_KEY);
};
