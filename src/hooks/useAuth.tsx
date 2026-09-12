import React, {createContext, useContext, useEffect, useState} from "react";
import {UserInfo} from "@/types/user";
import {getToken, removeToken, setToken, setUserInfo} from "@/utils/tokenUtils";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string, userInfo: UserInfo) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      const token = await getToken();
      setIsLoggedIn(!!token);
    };

    initAuth();
  }, []);

  const login = async (token: string, userInfo: UserInfo) => {
    await setToken(token);
    await setUserInfo(userInfo);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await removeToken();
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
