import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import About from "./screens/about";
import ReviewsDetails from "./screens/reviewsDetails";

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

  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontFamily: "Mali-Bold",
  },
});
