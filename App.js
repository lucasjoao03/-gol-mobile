// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "./src/navigation/TabNavigation";
// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabNavigation />
//     </NavigationContainer>
//   );
// };

// export default App;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import TabNavigation from "./src/navigation/TabNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
