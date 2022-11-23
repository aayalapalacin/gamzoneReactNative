import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewsDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Text style={globalStyles.titleTxt}>ReviewsDetails</Text>
    </View>
  );
};

export default ReviewsDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
