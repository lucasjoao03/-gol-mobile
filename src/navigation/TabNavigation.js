import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import TreinosScreen from "../screens/TreinosScreen";
import TreinadoresStack from "./TreinadoresStack";
import AlunosStack from "../navigation/AlunosStack";
import TurmasScreen from "../screens/TurmasScreen";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Treinos") {
            iconName = "football";
          } else if (route.name === "Alunos") {
            iconName = "people";
          } else if (route.name === "Treinadores") {
            iconName = "person";
          } else if (route.name === "Turmas") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#B3B3B3",
        tabBarStyle: {
          backgroundColor: "#212121",
          borderTopWidth: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Treinos" component={TreinosScreen} />
      <Tab.Screen name="Treinadores" component={TreinadoresStack} />
      <Tab.Screen name="Alunos" component={AlunosStack} />
      <Tab.Screen name="Turmas" component={TurmasScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
