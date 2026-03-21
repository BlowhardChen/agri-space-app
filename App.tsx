import React, {useEffect, useRef, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootSiblingParent} from "react-native-root-siblings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator, View} from "react-native";
import {Provider as PaperProvider} from "react-native-paper";
import {AuthProvider} from "@/hooks/useAuth";
import {RootStackParamList} from "@/types/navigation";
import {isTokenValid} from "@/utils/auth";
import {navigationRef} from "@/navigation/navigationRef";
import AppNavigator from "./src/navigation/AppNavigator";
import {TabBarProvider} from "@/navigation/TabBarContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const routeNameRef = useRef<string>("");
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

  useEffect(() => {
    const initApp = async () => {
      const agreed = await AsyncStorage.getItem("userAgreed");
      if (agreed !== "true") {
        setInitialRoute("Splash");
        return;
      }

      const valid = await isTokenValid();
      setInitialRoute(valid ? "Main" : "Login");
    };

    initApp();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <RootSiblingParent>
        <AuthProvider>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current = initialRoute;
            }}>
            <TabBarProvider>
              <AppNavigator initialRouteName={initialRoute} />
            </TabBarProvider>
          </NavigationContainer>
        </AuthProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
}
