import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/home";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import About from "./screens/about";
import ReviewsDetails from "./screens/reviewsDetails";
import { enableScreens } from "react-native-screens";

enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Mali-Regular": require("./assets/fonts/Mali-Regular.ttf"),
    "Mali-Bold": require("./assets/fonts/Mali-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    // <Home />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewsDetails" component={ReviewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontFamily: "Mali-Bold",
  },
});
