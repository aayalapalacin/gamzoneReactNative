import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewsDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
};

export default ReviewsDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
