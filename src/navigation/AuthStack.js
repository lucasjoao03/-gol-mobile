import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
