import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const About = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Button
        title="ReviewsDetails"
        onPress={() => navigation.navigate("ReviewsDetails")}
      />
      <Text style={globalStyles.titleTxt}>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
