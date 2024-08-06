// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import ChatScreen from "./screens/ChatScreen"; // Ensure this path is correct

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={ChatScreen} />{" "}
        {/* Add the ChatScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
