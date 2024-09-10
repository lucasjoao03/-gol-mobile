import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace("TabNavigatorName", {
      screen: "Home",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.appName}>+GOL</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={{ color: "#FFF" }}>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Acessar</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: "https://example.com/gol-logo.png" }}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: 20,
  },
  loginText: {
    fontSize: 28,
    color: "white",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 45,
    color: "#FFF",
  },
  showPasswordIcon: {
    padding: 10,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginTop: 40,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  appName: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1b5e20",
  },
});

export default LoginScreen;
