import React, {useEffect} from "react";
import {StyleSheet, ImageBackground, StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {RootStackParamList} from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Splash">;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    const checkAgreement = async () => {
      const isAgreed = await AsyncStorage.getItem("userAgreed");
      navigation.replace(isAgreed === "true" ? "Login" : "PrivacyPolicy");
    };

    const timer = setTimeout(() => {
      checkAgreement();
    }, 1200);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground source={require("@/assets/images/bootPage/boot.png")} style={styles.container} resizeMode="cover" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default SplashScreen;
