import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Text style={globalStyles.titleTxt}>Homer</Text>
    </View>
  );
};

export default Home;
