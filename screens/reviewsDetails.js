import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewsDetails = ({ route }) => {
  return (
    <View style={globalStyles.container}>
      <Text> Review Details Screen</Text>
      {/* <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text> */}
    </View>
  );
};

export default ReviewsDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
