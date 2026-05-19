import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "userToken";
const TOKEN_EXPIRES_AT_KEY = "tokenExpiresAt";
const USER_INFO_KEY = "userInfo";

export const isTokenValid = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const expiresAt = await AsyncStorage.getItem(TOKEN_EXPIRES_AT_KEY);

    if (!token || !expiresAt) {
      return false;
    }

    return Date.now() < Number(expiresAt);
  } catch (error) {
    console.error("Failed to validate token:", error);
    return false;
  }
};

export const getUserInfoFromStorage = async () => {
  try {
    const raw = await AsyncStorage.getItem(USER_INFO_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Failed to load user info:", error);
    return null;
  }
};
