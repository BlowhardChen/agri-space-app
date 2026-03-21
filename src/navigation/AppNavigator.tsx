import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "@/types/navigation";
import BottomTabNavigator from "./BottomTabNavigator";
import SplashScreen from "../screens/BootPage/SplashScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import PrivacyPolicyScreen from "../screens/BootPage/PrivacyPolicyScreen";
import { isTokenValid } from "@/utils/auth";

type Props = {
  initialRouteName?: keyof RootStackParamList;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC<Props> = ({initialRouteName = "Login"}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, // 启用手势返回
        gestureDirection: "horizontal", // 手势方向
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // iOS风格水平滑动
        transitionSpec: {
          open: {
            animation: "spring",
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            },
          },
          close: {
            animation: "spring",
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            },
          },
        },
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          // 允许嵌套导航的跳转
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        listeners={({ navigation }) => ({
          beforeRemove: async (e) => {
            // 可以在这里添加退出登录的逻辑
            // 例如：清除用户令牌、重置状态等
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
