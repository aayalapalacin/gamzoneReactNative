import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewsDetails = () => {
  return (
    <View style={globalStyles.container}>
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
