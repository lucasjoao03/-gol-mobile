import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import TreinosScreen from "../screens/TreinosScreen";
import TreinadoresScreen from "../screens/TreinadoresScreen";
import AlunosScreen from "../screens/AlunosScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Treinos") {
            iconName = "ios-settings";
          } else if (route.name === "Alunos") {
            iconName = "ios-people";
          } else if (route.name === "Treinadores") {
            iconName = "ios-settings";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Treinos" component={TreinosScreen} />
      <Tab.Screen name="Treinadores" component={TreinadoresScreen} />
      <Tab.Screen name="Alunos" component={AlunosScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
