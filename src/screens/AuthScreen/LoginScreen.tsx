import React, {useState} from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/types/navigation";
import {setToken} from "@/utils/tokenUtils";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleLogin = async () => {
    // Minimal local auth flow for app startup.
    await setToken("mock-token");
    navigation.replace("Main");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={styles.container}>
          <Image source={require("@/assets/images/login/bottom-bg.png")} style={styles.bottomBackground} resizeMode="cover" />

          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}>
            <Image source={require("@/assets/images/login/logo.png")} style={styles.logo} resizeMode="contain" />

            <View style={styles.form}>
              <Text style={styles.title}>密码登录</Text>

              <View style={styles.inputWrapper}>
                <Image source={require("@/assets/images/login/icon-phone.png")} style={styles.inputIcon} resizeMode="contain" />
                <TextInput
                  style={styles.input}
                  placeholder="输入账号"
                  placeholderTextColor="#a8adb3"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {username.length > 0 ? (
                  <TouchableOpacity style={styles.inputAction} onPress={() => setUsername("")} activeOpacity={0.7}>
                    <Image
                      source={require("@/assets/images/login/icon-clear.png")}
                      style={styles.actionIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              <View style={styles.inputWrapper}>
                <Image
                  source={require("@/assets/images/login/icon-passwword.png")}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.input}
                  placeholder="输入密码"
                  placeholderTextColor="#a8adb3"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!passwordVisible}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  style={styles.inputAction}
                  onPress={() => setPasswordVisible(value => !value)}
                  activeOpacity={0.7}>
                  <Image
                    source={
                      passwordVisible
                        ? require("@/assets/images/login/icon-view.png")
                        : require("@/assets/images/login/icon-hide.png")
                    }
                    style={styles.actionIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.linkRow}>
                <TouchableOpacity activeOpacity={0.75}>
                  <Text style={styles.linkText}>立即注册</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.75}>
                  <Text style={styles.linkText}>忘记密码</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.85}>
                <Text style={styles.loginButtonText}>登录</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.codeLoginButton} activeOpacity={0.75}>
                <Text style={styles.codeLoginText}>验证码登录</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.agreement} onPress={() => setAgreementChecked(value => !value)} activeOpacity={0.8}>
            <Image
              source={
                agreementChecked
                  ? require("@/assets/images/login/icon-checked.png")
                  : require("@/assets/images/login/icon-unchecked.png")
              }
              style={styles.checkbox}
              resizeMode="contain"
            />
            <Text style={styles.agreementText}>
              我已阅读并同意
              <Text style={styles.agreementLink}>《用户注册协议》</Text>和<Text style={styles.agreementLink}>《隐私政策》</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  bottomBackground: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    aspectRatio: 750 / 332,
  },
  content: {
    flexGrow: 1,
    paddingTop: 60,
    paddingRight: 26,
    paddingBottom: 200,
    paddingLeft: 26,
  },
  logo: {
    alignSelf: "center",
    width: 100,
    height: 135,
    marginBottom: 84,
  },
  form: {
    width: "100%",
  },
  title: {
    marginBottom: 20,
    color: "#171717",
    fontSize: 24,
    fontWeight: "700",
  },
  inputWrapper: {
    height: 48,
    marginBottom: 13,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#f6f6f8",
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    padding: 0,
    color: "#1f1f1f",
    fontSize: 16,
  },
  inputAction: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  actionIcon: {
    width: 18,
    height: 18,
  },
  linkRow: {
    marginTop: 2,
    marginBottom: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    color: "#21c45e",
    fontSize: 14,
    fontWeight: "700",
  },
  loginButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#7cd99a",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  codeLoginButton: {
    alignSelf: "center",
    marginTop: 22,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  codeLoginText: {
    color: "#20c562",
    fontSize: 18,
    fontWeight: "700",
  },
  agreement: {
    position: "absolute",
    right: 18,
    bottom: 20,
    left: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    width: 13,
    height: 13,
    marginRight: 5,
  },
  agreementText: {
    color: "#6a7078",
    fontSize: 10,
    fontWeight: "600",
  },
  agreementLink: {
    color: "#0fb866",
    fontWeight: "700",
  },
});

export default LoginScreen;
