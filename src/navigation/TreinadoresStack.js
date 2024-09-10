import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TreinadoresScreen from "../screens/TreinadoresScreen";
import ListaTreinadoresScreen from "../screens/ListaTreinadoresScreen";

const Stack = createStackNavigator();

const TreinadoresStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CadastrarTreinador"
        component={TreinadoresScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaTreinadores"
        component={ListaTreinadoresScreen}
        options={{ title: "Lista de Treinadores" }}
      />
    </Stack.Navigator>
  );
};

export default TreinadoresStack;
