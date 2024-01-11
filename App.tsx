import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomeScreen from "./src/screens/home";
import ContentScreen from "./src/screens/content";
import CCameraScreen from "./src/screens/camera";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
        <Stack.Screen name="Content" component={ContentScreen} options={{ title: "Nội dung" }} />
        <Stack.Screen name="Camera" component={CCameraScreen} options={{ title: "Camera" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
