import React, {useCallback} from "react";
import {createBottomTabNavigator, BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {Image, StyleSheet, ImageSourcePropType, Pressable, PressableProps} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {useTabBar} from "@/navigation/TabBarContext";
import { TabParamList } from "@/types/navigation";
import FieldStackNavigator from "./tabNavigators/FieldStackNavigator";
import TaskStackNavigator from "./tabNavigators/TaskStackNavigator";
import ProfileStackNavigator from "./tabNavigators/ProfileStackNavigator";

// Tab 实例
const Tab = createBottomTabNavigator<TabParamList>();

// 图片资源
const tabIcons: Record<keyof TabParamList, {active: ImageSourcePropType; inactive: ImageSourcePropType}> = {
  FieldManagement: {
    active: require("@/assets/images/tabBar/field_green.png"),
    inactive: require("@/assets/images/tabBar/field_black.png"),
  },
  TaskManagement: {
    active: require("@/assets/images/tabBar/task_green.png"),
    inactive: require("@/assets/images/tabBar/task_black.png"),
  },
  Profile: {
    active: require("@/assets/images/tabBar/profile_green.png"),
    inactive: require("@/assets/images/tabBar/profile_black.png"),
  },
};

// TabBarIcon 组件
interface TabBarIconProps {
  iconSource: ImageSourcePropType;
}
const TabBarIcon: React.FC<TabBarIconProps> = ({iconSource}) => (
  <Image source={iconSource} style={styles.tabIcon} resizeMode="contain" />
);

const CustomTabBarButton: React.FC<PressableProps> = props => <Pressable {...props} android_ripple={null} />;

// 外部的 tabBarIcon 渲染函数
const renderTabBarIcon =
  (routeName: keyof TabParamList) =>
  ({focused}: {focused: boolean}) => {
    const iconConfig = tabIcons[routeName];
    const iconSource = focused ? iconConfig.active : iconConfig.inactive;
    return <TabBarIcon iconSource={iconSource} />;
  };

const BottomTabNavigator: React.FC = () => {
  const {visible} = useTabBar();

  // 记忆化 screenOptions
  const screenOptions = useCallback(
    ({route}: {route: RouteProp<TabParamList, keyof TabParamList>}): BottomTabNavigationOptions => ({
      tabBarIcon: renderTabBarIcon(route.name),
      tabBarActiveTintColor: "#4CAF50",
      tabBarInactiveTintColor: "#333",
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 3,
      },
      tabBarStyle: [
        {
          height: 60,
          paddingTop: 5,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
        !visible && {display: "none"},
      ],
      tabBarButton: props => <CustomTabBarButton {...props} />,
    }),
    [visible],
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="FieldManagement" component={FieldStackNavigator} options={{title: "土地管理", headerShown: false}} />
      <Tab.Screen name="TaskManagement" component={TaskStackNavigator} options={{title: "农事管理", headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{title: "个人中心", headerShown: false}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default BottomTabNavigator;
