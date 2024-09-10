import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AlunosScreen from "../screens/AlunosScreen";
import ListaAlunosScreen from "../screens/ListaAlunosScreeen";
const Stack = createStackNavigator();

const AlunosStack = () => {
  return (
    <Stack.Navigator initialRouteName="NovoAluno">
      <Stack.Screen
        name="NovoAluno"
        component={AlunosScreen}
        options={{ title: "Novo Aluno", headerShown: false }}
      />
      <Stack.Screen
        name="ListaAlunos"
        component={ListaAlunosScreen}
        options={{ title: "Lista de Alunos" }}
      />
    </Stack.Navigator>
  );
};

export default AlunosStack;
