import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListaTurmasScreen from "../screens/ListaTurmasScreen";
import TurmasScreen from "../screens/TurmasScreen";
const Stack = createStackNavigator();

const TurmasStack = () => {
  return (
    <Stack.Navigator initialRouteName="NovaTurma">
      <Stack.Screen
        name="NovaTurma"
        component={TurmasScreen}
        options={{ title: "Nova Turma", headerShown: false }}
      />
      <Stack.Screen
        name="ListaTurmas"
        component={ListaTurmasScreen}
        options={{ title: "Lista de turmas" }}
      />
    </Stack.Navigator>
  );
};

export default TurmasStack;
